import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogExcluirComponent } from 'src/app/shared/dialog-excluir/dialog-excluir.component';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { TaxaEServicoListViewModel } from 'src/app/shared/viewModels/taxaEServico/TaxaEServicoListViewModel';
import { HttpTaxaEServicoService } from '../services/http-taxa-e-servico.service';

@Component({
  selector: 'app-taxa-e-servico-listar',
  templateUrl: './taxa-e-servico-listar.component.html',
  styleUrls: ['./taxa-e-servico-listar.component.scss']
})
export class TaxaEServicoListarComponent implements OnInit {

  taxasEServicos: TaxaEServicoListViewModel[] = [];
  dataSource: MatTableDataSource<TaxaEServicoListViewModel>;

  idSelecionado: number | null = null;

  carregandoTaxasEServicos = true;

  colunas = ['Nome', 'Preco', 'Tipo'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: HttpTaxaEServicoService,
              private dialog: MatDialog,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.carregarTaxasEServicos();
  }

  carregarTaxasEServicos() {
    this.carregandoTaxasEServicos = true;
    this.service.obterTodos()
    .subscribe(taxasEServicos => {
      this.taxasEServicos = taxasEServicos;
      this.dataSource = new MatTableDataSource<TaxaEServicoListViewModel>(this.taxasEServicos);

      this.dataSource.paginator = this.paginator;
      this.carregandoTaxasEServicos = false;
    });
  }

  selecionarLinha(row: TaxaEServicoListViewModel) {
    this.idSelecionado = row.id;
  }

  abrirDialogExclusao() {
    const dialogRef = this.dialog.open(DialogExcluirComponent, {
      width: '250px'
    });

    dialogRef.afterClosed()
    .subscribe(podeExcluir => {
      if (podeExcluir) {
        this.service.excluir(Number(this.idSelecionado))
        .subscribe(_ => {
          this.toast.info("Taxa E Servico excluida com sucesso");
          this.idSelecionado = null;
          this.carregarTaxasEServicos();
        },
        error => {
          this.toast.erro({error: "Erro ao deletar, verifique as suas dependencias!"});
        });
      }

    });
  }
  
}
