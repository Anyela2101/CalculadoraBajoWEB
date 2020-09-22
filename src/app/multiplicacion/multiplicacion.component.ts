import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent implements OnInit {
  multiplicando: number;
  multiplicador: number;
  resultado: number;
  constructor() { }

  ngOnInit(): void {
  }
  multiplicacion(): void{
    this.resultado=this.multiplicando*this.multiplicador;
  }
}
