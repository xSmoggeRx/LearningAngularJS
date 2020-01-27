import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BotonPapeleraComponent } from './botonpapelera/botonpapelera.component';
import { DemoAppComponentComponent } from './demo-app-component/demo-app-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SumatorioComponent } from './sumatorio/sumatorio.component';
import { NotasComponent } from './notas/notas.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BotonPapeleraComponent,
    DemoAppComponentComponent,
    SumatorioComponent,
    NotasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
