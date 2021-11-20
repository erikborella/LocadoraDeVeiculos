import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { ParceiroCreateViewModel } from 'src/app/shared/viewModels/parceiro/ParceiroCreateViewModel';
import { HttpParceiroService } from '../services/http-parceiro.service';
import { MascarasInput } from "../../shared/mascarasInput"

@Component({
  selector: 'app-parceiro-criar',
  templateUrl: './parceiro-criar.component.html',
  styleUrls: ['./parceiro-criar.component.scss']
})
export class ParceiroCriarComponent implements OnInit {
  cadastroForm: FormGroup;
  parceiro: ParceiroCreateViewModel

  mascaraTelefone = MascarasInput.mascaraTelefone;

  enviando: boolean = false;

  constructor(private servico: HttpParceiroService, 
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required)
    });
  }

  adicionarParceiro() {
    this.enviando = true;
    this.parceiro = Object.assign({}, this.parceiro, this.cadastroForm.value);
    
    this.servico.adicionar(this.parceiro)
    .subscribe(_ => {
      this.toast.info("Parceiro criado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    });
  }

  voltarParaListar() {
    this.router.navigate(["parceiro/listar"])
  }
}
