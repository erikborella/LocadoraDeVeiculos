import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { GrupoAutomovelCreateViewModel } from 'src/app/shared/viewModels/grupoAutomovel/GrupoAutomovelCreateViewModel';
import { IPlanoDiario } from 'src/app/shared/viewModels/grupoAutomovel/interfaces/IPlanoDiario';
import { IPlanoKmControlado } from 'src/app/shared/viewModels/grupoAutomovel/interfaces/IPlanoKmControlado';
import { IPlanoKmLivre } from 'src/app/shared/viewModels/grupoAutomovel/interfaces/IPlanoKmLivre';
import { HttpGrupoAutomovelService } from '../services/http-grupo-automovel.service';

@Component({
  selector: 'app-grupo-automovel-editar',
  templateUrl: './grupo-automovel-editar.component.html',
  styleUrls: ['./grupo-automovel-editar.component.scss']
})
export class GrupoAutomovelEditarComponent implements OnInit {

  id: number;

  cadastroForm: FormGroup;
  planoDiarioForm: FormGroup;
  planoKmControladoForm: FormGroup;
  planoKmLivreForm: FormGroup;

  carregandoGrupoAutomovel = true;
  enviando = false;
  
  constructor(private _ActivatedRoute: ActivatedRoute,
              private servico: HttpGrupoAutomovelService,
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
    });

    this.planoDiarioForm = new FormGroup({
      precoDia: new FormControl(''),
      precoKm: new FormControl('')
    });

    this.planoKmControladoForm = new FormGroup({
      precoDia: new FormControl(''),
      precoKmExtrapolado: new FormControl(''),
      kmDisponiveis: new FormControl('')
    });

    this.planoKmLivreForm = new FormGroup({
      precoDia: new FormControl('')
    });

    this.carregarGrupoAutomovel();
  }

  editarGrupoAutomovel() {
    this.enviando = true;

    let grupoAutomovel = new GrupoAutomovelCreateViewModel();
    let planoDiario: IPlanoDiario = {precoDia: 0, precoKm: 0};
    let planoKmControlado: IPlanoKmControlado = {kmDisponiveis: 0, precoDia: 0, precoKmExtrapolado: 0};
    let planoKmLivre: IPlanoKmLivre = {precoDia: 0};

    planoDiario = Object.assign({}, planoDiario, this.planoDiarioForm.value);
    planoKmControlado = Object.assign({}, planoKmControlado, this.planoKmControladoForm.value);
    planoKmLivre = Object.assign({}, planoKmLivre, this.planoKmLivreForm.value);

    grupoAutomovel.nome = this.cadastroForm.value['nome'];
    grupoAutomovel.planoDiario = planoDiario;
    grupoAutomovel.planoKmControlado = planoKmControlado;
    grupoAutomovel.planoKmLivre = planoKmLivre;

    this.servico.editar(this.id, grupoAutomovel)
    .subscribe(_ => {
      this.toast.info("Grupo Automovel editado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    })
  }


  carregarGrupoAutomovel() {
    this.servico.obterPorId(this.id)
    .subscribe(grupoAutomovel => {
      this.cadastroForm = new FormGroup({
        nome: new FormControl(grupoAutomovel.nome, Validators.required),
      });
  
      this.planoDiarioForm = new FormGroup({
        precoDia: new FormControl(grupoAutomovel.planoDiario.precoDia, Validators.required),
        precoKm: new FormControl(grupoAutomovel.planoDiario.precoKm, Validators.required)
      });
  
      this.planoKmControladoForm = new FormGroup({
        precoDia: new FormControl(grupoAutomovel.planoKmControlado.precoDia, Validators.required),
        precoKmExtrapolado: new FormControl(grupoAutomovel.planoKmControlado.precoKmExtrapolado, Validators.required),
        kmDisponiveis: new FormControl(grupoAutomovel.planoKmControlado.kmDisponiveis, Validators.required)
      });
  
      this.planoKmLivreForm = new FormGroup({
        precoDia: new FormControl(grupoAutomovel.planoKmLivre.precoDia, Validators.required)
      });

      this.carregandoGrupoAutomovel = false;
    });
  }

  voltarParaListar() {
    this.router.navigate(["grupoAutomovel/listar"])
  }

}
