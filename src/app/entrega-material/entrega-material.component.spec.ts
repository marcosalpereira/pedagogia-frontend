import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaMaterialComponent } from './entrega-material.component';

describe('EntregaMaterialComponent', () => {
  let component: EntregaMaterialComponent;
  let fixture: ComponentFixture<EntregaMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
