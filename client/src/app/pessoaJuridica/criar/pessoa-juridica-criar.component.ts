import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { MascarasInput } from 'src/app/shared/mascarasInput';
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

  mascaraCNPJ = MascarasInput.mascaraCNPJ;
  mascaraTelefone = MascarasInput.mascaraTelefone;

  constructor(private servico: HttpPessoaJuridicaService, 
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      cnpj: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.email, Validators.required]) ),
    });
  }

  adicionarPessoaJuridica() {
    this.enviando = true;
    this.pessoaJuridica = Object.assign({}, this.pessoaJuridica, this.cadastroForm.value);

    this.servico.adicionar(this.pessoaJuridica)
    .subscribe(_ => {
      this.toast.info("Pessoa Juridica criado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    })
  }

  voltarParaListar() {
    this.router.navigate(["pessoaJuridica/listar"])
  }

}
