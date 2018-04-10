import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResposibilityAndBenefitComponent } from './resposibility-and-benefit.component';

describe('ResposibilityAndBenefitComponent', () => {
  let component: ResposibilityAndBenefitComponent;
  let fixture: ComponentFixture<ResposibilityAndBenefitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResposibilityAndBenefitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResposibilityAndBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
