import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { DialogExcluirComponent } from 'src/app/shared/dialog-excluir/dialog-excluir.component';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { ParceiroListViewModel } from 'src/app/shared/viewModels/parceiro/ParceiroListViewModel';
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
              private dialog: MatDialog,
              private toast: FormToastService) { }
  
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
    const dialogRef = this.dialog.open(DialogExcluirComponent, {
      width: '250px'
    });

    dialogRef.afterClosed()
    .subscribe(podeExcluir => {
      if (podeExcluir) {
        this.service.excluir(Number(this.idSelecionado))
        .subscribe(_ => {
          this.toast.info("Parceiro excluido com sucesso");
          this.idSelecionado = null;
          this.carregarParceiros();
        },
        error => {
          this.toast.erro({error: "Erro ao deletar, verifique as suas dependencias!"});
        });
      }

    });
  }
  
}
