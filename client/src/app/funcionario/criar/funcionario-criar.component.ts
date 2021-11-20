import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { FuncionarioCreateViewModel } from 'src/app/shared/viewModels/funcionario/FuncionarioCreateViewModel';
import { HttpFuncionarioService } from '../services/http-funcionario.service';

@Component({
  selector: 'app-funcionario-criar',
  templateUrl: './funcionario-criar.component.html',
  styleUrls: ['./funcionario-criar.component.scss']
})
export class FuncionarioCriarComponent implements OnInit {
  cadastroForm: FormGroup;
  funcionario: FuncionarioCreateViewModel;

  enviando = false;

  constructor(private servico: HttpFuncionarioService, 
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      salario: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
    });
  }

  adicionarFuncionario() {
    this.enviando = true;
    this.funcionario = Object.assign({}, this.funcionario, this.cadastroForm.value);
    
    this.servico.adicionar(this.funcionario)
    .subscribe(_ => {
      this.toast.info("Funcionario criado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    });
  }

  voltarParaListar() {
    this.router.navigate(["funcionario/listar"])
  }

}
