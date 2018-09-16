import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoAulaComponent } from './acompanhamento-aula.component';

describe('AcompanhamentoAulaComponent', () => {
  let component: AcompanhamentoAulaComponent;
  let fixture: ComponentFixture<AcompanhamentoAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhamentoAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhamentoAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
