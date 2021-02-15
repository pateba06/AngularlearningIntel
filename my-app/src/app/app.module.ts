import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { HighlightDirective } from './highlight.directive';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeserviceService } from './employeeservice.service';
import { CustomPipe } from './custom.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BootstraplearningComponent } from './bootstraplearning/bootstraplearning.component';
import { BoottestComponent } from './boottest/boottest.component';
import { StudenttdfComponent } from './studenttdf/studenttdf.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HighlightDirective,
    EmployeedetailsComponent,
    EmployeelistComponent,
    CustomPipe,
    BootstraplearningComponent,
    BoottestComponent,
    StudenttdfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
