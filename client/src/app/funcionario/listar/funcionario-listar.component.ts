import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogExcluirComponent } from 'src/app/shared/dialog-excluir/dialog-excluir.component';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { FuncionarioListViewModel } from 'src/app/shared/viewModels/funcionario/FuncionarioListViewModel';
import { ParceiroListViewModel } from 'src/app/shared/viewModels/parceiro/ParceiroListViewModel';
import { HttpFuncionarioService } from '../services/http-funcionario.service';

@Component({
  selector: 'app-funcionario-listar',
  templateUrl: './funcionario-listar.component.html',
  styleUrls: ['./funcionario-listar.component.scss']
})
export class FuncionarioListarComponent implements OnInit {

  funcionarios: FuncionarioListViewModel[] = [];
  dataSource: MatTableDataSource<FuncionarioListViewModel>;

  idSelecionado: number | null = null;

  carregandoFuncionarios: boolean = true;

  colunas = ['Nome', 'Salario'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: HttpFuncionarioService,
              private dialog: MatDialog,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.carregarFuncionarios();
  }

  carregarFuncionarios() {
    this.carregandoFuncionarios = true;
    this.service.obterTodos()
    .subscribe(funcionarios => {
      this.funcionarios = funcionarios;
      this.dataSource = new MatTableDataSource<FuncionarioListViewModel>(this.funcionarios);

      this.dataSource.paginator = this.paginator;
      this.carregandoFuncionarios = false;
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
          this.toast.info("Funcionario excluido com sucesso");
          this.idSelecionado = null;
          this.carregarFuncionarios();
        },
        error => {
          this.toast.erro("Erro ao deletar, verifique as suas dependencias!");
        });
      }

    });
  }
}
