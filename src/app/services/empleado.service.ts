import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { iEmpleados } from '../interfaces/empleadosInterfaces';
import { Header } from 'primeng/api';
const API_GET_ALL_EMPLOYEE = environment.API_GET_ALL_EMPLOYEE;
const API_POST_CREATE_EMPLOYEE = environment.API_POST_CREATE_EMPLOYEE;
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  createHeader(){
    let headers: HttpHeaders;
      headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .set('Acces-Control-Allow_Origin', '*')
    return headers;
  }

  getAllEmployee(){
    return this.http.get<iEmpleados>(API_GET_ALL_EMPLOYEE);
  }

  createEmployee(name: string, salary: string, age: string){
    //const headers = this.createHeader();
    let body = {
      name: name,
      salary: salary,
      age: age 
    };
    //Para uso de headers
    //return this.http.post(API_POST_CREATE_EMPLOYEE, body,{headers});
    return this.http.post(API_POST_CREATE_EMPLOYEE, body);
  }

}
