import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
nombre = 'Erick';
apellido = 'Saltos';
loadingVisible = false;

visualizarLoading(){
  this.loadingVisible = true;
  setTimeout(()=>{
    this.loadingVisible = false
  },1000);
}
}
