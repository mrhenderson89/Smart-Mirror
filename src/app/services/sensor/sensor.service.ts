import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';
import { PlantSensorItem } from 'src/app/app.model';
import { config } from '../../app.config';
import {Injectable} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFirestoreDocument,
    AngularFirestore,
    AngularFirestoreCollection } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class SensorService {
    itemRef: AngularFireObject<any>;
    item: Observable<any>;
    sensorCollection: AngularFirestoreCollection<PlantSensorItem>;
  plantSensors: Observable<PlantSensorItem[]>;
  plantSensors2 : Observable<PlantSensorItem[]>;
  plantSensor: any;

    constructor(private db: AngularFirestore) {
      this.sensorCollection = this.db.collection('devices');
      this.plantSensors = this.sensorCollection.valueChanges();
      this.sensorCollection.valueChanges().subscribe((datas) => { console.log("datas", datas) },(err)=>{ console.log("probleme : ", err) });

      console.log('Plant Sensors collection:');
      console.dir(this.sensorCollection);

      console.log('Plant Sensors:');
      console.dir(this.plantSensors);
    }
    save(newName: string) {
      this.itemRef.set({ name: newName });
    }
    update(newSize: string) {
      this.itemRef.update({ size: newSize });
    }
    delete() {
      this.itemRef.remove();
    }

    getLatestSensorValues(dbItem: string): PlantSensorItem {
        this.sensorCollection.doc(`${dbItem}`).ref.get().then((doc) => {
          this.plantSensor = doc.data();
        });
          console.log('Plant Sensor:');
          console.dir(this.plantSensor);
        return this.plantSensor;
    }

    getPlantSensorLatest(sensorName) {
      return this.db.doc<PlantSensorItem>('devices/' + sensorName).valueChanges();
   }
  }
