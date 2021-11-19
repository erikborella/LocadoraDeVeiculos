import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaJuridicaCreateViewModel } from 'src/app/shared/viewModels/pessoaJuridica/PessoaJuridicaCreateViewModel';
import { HttpPessoaJuridicaService } from '../services/http-pessoa-juridica.service';

@Component({
  selector: 'app-pessoa-juridica-criar',
  templateUrl: './pessoa-juridica-criar.component.html',
  styleUrls: ['./pessoa-juridica-criar.component.scss']
})
export class PessoaJuridicaCriarComponent implements OnInit {
  cadastroForm: FormGroup;
  pessoaJuridica: PessoaJuridicaCreateViewModel;

  enviando = false;

  mascaraCNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  mascaraTelefone = ['(', /[1-9]/, /[1-9]/, ')', ' ', '9', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private servico: HttpPessoaJuridicaService, private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      cnpj: new FormControl(''),
      telefone: new FormControl(''),
      endereco: new FormControl(''),
      email: new FormControl(''),
    });
  }

  adicionarPessoaJuridica() {
    this.enviando = true;
    this.pessoaJuridica = Object.assign({}, this.pessoaJuridica, this.cadastroForm.value);

    this.servico.adicionar(this.pessoaJuridica)
    .subscribe(_ => {
      this.voltarParaListar();
    })
  }

  voltarParaListar() {
    this.router.navigate(["pessoaJuridica/listar"])
  }

}
