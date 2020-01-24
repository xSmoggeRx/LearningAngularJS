import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumatorioComponent } from './sumatorio.component';

describe('SumatorioComponent', () => {
  let component: SumatorioComponent;
  let fixture: ComponentFixture<SumatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
