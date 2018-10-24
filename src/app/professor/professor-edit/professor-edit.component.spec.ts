import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorEditComponent } from './professor-edit.component';

describe('ProfessorEditComponent', () => {
  let component: ProfessorEditComponent;
  let fixture: ComponentFixture<ProfessorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
