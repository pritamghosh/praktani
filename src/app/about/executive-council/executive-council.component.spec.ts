import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveCouncilComponent } from './executive-council.component';

describe('ExecutiveCouncilComponent', () => {
  let component: ExecutiveCouncilComponent;
  let fixture: ComponentFixture<ExecutiveCouncilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveCouncilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
