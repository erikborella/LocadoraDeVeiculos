import { Component, OnInit, ViewChild } from '@angular/core';
import { CupomListViewModel } from 'src/app/shared/viewModels/cupom/CupomListViewModel';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpCupomService } from '../services/http-cupom.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogExcluirComponent } from 'src/app/shared/dialog-excluir/dialog-excluir.component';

@Component({
  selector: 'app-cupom-listar',
  templateUrl: './cupom-listar.component.html',
  styleUrls: ['./cupom-listar.component.scss']
})
export class CupomListarComponent implements OnInit {


  cupons: CupomListViewModel[] = []
  dataSource: MatTableDataSource<CupomListViewModel>;

  idSelecionado: number | null = null;

  carregandoCupons: boolean = true;

  colunas = ['Codigo', 'Parceiro', 'Data Vencimento', 'Valor', 'Valor Minimo', 'Tipo'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: HttpCupomService, 
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.carregarCupons();
  }

  carregarCupons() {
    this.carregandoCupons = true;
    this.service.obterTodos()
    .subscribe(cupons => {
      this.cupons = cupons;
      this.dataSource = new MatTableDataSource<CupomListViewModel>(this.cupons);

      this.dataSource.paginator = this.paginator;
      this.carregandoCupons = false;
    });
  }

  selecionarLinha(row: CupomListViewModel) {
    this.idSelecionado = row.id;
  }

  formatarData(data: Date): string {
    return new Date(data).toLocaleDateString();
  }

  abrirDialogExclusao() {
    const dialogRef = this.dialog.open(DialogExcluirComponent, {
      width: '250px'
    });

    dialogRef.afterClosed()
    .subscribe(podeExcluir => {
      if (podeExcluir) {
        this.service.excluir(Number(this.idSelecionado))
        .subscribe({
          next: _ => {
            this.carregarCupons();
          },
          error: _ => alert("Erro ao deletar, verifique as suas dependencias!"),
          complete: () => null
        });
      }

    });
  }
}
