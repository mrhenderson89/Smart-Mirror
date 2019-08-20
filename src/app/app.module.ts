import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { MaterialModule } from './material-module/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HomeComponent} from './pages/home/home.component';
import {DashboardComponent} from './pages//dashboard/dashboard.component';
import { ControlPageComponent } from './pages/control-page/control-page.component';
import { CardContainerComponent } from './ui/card-container/card-container.component';
import { ClockCardComponent } from './ui/clock-card/clock-card.component';
import { QuoteCardComponent } from './ui/quote-card/quote-card.component';
import { SportScoreComponent } from './ui/sport-score-card/sport-score-card.component';
import {DetailsComponent} from './pages/details/details.component';
import {WeatherService} from './services/weather/weather.service';
import {SensorService} from './services/sensor/sensor.service';
import {SportsScoreService} from './services/sportsScore/sportsScore.service';
import {HttpClientModule} from '@angular/common/http';
import {WeatherCardComponent} from './ui/weather-card/weather-card.component';
import {RoomSensorComponent} from './ui/room-sensor-card/room-sensor-card.component';
import {ShoppingListComponent} from './pages/shoppingList/shoppingList.component';
import {AddCardComponent} from './ui/add-card/add-card.component';
import {AddComponent} from './pages/add/add.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {UiService} from './services/ui/ui.service';
import { AuthService } from './services/auth/auth.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from './services/shoppingList/shoppingList.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ControlPageComponent,
    CardContainerComponent,
    ClockCardComponent,
    QuoteCardComponent,
    SportScoreComponent,
    DetailsComponent,
    WeatherCardComponent,
    RoomSensorComponent,
    AddCardComponent,
    AddComponent,
    LoginComponent,
    SignupComponent,
    AddCardComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    AuthService,
    WeatherService,
    SensorService,
    UiService,
    AngularFirestore,
    ShoppingListService,
    SportsScoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
