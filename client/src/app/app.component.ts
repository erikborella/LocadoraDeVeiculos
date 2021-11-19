import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  navBarAberta: boolean = true;

  mudarNavBarAberta(estaAberta: boolean) {
    this.navBarAberta = estaAberta;
  }
}
