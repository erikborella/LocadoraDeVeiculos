import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ParceiroListViewModel } from 'src/app/shared/viewModels/parceiro/ParceiroListViewModel';
import { ParceiroExcluirComponent } from '../excluir/parceiro-excluir.component';
import { HttpParceiroService } from '../services/http-parceiro.service';

@Component({
  selector: 'app-parceiro-listar',
  templateUrl: './parceiro-listar.component.html',
  styleUrls: ['./parceiro-listar.component.scss']
})
export class ParceiroListarComponent implements OnInit {

  parceiros: ParceiroListViewModel[] = []
  dataSource: MatTableDataSource<ParceiroListViewModel>;

  idSelecionado: number | null = null;

  carregandoParceiros: boolean = true;

  colunas = ['Nome', 'Telefone'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: HttpParceiroService, 
              private dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.carregarParceiros(); 
  }

  carregarParceiros() {
    this.carregandoParceiros = true;
    this.service.obterTodos()
    .subscribe(parceiros => {
      this.parceiros = parceiros;
      this.dataSource = new MatTableDataSource<ParceiroListViewModel>(this.parceiros);

      this.dataSource.paginator = this.paginator;
      this.carregandoParceiros = false;
    });
  }
  
  selecionarLinha(row: ParceiroListViewModel) {
    this.idSelecionado = row.id;
  }

  abrirDialogExclusao() {
    const dialogRef = this.dialog.open(ParceiroExcluirComponent, {
      width: '250px'
    });

    dialogRef.afterClosed()
    .subscribe(podeExcluir => {
      if (podeExcluir) {
        this.service.excluir(Number(this.idSelecionado))
        .subscribe({
          next: _ => {
            this.carregarParceiros();
          },
          error: _ => alert("Erro ao deletar, verifique as suas dependencias!"),
          complete: () => null
        });
      }

    });
  }
  
}
