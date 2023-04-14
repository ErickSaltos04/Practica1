import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
nombre = 'Erick';
apellido = 'Saltos';
loadingVisible = false;

constructor(private ruta: Router ){

}

visualizarLoading(){
  this.loadingVisible = true;
  setTimeout(()=>{
    this.loadingVisible = false
  },1000);
}

irPaginaTabla(){
this.ruta.navigate(['tabla']);
}
}
