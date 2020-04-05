import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemdisplayComponent } from './problemdisplay.component';

describe('ProblemdisplayComponent', () => {
  let component: ProblemdisplayComponent;
  let fixture: ComponentFixture<ProblemdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
