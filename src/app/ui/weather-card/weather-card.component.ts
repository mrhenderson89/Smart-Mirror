import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {WeatherService} from '../../services/weather/weather.service';
import {UiService} from '../../services/ui/ui.service';
import { WeatherCard } from 'src/app/models/WeatherCard';
import { WeatherResponse } from '../../models/WeatherResponseModel';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit, OnDestroy {

  @Input() card: WeatherCard;
  constructor(public weather: WeatherService,
              public router: Router,
              public ui: UiService) {
  }

  ngOnInit() {
    this.weather.getForecastByCityId(2640729, 'metric').subscribe(
      res => {
        let forecastObj = res;
        let forecast: WeatherResponse = <WeatherResponse> {
          coord: res["coord"],
          weather: res["weather"],
          main: res["main"],
          visibility: res["visibility"],
          wind: res["wind"],
          clouds: res["clouds"],
          dt: res["dt"],
          sys: res["sys"],
          timezone: res["timezone"],
          id: res["id"],
          name: res["name"],
          cod: res["cod"]
        }

        // let match = res["matches"][0];
        // let homeTeam = match["homeTeam"];
        // let awayTeam = match["awayTeam"];
        // let fixture: SportsFixture = <SportsFixture> {
        //     homeTeam: homeTeam.name,
        //     homeScore: 0,
        //     awayTeam: awayTeam.name,
        //     awayScore: 0,
        //     location: 'Unavailable',
        //     competition: match["competition"].name,
        //     date: match.utcDate,
        //     hasPlayed: false
        // }
        this.card.updateForecast(forecast);
    });
  }

  ngOnDestroy() {

  }

  openDetails() {
    this.router.navigateByUrl('/details/Oxford');
  }

}
