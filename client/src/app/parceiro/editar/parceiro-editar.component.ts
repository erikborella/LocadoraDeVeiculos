import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { MascarasInput } from 'src/app/shared/mascarasInput';
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
  
  mascaraTelefone = MascarasInput.mascaraTelefone;

  constructor(private _ActivatedRoute: ActivatedRoute,
              private servico: HttpParceiroService,
              private router: Router,
              private toast: FormToastService) { }

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
      this.toast.info("Parceiro editado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    });
    
  }

  carregarParceiro() {
    this.servico.obterPorId(this.id)
    .subscribe(parceiro => {

      this.cadastroForm = new FormGroup({
        nome: new FormControl(parceiro.nome, Validators.required),
        telefone: new FormControl(parceiro.telefone, Validators.required)
      });

      this.carregandoParceiro = false;
    });
  }

  voltarParaListar() {
    this.router.navigate(["parceiro/listar"])
  }

}
