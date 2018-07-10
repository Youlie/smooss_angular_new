import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureModuleComponent } from './picture-module.component';

describe('PictureModuleComponent', () => {
  let component: PictureModuleComponent;
  let fixture: ComponentFixture<PictureModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
