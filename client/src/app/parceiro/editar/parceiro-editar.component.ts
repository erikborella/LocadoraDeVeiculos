import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParceiroEditViewModel } from 'src/app/shared/viewModels/parceiro/ParceiroEditViewModel';
import { HttpParceiroService } from '../services/http-parceiro.service';

@Component({
  selector: 'app-parceiro-editar',
  templateUrl: './parceiro-editar.component.html',
  styleUrls: ['./parceiro-editar.component.scss']
})
export class ParceiroEditarComponent implements OnInit {

  id:number;

  cadastroForm: FormGroup;

  carregandoParceiro = true;
  enviando = false;
  
  mascaraTelefone = ['(', /[1-9]/, /[1-9]/, ')', ' ', '9', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private _ActivatedRoute: ActivatedRoute,
              private servico: HttpParceiroService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    
    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      telefone: new FormControl('')
    });

    this.carregarParceiro();
  }

  editarParceiro() {
    this.enviando = true;

    let parceiro = new ParceiroEditViewModel();
    parceiro = Object.assign({}, parceiro, this.cadastroForm.value);

    this.servico.editar(this.id, parceiro)
    .subscribe(_ => {
      this.voltarParaListar();
    })
    
  }

  carregarParceiro() {
    this.servico.obterPorId(this.id)
    .subscribe(parceiro => {

      this.cadastroForm = new FormGroup({
        nome: new FormControl(parceiro.nome),
        telefone: new FormControl(parceiro.telefone)
      });

      this.carregandoParceiro = false;
    });
  }

  voltarParaListar() {
    this.router.navigate(["parceiro/listar"])
  }

}
