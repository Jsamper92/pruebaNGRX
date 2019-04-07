import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorHijoComponent } from './contador-hijo.component';

describe('ContadorHijoComponent', () => {
  let component: ContadorHijoComponent;
  let fixture: ComponentFixture<ContadorHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
