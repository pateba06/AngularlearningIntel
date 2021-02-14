import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from './../employeeservice.service';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
 
  emps=[];
  constructor(private _service:EmployeeserviceService) { }

  ngOnInit() {
 
   this._service.getEmployees().subscribe(data=>this.emps=data);

}
}
