import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecthighlightComponent } from './projecthighlight.component';

describe('ProjecthighlightComponent', () => {
  let component: ProjecthighlightComponent;
  let fixture: ComponentFixture<ProjecthighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjecthighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecthighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
