import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from './../employeeservice.service';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  emps=[];
  constructor(private _service:EmployeeserviceService) { }

  ngOnInit() {
    // this.emps=this._service.getEmployees();
    this._service.getEmployees().subscribe(data=>this.emps=data);
  }

}
