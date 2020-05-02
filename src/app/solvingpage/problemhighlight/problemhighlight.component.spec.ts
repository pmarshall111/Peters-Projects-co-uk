import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemhighlightComponent } from './problemhighlight.component';

describe('MinesweeperhighlightComponent', () => {
  let component: ProblemhighlightComponent;
  let fixture: ComponentFixture<ProblemhighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemhighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemhighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
