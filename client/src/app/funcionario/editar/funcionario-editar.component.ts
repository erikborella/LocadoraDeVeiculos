import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioEditViewModel } from 'src/app/shared/viewModels/funcionario/FuncionarioEditViewModel';
import { HttpFuncionarioService } from '../services/http-funcionario.service';

@Component({
  selector: 'app-funcionario-editar',
  templateUrl: './funcionario-editar.component.html',
  styleUrls: ['./funcionario-editar.component.scss']
})
export class FuncionarioEditarComponent implements OnInit {

  id:number;

  cadastroForm: FormGroup;

  carregandoFuncionario = true;
  enviando = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private servico: HttpFuncionarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      salario: new FormControl('')
    });

    this.carregarFuncionario();
  }

  editarFuncionario() {
    this.enviando = true;

    let funcionario = new FuncionarioEditViewModel();
    funcionario = Object.assign({}, funcionario, this.cadastroForm.value);

    this.servico.editar(this.id, funcionario)
    .subscribe(_ => {
      this.voltarParaListar();
    })
  }

  carregarFuncionario() {
    this.servico.obterPorId(this.id)
    .subscribe(funcionario => {

      this.cadastroForm = new FormGroup({
        nome: new FormControl(funcionario.nome),
        salario: new FormControl(funcionario.salario)
      });

      this.carregandoFuncionario = false;

    });
  }

  voltarParaListar() {
    this.router.navigate(["funcionario/listar"])
  }

}
