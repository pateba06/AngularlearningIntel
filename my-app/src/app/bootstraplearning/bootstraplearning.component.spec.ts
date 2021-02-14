import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstraplearningComponent } from './bootstraplearning.component';

describe('BootstraplearningComponent', () => {
  let component: BootstraplearningComponent;
  let fixture: ComponentFixture<BootstraplearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstraplearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstraplearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
