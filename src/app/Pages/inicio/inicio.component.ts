import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
nombre = 'Erick';
apellido = 'Saltos';
loadingVisible = false;
formUsurio!: FormGroup;

constructor(private ruta: Router,
  private mensajes: MessageService ){

}
  ngOnInit(): void {
    this.buildFormulario();
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

verificar(){
  console.log(this.formUsurio)
  if(this.formUsurio.valid){
    this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
  } else {
    this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
  };
}

buildFormulario(){
  this.formUsurio = new FormGroup(
    {
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required])
    }
  )
}

}
