import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttdfComponent } from './studenttdf.component';

describe('StudenttdfComponent', () => {
  let component: StudenttdfComponent;
  let fixture: ComponentFixture<StudenttdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenttdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenttdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
