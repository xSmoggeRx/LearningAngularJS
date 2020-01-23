import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BotonPapeleraComponent } from './botonpapelera/botonpapelera.component';
import { DemoAppComponentComponent } from './demo-app-component/demo-app-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BotonPapeleraComponent,
    DemoAppComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
