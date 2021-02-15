import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studenttdf',
  templateUrl: './studenttdf.component.html',
  styleUrls: ['./studenttdf.component.css']
})
export class StudenttdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // We define array. so this value we will show in drop down menu
 subjects=["English","Hindi","Spanish","Russian","Japanese"];
}
