import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    WeatherRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule
  ]
})
export class WeatherModule { }
