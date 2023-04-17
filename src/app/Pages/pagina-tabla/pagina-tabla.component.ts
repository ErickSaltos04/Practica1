import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IDataEmpleado, iEmpleados } from 'src/app/interfaces/empleadosInterfaces';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements OnInit {
  listEmpleado: IDataEmpleado[] = [];
  constructor(private ruta: Router,
    private empleadoService: EmpleadoService){

  }
  ngOnInit(): void {
    console.log('Hola estoy aqui');
    this.empleadoService.getAllEmployee().subscribe(
      (res) => {
        console.log(res);
        this.listEmpleado = res.data;
      }, (error) => {
        console.log(error);
      }
    );
  }

  regresarInicio( ){
    this.ruta.navigate(['inicio']);
  }

}

