import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @Input() estaAberta: boolean = true;
  @Output() estaAbertaChange = new EventEmitter<boolean>();

  showFiller: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showFiller = true;
  }

  navBarMudada(estaAberto: boolean) {
    this.estaAberta = estaAberto;
    this.estaAbertaChange.emit(this.estaAberta);
  }

}
