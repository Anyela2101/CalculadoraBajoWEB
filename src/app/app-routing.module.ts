import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SumaComponent } from './suma/suma.component';
import { HomeComponent } from './home/home.component';
import { RestaComponent } from './resta/resta.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { DivisionComponent } from './division/division.component';

const routes: Routes = [
  {path: 'suma', component: SumaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'resta', component: RestaComponent},
  {path: 'multiplicacion', component: MultiplicacionComponent},
  {path: 'division', component: DivisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
