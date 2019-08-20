import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SensorService} from '../../services/sensor/sensor.service';
import {UiService} from '../../services/ui/ui.service';
import { Timestamp } from 'rxjs';
import { PlantSensorItem } from 'src/app/app.model';

@Component({
  selector: 'room-sensor-card',
  templateUrl: './room-sensor-card.component.html',
  styleUrls: ['./room-sensor-card.component.css']
})
export class RoomSensorComponent implements OnInit, OnDestroy {

  plantSensor: PlantSensorItem;
  darkMode: boolean;

  constructor(public sensor: SensorService,
              public router: Router,
              public ui: UiService) {
  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    this.sensor.getPlantSensorLatest('PlantSensor').subscribe(register => {
      var sensorValues =  register;
      console.log("Sensor Values: ");
      console.dir(sensorValues);
   });      
    

    this.plantSensor = this.sensor.getLatestSensorValues('PlantSensor');
    this.plantSensor.name = 'PlantSensor';

    // this.sensor.getLatestSensorValues('PlantSensor').subscribe((data: number) => {
    //   this.temperature = data;
    //   console.log('Temperature:');
    //   console.dir(this.temperature);
    // });
    // this.sensor.getLatestSensorValues('devices/PlantSensor').subscribe((data: number) => {
    //   this.humidity = data;
    //   console.log('Humidity:');
    //   console.dir(this.humidity);
    // });
    // this.sensor.getLatestSensorValues('PlantSensor').subscribe((data: number) => {
    //   this.light = data;
    //   console.log('Light:');
    //   console.dir(this.light);
    // });
  }

  ngOnDestroy() {

  }

  openSensorDetails() {
    this.router.navigateByUrl('/sensorDetails/Oxford');
  }

}
