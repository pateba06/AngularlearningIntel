import { Component, OnInit } from '@angular/core';
import {Students} from "../students";

@Component({
  selector: 'app-studenttdf',
  templateUrl: './studenttdf.component.html',
  styleUrls: ['./studenttdf.component.css']
})
export class StudenttdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //we will create object of class.
  student= new Students("badal", "badlarpatel@gmail.com", "Hindi","M",true,false,true);
  // We define array. so this value we will show in drop down menu
 subjects=["English","Hindi","Spanish","Russian","Japanese"];
}
