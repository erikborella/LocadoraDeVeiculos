import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogExcluirComponent } from 'src/app/shared/dialog-excluir/dialog-excluir.component';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { AutomovelListViewModel } from 'src/app/shared/viewModels/automovel/AutomovelListViewModel';
import { HttpAutomovelService } from '../services/http-automovel.service';

@Component({
  selector: 'app-automovel-listar',
  templateUrl: './automovel-listar.component.html',
  styleUrls: ['./automovel-listar.component.scss']
})
export class AutomovelListarComponent implements OnInit {

  automoveis: AutomovelListViewModel[] = [];
  dataSource: MatTableDataSource<AutomovelListViewModel>;

  idSelecionado: number | null = null;

  carregandoAutomoveis: boolean = true;

  colunas = ['Modelo', 'Placa', 'Km Registrada', 'Grupo'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: HttpAutomovelService,
              private dialog: MatDialog,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.carregarAutomoveis();
  }

  carregarAutomoveis() {
    this.carregandoAutomoveis = true;

    this.service.obterTodos()
    .subscribe(automoveis => {
      this.automoveis = automoveis;
      this.dataSource = new MatTableDataSource<AutomovelListViewModel>(this.automoveis);

      this.dataSource.paginator = this.paginator;
      this.carregandoAutomoveis = false;
    });
  }

  selecionarLinha(row: AutomovelListViewModel) {
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
          this.toast.info("Automovel excluido com sucesso");
          this.idSelecionado = null;
          this.carregarAutomoveis();
        },
        error => {
          this.toast.erro({error: "Erro ao deletar, verifique as suas dependencias!"});
        });
      }

    });
  }

}
