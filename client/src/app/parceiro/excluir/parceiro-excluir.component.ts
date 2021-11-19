import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-parceiro-excluir',
  templateUrl: './parceiro-excluir.component.html',
  styleUrls: ['./parceiro-excluir.component.scss']
})
export class ParceiroExcluirComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ParceiroExcluirComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  confirmar() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(false);
  }
}
