import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogExcluirComponent } from 'src/app/shared/dialog-excluir/dialog-excluir.component';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { GrupoAutomovelListViewModel } from 'src/app/shared/viewModels/grupoAutomovel/GrupoAutomovelListViewModel';
import { HttpGrupoAutomovelService } from '../services/http-grupo-automovel.service';

@Component({
  selector: 'app-grupo-automovel-listar',
  templateUrl: './grupo-automovel-listar.component.html',
  styleUrls: ['./grupo-automovel-listar.component.scss']
})
export class GrupoAutomovelListarComponent implements OnInit {

  gruposAutomoveis: GrupoAutomovelListViewModel[] = [];
  dataSource: MatTableDataSource<GrupoAutomovelListViewModel>;

  idSelecionado: number | null = null;

  carregandoGruposAutomoveis: boolean = true;

  colunas = ['Nome'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: HttpGrupoAutomovelService,
              private dialog: MatDialog,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.carregarGruposAutomoveis();
  }


  carregarGruposAutomoveis() {
    this.carregandoGruposAutomoveis = true;
    this.service.obterTodos()
    .subscribe(gruposAutomoveis => {
      this.gruposAutomoveis = gruposAutomoveis;
      this.dataSource = new MatTableDataSource<GrupoAutomovelListViewModel>(this.gruposAutomoveis);

      this.dataSource.paginator = this.paginator;
      this.carregandoGruposAutomoveis = false;
    });
  }

  selecionarLinha(row: GrupoAutomovelListViewModel) {
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
          this.toast.info("Grupo Automovel excluido com sucesso");
          this.idSelecionado = null;
          this.carregarGruposAutomoveis();
        },
        error => {
          this.toast.erro({error: "Erro ao deletar, verifique as suas dependencias!"});
        });
      }

    });
  }

}
