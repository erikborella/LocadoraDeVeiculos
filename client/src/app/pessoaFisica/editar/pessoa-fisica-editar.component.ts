import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpPessoaJuridicaService } from 'src/app/pessoaJuridica/services/http-pessoa-juridica.service';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { MascarasInput } from 'src/app/shared/mascarasInput';
import { PessoaFisicaEditViewModel } from 'src/app/shared/viewModels/pessoaFisica/PessoaFisicaEditViewModel';
import { PessoaJuridicaListViewModel } from 'src/app/shared/viewModels/pessoaJuridica/PessoaJuridicaListViewModel';
import { HttpPessoaFisicaService } from '../services/http-pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica-editar',
  templateUrl: './pessoa-fisica-editar.component.html',
  styleUrls: ['./pessoa-fisica-editar.component.scss']
})
export class PessoaFisicaEditarComponent implements OnInit {

  id: number;
  listaPessoasJuridicas: PessoaJuridicaListViewModel[];

  cadastroForm: FormGroup;

  carregandoPessoaFisica = true;
  enviando = false;

  mascaraCPF = MascarasInput.mascaraCPF;
  mascaraTelefone = MascarasInput.mascaraTelefone;

  constructor(private _ActivatedRoute: ActivatedRoute,
              private servico: HttpPessoaFisicaService,
              private servicoPessoaJuridica: HttpPessoaJuridicaService,
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      rg: new FormControl(''),
      cnh: new FormControl(''),
      vencimentoCNH: new FormControl(''),
      telefone: new FormControl(''),
      email: new FormControl(''),
      endereco: new FormControl(''),
      pessoaJuridicaId: new FormControl(null),
    });

    this.carregarPessoasJuridicas();
  }

  carregarPessoasJuridicas() {
    this.servicoPessoaJuridica.obterTodos()
    .subscribe(pessoasJuridicas => {
      this.listaPessoasJuridicas = pessoasJuridicas;

      this.carregarPessoaFisica();
    })
  }

  carregarPessoaFisica() {
    this.servico.obterPorId(this.id)
    .subscribe(pessoaFisica => {

      this.cadastroForm = new FormGroup({
        nome: new FormControl(pessoaFisica.nome, Validators.required),
        cpf: new FormControl(pessoaFisica.cpf, Validators.required),
        rg: new FormControl(pessoaFisica.rg, Validators.required),
        cnh: new FormControl(pessoaFisica.cnh, Validators.required),
        vencimentoCNH: new FormControl(pessoaFisica.vencimentoCNH, Validators.required),
        telefone: new FormControl(pessoaFisica.telefone, Validators.required),
        email: new FormControl(pessoaFisica.email, Validators.compose([Validators.required, Validators.email])),
        endereco: new FormControl(pessoaFisica.endereco, Validators.required),
        pessoaJuridicaId: new FormControl(pessoaFisica.pessoaJuridicaId),
      });

      this.carregandoPessoaFisica = false;
    });
  }

  editarPessoaFisica() {
    this.enviando = true;

    let pessoaFisica = new PessoaFisicaEditViewModel();
    pessoaFisica = Object.assign({}, pessoaFisica, this.cadastroForm.value);

    this.servico.editar(this.id, pessoaFisica)
    .subscribe(_ => {
      this.toast.info("Pessoa Fisica editada com sucesso");
      this.voltarParaListar();   
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    })
  }

  voltarParaListar() {
    this.router.navigate(["pessoaFisica/listar"])
  }

}
