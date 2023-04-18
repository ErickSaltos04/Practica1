import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IDataEmpleado, iEmpleados } from 'src/app/interfaces/empleadosInterfaces';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements OnInit {
  listEmpleado: IDataEmpleado[] = [];
  columnTabla: any;
  listMenu: MenuItem[] =[];
  activeItem!: MenuItem;
  constructor(private ruta: Router,
    private empleadoService: EmpleadoService){

  }
  ngOnInit(): void {
    this.iniColumnaTabla();
    this.inicioMenu();
    console.log('Hola estoy aqui');
    //this.empleadoService.getAllEmployee().subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.listEmpleado = res.data;
    //   }, (error) => {
    //     console.log(error);
    //   }
    // );

    this.empleadoService.getAllEmployee().subscribe(
      {
        next: (res) => {
          console.log(res);
        this.listEmpleado = res.data;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  iniColumnaTabla(){
    this.columnTabla = [
        {
          field: 'id', header: 'ID'
        },
        {
          field: 'name', header: 'Nombre Empleado'
        }, 
        {
          field: 'salary', header: 'Salario Empleado'
        },
        {
          field: 'edad', header: 'Edad'
        }
    ];
  }

  inicioMenu(){
    this.listMenu = [
      {
        label: 'CLiente'
      },
      {
        label: 'Empresa'
      }
    ];
    this.activeItem= this.listMenu[0];
  }
  regresarInicio( ){
    this.ruta.navigate(['inicio']);
  }

}

