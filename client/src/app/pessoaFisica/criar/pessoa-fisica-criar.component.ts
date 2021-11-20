import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpPessoaJuridicaService } from 'src/app/pessoaJuridica/services/http-pessoa-juridica.service';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { MascarasInput } from 'src/app/shared/mascarasInput';
import { PessoaFisicaCreateViewModel } from 'src/app/shared/viewModels/pessoaFisica/PessoaFisicaCreateViewModel';
import { PessoaJuridicaListViewModel } from 'src/app/shared/viewModels/pessoaJuridica/PessoaJuridicaListViewModel';
import { HttpPessoaFisicaService } from '../services/http-pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica-criar',
  templateUrl: './pessoa-fisica-criar.component.html',
  styleUrls: ['./pessoa-fisica-criar.component.scss']
})
export class PessoaFisicaCriarComponent implements OnInit {

  cadastroForm: FormGroup;

  pessoaFisica: PessoaFisicaCreateViewModel;
  listaPessoasJuridicas: PessoaJuridicaListViewModel[];

  enviando = false;
  carregandoPessoasJuridicas = false;

  mascaraCPF = MascarasInput.mascaraCPF;
  mascaraTelefone = MascarasInput.mascaraTelefone;

  constructor(private servico: HttpPessoaFisicaService,
              private servicoPessoaJuridica: HttpPessoaJuridicaService,
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      rg: new FormControl('', Validators.required),
      cnh: new FormControl('', Validators.required),
      vencimentoCNH: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      endereco: new FormControl('', Validators.required),
      pessoaJuridicaId: new FormControl(null),
    });

    this.carregarPessoasJuridicas();
  }

  adicionarPessoaFisica() {
    this.enviando = true;
    this.pessoaFisica = Object.assign({}, this.pessoaFisica, this.cadastroForm.value);

    this.servico.adicionar(this.pessoaFisica)
    .subscribe(_ => {
      this.toast.info("Pessoa Fisica criada com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    })
  }

  carregarPessoasJuridicas() {
    this.carregandoPessoasJuridicas = true;

    this.servicoPessoaJuridica.obterTodos()
    .subscribe(pessoasJuridicas => {
      this.listaPessoasJuridicas = pessoasJuridicas;
      this.carregandoPessoasJuridicas = false;
    });
  }

  voltarParaListar() {
    this.router.navigate(["pessoaFisica/listar"])
  }

}
