import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table'; 
import { AppRoutingModule } from './app-routing.module';
import { PaginaTablaComponent } from './Pages/pagina-tabla/pagina-tabla.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoadingComponent,
    PaginaTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
