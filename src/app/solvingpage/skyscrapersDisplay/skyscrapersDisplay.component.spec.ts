import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyscrapersDisplayComponent } from './skyscrapersDisplay.component';
import {FormsModule} from '@angular/forms';

describe('SkyscrapersComponent', () => {
  let component: SkyscrapersDisplayComponent;
  let fixture: ComponentFixture<SkyscrapersDisplayComponent>;
  let numCols: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SkyscrapersDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyscrapersDisplayComponent);
    component = fixture.componentInstance;
    numCols = 5;
    component.numCols = numCols;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should update clues with 1 increase", () => {
    component.numCols = numCols + 1;
    component.ngOnChanges(
      {"numCols": {previousValue: numCols, currentValue:numCols+1, firstChange: true, isFirstChange(): boolean {return true;}}}
      )
    let newClues = component.clues;
      let expected = [1,2,3,4,5,0,1,2,3,4,5,0,0,1,2,3,4,5,0,1,2,3,4,5];
    expect(newClues).toEqual(expected);
  })

  it("should update clues with 2 increase", () => {
    component.numCols = numCols + 2;
    component.ngOnChanges(
      {"numCols": {previousValue: numCols, currentValue:numCols+2, firstChange: true, isFirstChange(): boolean {return true;}}}
    )
    let newClues = component.clues;
    let expected = [1,2,3,4,5,0,0,1,2,3,4,5,0,0,0,0,1,2,3,4,5,0,0,1,2,3,4,5];
    console.log(newClues, expected)
    expect(component.clues).toEqual(expected);
  })
});
