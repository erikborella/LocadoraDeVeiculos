import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { MascarasInput } from 'src/app/shared/mascarasInput';
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

  mascaraCNPJ = MascarasInput.mascaraCNPJ;
  mascaraTelefone = MascarasInput.mascaraTelefone;
  
  constructor(private _ActivatedRoute: ActivatedRoute,
              private servico: HttpPessoaJuridicaService,
              private router: Router,
              private toast: FormToastService) { }

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
      this.toast.info("Pessoa Juridica editado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    })
  }

  carregarPessoaJuridica() {
    this.servico.obterPorId(this.id)

    .subscribe(pessoaJuridica => {
      this.cadastroForm = new FormGroup({
        nome: new FormControl(pessoaJuridica.nome, Validators.required),
        cnpj: new FormControl(pessoaJuridica.cnpj, Validators.required),
        telefone: new FormControl(pessoaJuridica.telefone, Validators.required),
        endereco: new FormControl(pessoaJuridica.endereco, Validators.required),
        email: new FormControl(pessoaJuridica.email, Validators.compose([Validators.email, Validators.required])),
      });
      
      this.carregandoPessoaJuridica = false;
    });
  }

  voltarParaListar() {
    this.router.navigate(["pessoaJuridica/listar"])
  }

}
