import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvingpageComponent } from './solvingpage.component';

describe('SolvingpageComponent', () => {
  let component: SolvingpageComponent;
  let fixture: ComponentFixture<SolvingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolvingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolvingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
