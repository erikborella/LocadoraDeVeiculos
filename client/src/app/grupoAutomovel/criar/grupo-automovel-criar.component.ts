import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { GrupoAutomovelCreateViewModel } from 'src/app/shared/viewModels/grupoAutomovel/GrupoAutomovelCreateViewModel';
import { IPlanoDiario } from 'src/app/shared/viewModels/grupoAutomovel/interfaces/IPlanoDiario';
import { IPlanoKmControlado } from 'src/app/shared/viewModels/grupoAutomovel/interfaces/IPlanoKmControlado';
import { IPlanoKmLivre } from 'src/app/shared/viewModels/grupoAutomovel/interfaces/IPlanoKmLivre';
import { HttpGrupoAutomovelService } from '../services/http-grupo-automovel.service';

@Component({
  selector: 'app-grupo-automovel-criar',
  templateUrl: './grupo-automovel-criar.component.html',
  styleUrls: ['./grupo-automovel-criar.component.scss']
})
export class GrupoAutomovelCriarComponent implements OnInit {

  cadastroForm: FormGroup;
  planoDiarioForm: FormGroup;
  planoKmControladoForm: FormGroup;
  planoKmLivreForm: FormGroup;
  
  enviando = false;

  constructor(private servico: HttpGrupoAutomovelService,
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
    });

    this.planoDiarioForm = new FormGroup({
      precoDia: new FormControl('', Validators.required),
      precoKm: new FormControl('', Validators.required)
    });

    this.planoKmControladoForm = new FormGroup({
      precoDia: new FormControl('', Validators.required),
      precoKmExtrapolado: new FormControl('', Validators.required),
      kmDisponiveis: new FormControl('', Validators.required)
    });

    this.planoKmLivreForm = new FormGroup({
      precoDia: new FormControl('', Validators.required)
    });
  }

  adicionarGrupoAutomovel() {
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

    this.servico.adicionar(grupoAutomovel)
    .subscribe(_ => {
      this.toast.info("Grupo Automovel criado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    });
  }

  voltarParaListar() {
    this.router.navigate(["grupoAutomovel/listar"])
  }

}
