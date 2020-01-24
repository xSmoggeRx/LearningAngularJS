import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotonPapeleraComponent } from './botonpapelera/botonpapelera.component';
import { AppComponent } from './app.component';
import { DemoAppComponentComponent } from './demo-app-component/demo-app-component.component';
import { SumatorioComponent } from './sumatorio/sumatorio.component';
import { NotasComponent } from './notas/notas.component';


const routes: Routes = [
  {
    path: 'routing', component: BotonPapeleraComponent, pathMatch: 'full'
  },
  {
    path: '', component: DemoAppComponentComponent, pathMatch: 'full'
  },
  {
    path: 'sumatorio', component: SumatorioComponent, pathMatch: 'full'
  },
  {
    path: 'notas', component: NotasComponent, pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
