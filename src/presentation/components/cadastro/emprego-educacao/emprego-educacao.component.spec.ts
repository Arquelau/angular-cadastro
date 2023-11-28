import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregoEducacaoComponent } from './emprego-educacao.component';

describe('EmpregoEducacaoComponent', () => {
  let component: EmpregoEducacaoComponent;
  let fixture: ComponentFixture<EmpregoEducacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpregoEducacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpregoEducacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
