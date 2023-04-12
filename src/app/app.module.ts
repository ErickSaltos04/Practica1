import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { LoadingComponent } from './Components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
