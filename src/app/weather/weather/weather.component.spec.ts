import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HttpClientTestingModule } from "@angular/common/http/testing";


import { WeatherComponent } from './weather.component';
import { WeatherService } from '../weather.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FORECAST_RESPONSE, WEATHER_RESPONSE } from 'src/app/mocks/current-weather';
import { of } from 'rxjs/internal/observable/of';
import { By } from '@angular/platform-browser';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      imports: [
        NoopAnimationsModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatListModule,
        HttpClientTestingModule
      ],
      providers: [
        WeatherService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    weatherService = TestBed.get(WeatherService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should fetch current weather data for given city', () => {
    spyOn(weatherService, 'currentWeather')
      .and.
      returnValue(of(WEATHER_RESPONSE));
    component.cityFormControl.setValue('Berlin');
    expect(component.weatherData?.main.temp).toBe(301.27);
    // We can add assertions for all other properties same as above;
  });

  fit('should forcast weather data for given city', () => {
    spyOn(weatherService, 'currentWeather')
      .and.
      returnValue(of(WEATHER_RESPONSE));
    spyOn(weatherService, 'forecastWeather')
      .and.
      returnValue(of(FORECAST_RESPONSE));
    component.cityFormControl.setValue('Berlin');
    component.forecast();
    expect(component.foreCastData?.list.length).toBe(2);
    // We can add assertions for all other properties same as above;
  });
});
