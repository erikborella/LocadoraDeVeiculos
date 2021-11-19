import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpParceiroService } from 'src/app/parceiro/services/http-parceiro.service';
import { CupomCreateViewModel } from 'src/app/shared/viewModels/cupom/CupomCreateViewModel';
import { ParceiroListViewModel } from 'src/app/shared/viewModels/parceiro/ParceiroListViewModel';
import { HttpCupomService } from '../services/http-cupom.service';

@Component({
  selector: 'app-cupom-criar',
  templateUrl: './cupom-criar.component.html',
  styleUrls: ['./cupom-criar.component.scss']
})
export class CupomCriarComponent implements OnInit {
  cadastroForm: FormGroup;
  
  cupom: CupomCreateViewModel;
  listaParceiros: ParceiroListViewModel[];

  enviando = false;
  carregandoParceiros = false;

  constructor(private servico: HttpCupomService, 
              private servicoParceiro: HttpParceiroService,
              private router: Router) { }

  ngOnInit(): void {
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

  adicionarCupom() {
    this.enviando = true;
    this.cupom = Object.assign({}, this.cupom, this.cadastroForm.value);
    console.log(this.cupom);
    
    this.servico.adicionar(this.cupom)
    .subscribe(_ => {
      this.voltarParaListar();
    })
  }

  carregarParceiros() {
    this.carregandoParceiros = true;
    this.servicoParceiro.obterTodos()
    .subscribe(parceiros => {
      this.listaParceiros = parceiros;
      this.carregandoParceiros = false;
    });
  }

  voltarParaListar() {
    this.router.navigate(["cupom/listar"])
  }

}
