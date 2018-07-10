import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPoolingComponent } from './car-pooling.component';

describe('CarPoolingComponent', () => {
  let component: CarPoolingComponent;
  let fixture: ComponentFixture<CarPoolingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPoolingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
