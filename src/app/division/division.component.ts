import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  dividendo : number;
  divisor: number;
  resultado: number;

  constructor() { }

  ngOnInit(): void {
  }
  division(): void{
    this.resultado=this.dividendo/this.divisor;
  }

}
