import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VissionAndMissonComponent } from './vission-and-misson.component';

describe('VissionAndMissonComponent', () => {
  let component: VissionAndMissonComponent;
  let fixture: ComponentFixture<VissionAndMissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VissionAndMissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VissionAndMissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
