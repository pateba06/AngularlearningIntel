import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IEmployee } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
 
  constructor( private http:HttpClient) { }
  employees =   [ ];

  private url:string ="../assets/data.json";

  getEmployees(){
    // return this.employees;
    return this.http.get<IEmployee[]>(this.url);
  }
}
