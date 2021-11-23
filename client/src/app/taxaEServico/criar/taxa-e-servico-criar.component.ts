import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { TaxaEServicoCreateViewModel } from 'src/app/shared/viewModels/taxaEServico/TaxaEServicoCreateViewModel';
import { HttpTaxaEServicoService } from '../services/http-taxa-e-servico.service';

@Component({
  selector: 'app-taxa-e-servico-criar',
  templateUrl: './taxa-e-servico-criar.component.html',
  styleUrls: ['./taxa-e-servico-criar.component.scss']
})
export class TaxaEServicoCriarComponent implements OnInit {

  cadastroForm: FormGroup;

  enviando = false;

  constructor(private servico: HttpTaxaEServicoService,
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      preco: new FormControl('', Validators.required),
      ehFixo: new FormControl(false, Validators.required)
    });
  }

  adicionarTaxaEServico() {
    this.enviando = true;
    let taxaEServico = new TaxaEServicoCreateViewModel();
    taxaEServico = Object.assign({}, taxaEServico, this.cadastroForm.value);

    this.servico.adicionar(taxaEServico)
    .subscribe(_ => {
      this.toast.info("Taxa E Servico criada com sucesso!");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    })
  }


  voltarParaListar() {
    this.router.navigate(["taxaEServico/listar"])
  }

}
