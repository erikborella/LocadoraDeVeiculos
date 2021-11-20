import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogExcluirComponent } from 'src/app/shared/dialog-excluir/dialog-excluir.component';
import { FormToastService } from 'src/app/shared/form-toast.service';
import { PessoaFisicaListViewModel } from 'src/app/shared/viewModels/pessoaFisica/PessoaFisicaListViewModel';
import { HttpPessoaFisicaService } from '../services/http-pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica-listar',
  templateUrl: './pessoa-fisica-listar.component.html',
  styleUrls: ['./pessoa-fisica-listar.component.scss']
})
export class PessoaFisicaListarComponent implements OnInit {


  pessoasFisicas: PessoaFisicaListViewModel[] = [];
  dataSource: MatTableDataSource<PessoaFisicaListViewModel>;

  idSelecionado: number | null = null;

  carregandoPessoasFisicas = true;

  colunas = ['Nome', 'CPF', 'Telefone'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: HttpPessoaFisicaService,
              private dialog: MatDialog,
              private toast: FormToastService) { }

  ngOnInit(): void {
    this.carregarPessoasFisicas();
  }

  carregarPessoasFisicas() {
    this.carregandoPessoasFisicas = true;
    this.service.obterTodos()
    .subscribe(pessoasFisicas => {
      this.pessoasFisicas = pessoasFisicas;
      this.dataSource = new MatTableDataSource<PessoaFisicaListViewModel>(pessoasFisicas);

      this.dataSource.paginator = this.paginator;
      this.carregandoPessoasFisicas = false;     
    });
  }

  selecionarLinha(row: PessoaFisicaListViewModel) {
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
          this.toast.info("Pessoa Fisica excluido com sucesso");
          this.idSelecionado = null;
          this.carregarPessoasFisicas();
        },
        error => {
          this.toast.erro({error: "Erro ao deletar, verifique as suas dependencias!"});
        });
      }

    });
  }

}
