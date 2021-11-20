import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParceiroService } from 'src/app/parceiro/services/http-parceiro.service';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { CupomEditViewModel } from 'src/app/shared/viewModels/cupom/CupomEditViewModel';
import { ParceiroListViewModel } from 'src/app/shared/viewModels/parceiro/ParceiroListViewModel';
import { HttpCupomService } from '../services/http-cupom.service';

@Component({
  selector: 'app-cupom-editar',
  templateUrl: './cupom-editar.component.html',
  styleUrls: ['./cupom-editar.component.scss']
})
export class CupomEditarComponent implements OnInit {

  id: number;
  listaParceiros: ParceiroListViewModel[];

  cadastroForm: FormGroup;

  carregandoCupom = true;
  enviando = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
              private servico: HttpCupomService, 
              private servicoParceiro: HttpParceiroService,
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.cadastroForm = new FormGroup({
      parceiroId: new FormControl(''),
      codigo: new FormControl(''),
      dataVencimento: new FormControl(''),
      valor: new FormControl(''),
      valorMinimo: new FormControl(''),
      tipo: new FormControl(''),
    });

    this.carregarParceiros();
  }

  carregarParceiros() {
    this.servicoParceiro.obterTodos()
    .subscribe(parceiros => {
      this.listaParceiros = parceiros;
      
      this.carregarCupom();
    });
  }

  carregarCupom() {
    this.servico.obterPorId(this.id)
    .subscribe(cupom => {
      
      this.cadastroForm = new FormGroup({
        codigo: new FormControl(cupom.codigo, Validators.required),
        dataVencimento: new FormControl(cupom.dataVencimento, Validators.required),
        valor: new FormControl(cupom.valor, Validators.required),
        valorMinimo: new FormControl(cupom.valorMinimo, Validators.required),
        tipo: new FormControl((cupom.tipo === "Porcentagem" ? 0:1), Validators.required),
        parceiroId: new FormControl(cupom.parceiroId, Validators.required),
      });

      this.carregandoCupom = false;
    });
  }

  editarCupom() {
    this.enviando = true;

    let cupom = new CupomEditViewModel();
    cupom = Object.assign({}, cupom, this.cadastroForm.value);    

    this.servico.editar(this.id, cupom)
    .subscribe(_ => {
      this.toast.info("Cupom editado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    })
  }

  voltarParaListar() {
    this.router.navigate(["cupom/listar"])
  }

}
