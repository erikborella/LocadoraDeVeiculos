import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormToastService } from 'src/app/shared/form-toast.service';
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
              private router: Router,
              private toast: FormToastService) { }

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
      this.toast.info("Funcionario editado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    })
  }

  carregarFuncionario() {
    this.servico.obterPorId(this.id)
    .subscribe(funcionario => {

      this.cadastroForm = new FormGroup({
        nome: new FormControl(funcionario.nome, Validators.required),
        salario: new FormControl(funcionario.salario, Validators.required)
      });

      this.carregandoFuncionario = false;

    });
  }

  voltarParaListar() {
    this.router.navigate(["funcionario/listar"])
  }

}
