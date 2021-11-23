import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { TaxaEServicoEditViewModel } from 'src/app/shared/viewModels/taxaEServico/TaxaEServicoEditViewModel';
import { HttpTaxaEServicoService } from '../services/http-taxa-e-servico.service';

@Component({
  selector: 'app-taxa-e=servico-editar',
  templateUrl: './taxa-e-servico-editar.component.html',
  styleUrls: ['./taxa-e-servico-editar.component.scss']
})
export class TaxaEServicoEditarComponent implements OnInit {

  id: number;

  cadastroForm: FormGroup;

  carregandoTaxaEServico = true;
  enviando = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
              private servico: HttpTaxaEServicoService,
              private router: Router,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      preco: new FormControl(''),
      ehFixo: new FormControl(''),
    });

    this.carregarTaxaEServico();
  }

  editarTaxaEServico() {
    this.enviando = true;

    let taxaEServico = new TaxaEServicoEditViewModel();
    taxaEServico = Object.assign({}, taxaEServico, this.cadastroForm.value);

    this.servico.editar(this.id, taxaEServico)
    .subscribe(_ => {
      this.toast.info("Taxa E Servico editada com sucesso");
      this.voltarParaListar();
    },
    error => {
      this.toast.erro(error);
      this.enviando = false;
    })
  }

  carregarTaxaEServico() {
    this.servico.obterPorId(this.id)
    .subscribe(taxaEServico => {
      this.cadastroForm = new FormGroup({
        nome: new FormControl(taxaEServico.nome, Validators.required),
        preco: new FormControl(taxaEServico.preco, Validators.required),
        ehFixo: new FormControl(taxaEServico.ehFixo, Validators.required),
      });

      this.carregandoTaxaEServico = false;
    });
  }

  voltarParaListar() {
    this.router.navigate(["taxaEServico/listar"])
  }

}
