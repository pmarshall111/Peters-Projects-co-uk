import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourkeyComponent } from './colourkey.component';

describe('ColourkeyComponent', () => {
  let component: ColourkeyComponent;
  let fixture: ComponentFixture<ColourkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColourkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
