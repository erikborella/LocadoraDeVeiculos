import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpParceiroService } from 'src/app/parceiro/services/http-parceiro.service';
import { FormToastService } from 'src/app/shared/form-toast.service';
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
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      parceiroId: new FormControl('', Validators.required),
      codigo: new FormControl('', Validators.required),
      dataVencimento: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required),
      valorMinimo: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
    });
    
    this.carregarParceiros();
  }

  adicionarCupom() {
    this.enviando = true;
    this.cupom = Object.assign({}, this.cupom, this.cadastroForm.value);
    
    this.servico.adicionar(this.cupom)
    .subscribe(_ => {
      this.toast.info("Cupom criado com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
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
