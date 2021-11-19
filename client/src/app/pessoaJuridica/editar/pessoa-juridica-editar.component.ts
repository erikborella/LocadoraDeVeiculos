import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaJuridicaEditViewModel } from 'src/app/shared/viewModels/pessoaJuridica/PessoaJuridicaEditViewModel';
import { HttpPessoaJuridicaService } from '../services/http-pessoa-juridica.service';

@Component({
  selector: 'app-pessoa-juridica-editar',
  templateUrl: './pessoa-juridica-editar.component.html',
  styleUrls: ['./pessoa-juridica-editar.component.scss']
})
export class PessoaJuridicaEditarComponent implements OnInit {

  id: number;

  cadastroForm: FormGroup;

  carregandoPessoaJuridica = true;
  enviando = false;

  mascaraCNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  mascaraTelefone = ['(', /[1-9]/, /[1-9]/, ')', ' ', '9', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private _ActivatedRoute: ActivatedRoute,
              private servico: HttpPessoaJuridicaService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      cnpj: new FormControl(''),
      telefone: new FormControl(''),
      endereco: new FormControl(''),
      email: new FormControl(''),
    });

    this.carregarPessoaJuridica();
  }

  editarPessoaJuridica() {
    this.enviando = true;

    let pessoaJuridica = new PessoaJuridicaEditViewModel();
    pessoaJuridica = Object.assign({}, pessoaJuridica, this.cadastroForm.value);

    this.servico.editar(this.id, pessoaJuridica)
    .subscribe(_ => {
      this.voltarParaListar();
    })
  }

  carregarPessoaJuridica() {
    this.servico.obterPorId(this.id)

    .subscribe(pessoaJuridica => {
      this.cadastroForm = new FormGroup({
        nome: new FormControl(pessoaJuridica.nome),
        cnpj: new FormControl(pessoaJuridica.cnpj),
        telefone: new FormControl(pessoaJuridica.telefone),
        endereco: new FormControl(pessoaJuridica.endereco),
        email: new FormControl(pessoaJuridica.email),
      });
    });

    this.carregandoPessoaJuridica = false;
  }

  voltarParaListar() {
    this.router.navigate(["pessoaJuridica/listar"])
  }

}
