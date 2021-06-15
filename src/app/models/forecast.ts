import { Coord } from "./weather-data";
import { WeatherResponse } from "./weather-data";

export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherResponse[];
  city: City;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number
}