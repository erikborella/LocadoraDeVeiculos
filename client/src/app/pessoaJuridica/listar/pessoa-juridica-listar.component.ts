import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogExcluirComponent } from 'src/app/shared/dialog-excluir/dialog-excluir.component';
import { PessoaJuridicaListViewModel } from 'src/app/shared/viewModels/pessoaJuridica/PessoaJuridicaListViewModel';
import { HttpPessoaJuridicaService } from '../services/http-pessoa-juridica.service';

@Component({
  selector: 'app-pessoa-juridica-listar',
  templateUrl: './pessoa-juridica-listar.component.html',
  styleUrls: ['./pessoa-juridica-listar.component.scss']
})
export class PessoaJuridicaListarComponent implements OnInit {

  pessoasJuridicas: PessoaJuridicaListViewModel[] = [];
  dataSource: MatTableDataSource<PessoaJuridicaListViewModel>;

  idSelecionado: number | null = null;

  carregandoPessoasJuridicas = true;

  colunas = ['Nome', 'Telefone', 'Endereco'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: HttpPessoaJuridicaService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.carregarPessoasJuridicas();
  }

  carregarPessoasJuridicas() {
    this.carregandoPessoasJuridicas = true;
    this.service.obterTodos()
    .subscribe(pessoasJuridicas => {
      this.pessoasJuridicas = pessoasJuridicas;
      this.dataSource = new MatTableDataSource<PessoaJuridicaListViewModel>(this.pessoasJuridicas);
    
      this.dataSource.paginator = this.paginator;
      this.carregandoPessoasJuridicas = false;
    })
  }

  selecionarLinha(row: PessoaJuridicaListViewModel) {
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
        .subscribe({
          next: _ => {
            this.carregarPessoasJuridicas();
          },
          error: _ => alert("Erro ao deletar, verifique as suas dependencias!"),
          complete: () => null
        });
      }

    });
  }
}
