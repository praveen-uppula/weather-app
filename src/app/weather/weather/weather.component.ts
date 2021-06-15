import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  distinctUntilChanged,
  switchMap,
  tap
} from 'rxjs/operators';
import { CITIES } from 'src/app/mocks/city';
import { City } from 'src/app/models/city';
import { WeatherResponse } from 'src/app/models/weather-data';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  public cities: City[] = CITIES;

  public cityFormControl = new FormControl();

  public cityFCSub?: Subscription;

  public forecastSub?: Subscription;

  public weatherData?: WeatherResponse;

  public foreCastData?: any;

  public isFetching = false;

  public isForecasting = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.cityFCSub = this.cityFormControl
      .valueChanges.pipe(
        tap(() => this.isFetching = true),
        distinctUntilChanged(),
        switchMap((selectedCity: string) => this.weatherService.currentWeather(selectedCity))
      )
      .subscribe(wd => {
        this.weatherData = wd;
        this.isFetching = false;
      }, (e) => {
        this.isFetching = false;
        console.error(e);
      });
  }

  public forecast() {
    this.isForecasting = true;
    this.forecastSub = this.weatherService
      .forecastWeather(this.cityFormControl.value)
      .subscribe(fd => {
        this.foreCastData = fd;
        this.isForecasting = false;
      }, (e) => {
        this.isForecasting = false;
        console.error(e);
      });
  }

  ngOnDestroy(): void {
    if (this.cityFCSub) {
      this.cityFCSub.unsubscribe();
    }
    if (this.forecastSub) {
      this.forecastSub.unsubscribe();
    }
  }

}
