import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpGrupoAutomovelService } from 'src/app/grupoAutomovel/services/http-grupo-automovel.service';
import { EnumToCadastroEnum } from 'src/app/shared/EnumToCadastroEnum';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { AutomovelCreateViewModel } from 'src/app/shared/viewModels/automovel/AutomovelCreateViewModel';
import { AutomovelEditViewModel } from 'src/app/shared/viewModels/automovel/AutomovelEditViewModel';
import { CambioEnum } from 'src/app/shared/viewModels/automovel/enums/CambioEnum';
import { DirecaoEnum } from 'src/app/shared/viewModels/automovel/enums/DirecaoEnum';
import { TipoCombustivelEnum } from 'src/app/shared/viewModels/automovel/enums/TipoCombustivelEnum';
import { GrupoAutomovelListViewModel } from 'src/app/shared/viewModels/grupoAutomovel/GrupoAutomovelListViewModel';
import { HttpAutomovelService } from '../services/http-automovel.service';

@Component({
  selector: 'app-automovel-editar',
  templateUrl: './automovel-editar.component.html',
  styleUrls: ['./automovel-editar.component.scss']
})
export class AutomovelEditarComponent implements OnInit {

  id: number;
  listaGrupos: GrupoAutomovelListViewModel[];

  cadastroForm: FormGroup;
  
  carregandoAutomovel = true;
  enviando = false;

  conversorEnum = new EnumToCadastroEnum();

  //enums
  tipoCombustiveis = this.conversorEnum.converter(TipoCombustivelEnum);
  tipoCambios = this.conversorEnum.converter(CambioEnum);
  tipoDirecoes = this.conversorEnum.converter(DirecaoEnum);

  constructor(private _ActivatedRoute: ActivatedRoute,
              private servico: HttpAutomovelService,
              private servicoGrupoAutomovel: HttpGrupoAutomovelService,
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.cadastroForm = new FormGroup({
      modelo: new FormControl(''),
      marca: new FormControl(''),
      cor: new FormControl(''),
      placa: new FormControl(''),
      chassi: new FormControl(''),
      ano: new FormControl(''),
      portas: new FormControl(''),
      capacidadeTanque: new FormControl(''),
      tamanhoPortaMalas: new FormControl(''),
      kmRegistrada: new FormControl(''),
      tipoCombustivel: new FormControl(''),
      cambio: new FormControl(''),
      direcao: new FormControl(''),
      grupoId: new FormControl(''),
    });

    this.carregarGrupos();
  }

  carregarGrupos() {
    this.servicoGrupoAutomovel.obterTodos()
    .subscribe(grupos => {
      this.listaGrupos = grupos;

      this.carregarAutomovel();
    })
  }

  carregarAutomovel() {
    this.servico.obterPorId(this.id)

    .subscribe(automovel => {
      this.cadastroForm = new FormGroup({
        modelo: new FormControl(automovel.modelo, Validators.required),
        marca: new FormControl(automovel.marca, Validators.required),
        cor: new FormControl(automovel.cor, Validators.required),
        placa: new FormControl(automovel.placa, Validators.required),
        chassi: new FormControl(automovel.chassi, Validators.required),
        ano: new FormControl(automovel.ano, Validators.required),
        portas: new FormControl(automovel.portas, Validators.required),
        capacidadeTanque: new FormControl(automovel.capacidadeTanque, Validators.required),
        tamanhoPortaMalas: new FormControl(automovel.tamanhoPortaMalas, Validators.required),
        kmRegistrada: new FormControl(automovel.kmRegistrada, Validators.required),
        tipoCombustivel: new FormControl(automovel.tipoCombustivel, Validators.required),
        cambio: new FormControl(automovel.cambio, Validators.required),
        direcao: new FormControl(automovel.direcao, Validators.required),
        grupoId: new FormControl(automovel.grupoId, Validators.required),
      });

      this.carregandoAutomovel = false;
    });
  }

  editarAutomovel() {
    this.enviando = true;

    let automovel = new AutomovelEditViewModel();
    automovel = Object.assign({}, automovel, this.cadastroForm.value);

    this.servico.editar(this.id, automovel)
    .subscribe(_ => {
      this.toast.info("Automovel editado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    })
  }

  voltarParaListar() {
    this.router.navigate(["automovel/listar"])
  }
}
