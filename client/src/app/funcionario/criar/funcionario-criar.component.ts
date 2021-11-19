import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private servico: HttpFuncionarioService, private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      salario: new FormControl(''),
      senha: new FormControl('')
    });
  }

  adicionarFuncionario() {
    this.enviando = true;
    this.funcionario = Object.assign({}, this.funcionario, this.cadastroForm.value);
    
    this.servico.adicionar(this.funcionario)
    .subscribe(_ => {
      this.voltarParaListar();
    })
  }

  voltarParaListar() {
    this.router.navigate(["funcionario/listar"])
  }

}
