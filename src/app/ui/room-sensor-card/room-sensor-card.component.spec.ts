import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomSensorComponent} from './room-sensor-card.component';

describe('WeatherCardComponent', () => {
  let component: RoomSensorComponent;
  let fixture: ComponentFixture<RoomSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomSensorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
