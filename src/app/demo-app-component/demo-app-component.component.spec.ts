import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAppComponentComponent } from './demo-app-component.component';

describe('DemoAppComponentComponent', () => {
  let component: DemoAppComponentComponent;
  let fixture: ComponentFixture<DemoAppComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAppComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
