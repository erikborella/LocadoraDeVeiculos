import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpGrupoAutomovelService } from 'src/app/grupoAutomovel/services/http-grupo-automovel.service';
import { EnumToCadastroEnum, ICadastroEnum } from 'src/app/shared/EnumToCadastroEnum';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { AutomovelCreateViewModel } from 'src/app/shared/viewModels/automovel/AutomovelCreateViewModel';
import { CambioEnum } from 'src/app/shared/viewModels/automovel/enums/CambioEnum';
import { DirecaoEnum } from 'src/app/shared/viewModels/automovel/enums/DirecaoEnum';
import { TipoCombustivelEnum } from 'src/app/shared/viewModels/automovel/enums/TipoCombustivelEnum';
import { GrupoAutomovelListViewModel } from 'src/app/shared/viewModels/grupoAutomovel/GrupoAutomovelListViewModel';
import { HttpAutomovelService } from '../services/http-automovel.service';

@Component({
  selector: 'app-automovel-criar',
  templateUrl: './automovel-criar.component.html',
  styleUrls: ['./automovel-criar.component.scss']
})
export class AutomovelCriarComponent implements OnInit {

  cadastroForm: FormGroup;
  
  listaGrupos: GrupoAutomovelListViewModel[];

  enviando = false;
  carregandoGrupos = false;

  conversorEnum = new EnumToCadastroEnum();

  //enums
  tipoCombustiveis = this.conversorEnum.converter(TipoCombustivelEnum);
  tipoCambios = this.conversorEnum.converter(CambioEnum);
  tipoDirecoes = this.conversorEnum.converter(DirecaoEnum);

  constructor(private servico: HttpAutomovelService,
              private servicoGrupoAutomovel: HttpGrupoAutomovelService,
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {    
    this.cadastroForm = new FormGroup({
      modelo: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      cor: new FormControl('', Validators.required),
      placa: new FormControl('', Validators.required),
      chassi: new FormControl('', Validators.required),
      ano: new FormControl('', Validators.required),
      portas: new FormControl('', Validators.required),
      capacidadeTanque: new FormControl('', Validators.required),
      tamanhoPortaMalas: new FormControl('', Validators.required),
      kmRegistrada: new FormControl('', Validators.required),
      tipoCombustivel: new FormControl('', Validators.required),
      cambio: new FormControl('', Validators.required),
      direcao: new FormControl('', Validators.required),
      grupoId: new FormControl('', Validators.required),
    });

    this.carregarGrupos();
  }

  adicionarAutomovel() {
    this.enviando = true;

    let automovel = new AutomovelCreateViewModel();
    automovel = Object.assign({}, automovel, this.cadastroForm.value);

    this.servico.adicionar(automovel)
    .subscribe(_ => {
      this.toast.info("Automovel criado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    })
  }

  carregarGrupos() {
    this.carregandoGrupos = true;

    this.servicoGrupoAutomovel.obterTodos()
    .subscribe(grupos => {
      this.listaGrupos = grupos;
      this.carregandoGrupos = false;
    });
  }

  voltarParaListar() {
    this.router.navigate(["automovel/listar"])
  }

}
