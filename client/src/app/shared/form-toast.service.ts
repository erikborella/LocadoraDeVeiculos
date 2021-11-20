import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FormToastService {

  constructor(private _snackBar: MatSnackBar) { }

  info(msg: string) {
    this._snackBar.open(msg, "Fechar", {
      duration: 5000,
    })
  }

  erro(error: any) {    
    if (typeof(error.error) === "string") {
      this._snackBar.open(error.error, "Fechar", {
        duration: 5000,
      })
    } else {
      for (let nomeErro in error.error.errors) {
        this._snackBar.open(error.error.errors[nomeErro], "Fechar", {
          duration: 5000,
        })
      }
    }
  }
}
