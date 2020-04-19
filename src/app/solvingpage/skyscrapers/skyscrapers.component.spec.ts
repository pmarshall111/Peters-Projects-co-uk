import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyscrapersComponent } from './skyscrapers.component';

describe('SkyscrapersComponent', () => {
  let component: SkyscrapersComponent;
  let fixture: ComponentFixture<SkyscrapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyscrapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyscrapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
