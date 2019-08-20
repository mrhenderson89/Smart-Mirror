import { CardType } from '../enums/CardType';
import { ICard } from '../interfaces/ICard';
import { CardBase } from './CardBase';
import * as moment from 'moment';
import { WeatherResponse, Coord, Weather, Main, Wind, Clouds, Sys } from './WeatherResponseModel';

export class WeatherCard extends CardBase {

    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;

    static parser = function(data: any): WeatherCard {
        if(data.type !== 'weather') {
            throw Error('Card type is not Weather');
        }

        if(!data.name) {
            throw Error('Could not create weather card: Name is not set')
        }

        return new WeatherCard(data.name, data.sizeX, data.sizeY, data.color);
    };

    constructor(name: string, sizeX?: number, sizeY?: number, cardColor?: string) {
        super(name, '',CardType.Weather, null, null, null, sizeX, sizeY, cardColor);
        moment.locale('en');
    }

    update(card: ICard, data: any) {}

    updateForecast(currentForecast: WeatherResponse) {
        this.coord = currentForecast.coord;
        this.weather = currentForecast.weather;
        this.main = currentForecast.main;
        this.visibility = currentForecast.visibility;
        this.wind = currentForecast.wind;
        this.clouds = currentForecast.clouds;
        this.dt = currentForecast.dt;
        this.sys = currentForecast.sys;
        this.timezone = currentForecast.timezone;
        this.id = currentForecast.id;
        this.name = currentForecast.name;
        this.cod = currentForecast.cod;
    }
}