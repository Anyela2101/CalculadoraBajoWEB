import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {
  restando1: number;
  restando2: number;
  resultado: number;
  constructor() { }

  ngOnInit(): void {
  }
  resta(): void{
    this.resultado=this.restando1-this.restando2;
  }
}
