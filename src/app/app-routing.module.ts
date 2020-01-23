import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotonPapeleraComponent } from './botonpapelera/botonpapelera.component';
import { AppComponent } from './app.component';
import { DemoAppComponentComponent } from './demo-app-component/demo-app-component.component';


const routes: Routes = [
  {
    path: 'routing', component: BotonPapeleraComponent, pathMatch: 'full'
  },
  {
    path: '', component: DemoAppComponentComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
