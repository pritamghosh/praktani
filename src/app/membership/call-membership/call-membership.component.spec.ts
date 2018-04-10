import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallMembershipComponent } from './call-membership.component';

describe('CallMembershipComponent', () => {
  let component: CallMembershipComponent;
  let fixture: ComponentFixture<CallMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
