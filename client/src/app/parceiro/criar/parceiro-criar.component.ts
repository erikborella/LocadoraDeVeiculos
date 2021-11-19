import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ParceiroCreateViewModel } from 'src/app/shared/viewModels/parceiro/ParceiroCreateViewModel';
import { HttpParceiroService } from '../services/http-parceiro.service';

@Component({
  selector: 'app-parceiro-criar',
  templateUrl: './parceiro-criar.component.html',
  styleUrls: ['./parceiro-criar.component.scss']
})
export class ParceiroCriarComponent implements OnInit {
  cadastroForm: FormGroup;
  parceiro: ParceiroCreateViewModel

  mascaraTelefone = ['(', /[1-9]/, /[1-9]/, ')', ' ', '9', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  enviando: boolean = false;

  constructor(private servico: HttpParceiroService, private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      telefone: new FormControl('')
    });
  }

  adicionarParceiro() {
    this.enviando = true;
    this.parceiro = Object.assign({}, this.parceiro, this.cadastroForm.value);
    
    this.servico.adicionar(this.parceiro)
    .subscribe(_ => {
      this.voltarParaListar();
    })
  }

  voltarParaListar() {
    this.router.navigate(["parceiro/listar"])
  }
}
