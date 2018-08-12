import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryResourceComponent } from './gallery-resource.component';

describe('GalleryResourceComponent', () => {
  let component: GalleryResourceComponent;
  let fixture: ComponentFixture<GalleryResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
