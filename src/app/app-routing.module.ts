import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { TableroIngresosComponent } from './sections/tablero-ingresos/tablero-ingresos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  /* Secciones */
  { path: 'tablero-ingresos', component: TableroIngresosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
