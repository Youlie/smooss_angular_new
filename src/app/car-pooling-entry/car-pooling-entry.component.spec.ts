import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPoolingEntryComponent } from './car-pooling-entry.component';

describe('CarPoolingEntryComponent', () => {
  let component: CarPoolingEntryComponent;
  let fixture: ComponentFixture<CarPoolingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPoolingEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPoolingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
