import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {
  sumando1: number;
  sumando2: number;
  resultado: number;
  constructor() { }

  ngOnInit(): void {
  }

  suma(): void {
    this.resultado = this.sumando1 + this.sumando2;
  }
}
