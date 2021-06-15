import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherResponse } from '../models/weather-data';
import { ForecastResponse } from '../models/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  public currentWeather(city: string): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(environment.currentWeatherUrl + city + '&appid=' + environment.apiKey);
  }

  public forecastWeather(city: string): Observable<ForecastResponse> {
    return this.httpClient.get<ForecastResponse>(environment.forecastUrl + city + '&appid=' + environment.apiKey);
  }
}
