import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesDeResidenciaComponent } from './informacoes-de-residencia.component';

describe('InformacoesDeResidenciaComponent', () => {
  let component: InformacoesDeResidenciaComponent;
  let fixture: ComponentFixture<InformacoesDeResidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacoesDeResidenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacoesDeResidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
