import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { WeatherResponse } from 'src/app/models/WeatherResponseModel';

const httpOptions = {
  headers: new HttpHeaders({
  })
};
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=${metric}&APPID=XXXXXXXXXXXXXXXXXXXXXXX`;


  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
}

getForecastByCityId(cityId: number, metric: 'metric' | 'imperial' = 'metric'): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=${metric}&APPID=XXXXXXXXXXXXXXXXXXXXXXX`, httpOptions).pipe(map(this.extractData));
}
}
