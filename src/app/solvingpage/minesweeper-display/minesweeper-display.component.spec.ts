import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesweeperDisplayComponent } from './minesweeper-display.component';

describe('MinesweeperDisplayComponent', () => {
  let component: MinesweeperDisplayComponent;
  let fixture: ComponentFixture<MinesweeperDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinesweeperDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinesweeperDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
