import { ForecastResponse } from '../models/forecast';
import { WeatherResponse } from '../models/weather-data';

export const WEATHER_RESPONSE: WeatherResponse = {
  'coord': {
    'lon': 23.7162,
    'lat': 37.9795
  },
  'weather': [
    {
      'id': 800,
      'main': 'Clear',
      'description': 'clear sky',
      'icon': '01d'
    }
  ],
  'base': 'stations',
  'main': {
    'temp': 301.27,
    'feels_like': 300.6,
    'temp_min': 298.71,
    'temp_max': 303.78,
    'pressure': 1011,
    'humidity': 35
  },
  'visibility': 10000,
  'wind': {
    'speed': 4.02,
    'deg': 192
  },
  'clouds': {
    'all': 0
  },
  'dt': 1623840207,
  'sys': {
    'type': 2,
    'id': 2005878,
    'country': 'GR',
    'sunrise': 1623812531,
    'sunset': 1623865774
  },
  'timezone': 10800,
  'id': 264371,
  'name': 'Athens',
  'cod': 200
}

export const FORECAST_RESPONSE: ForecastResponse = {
  'cod': '200',
  'message': 0,
  'cnt': 40,
  'list': [
    {
      'coord': {
        'lon': 23.7162,
        'lat': 37.9795
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d'
        }
      ],
      'base': 'stations',
      'main': {
        'temp': 301.27,
        'feels_like': 300.6,
        'temp_min': 298.71,
        'temp_max': 303.78,
        'pressure': 1011,
        'humidity': 35
      },
      'visibility': 10000,
      'wind': {
        'speed': 4.02,
        'deg': 192
      },
      'clouds': {
        'all': 0
      },
      'dt': 1623840207,
      'sys': {
        'type': 2,
        'id': 2005878,
        'country': 'GR',
        'sunrise': 1623812531,
        'sunset': 1623865774
      },
      'timezone': 10800,
      'id': 264371,
      'name': 'Athens',
      'cod': 200
    },
    {
      'coord': {
        'lon': 23.7162,
        'lat': 37.9795
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d'
        }
      ],
      'base': 'stations',
      'main': {
        'temp': 350.27,
        'feels_like': 350.6,
        'temp_min': 315.71,
        'temp_max': 400.78,
        'pressure': 1011,
        'humidity': 35
      },
      'visibility': 10000,
      'wind': {
        'speed': 4.02,
        'deg': 192
      },
      'clouds': {
        'all': 0
      },
      'dt': 1623840207,
      'sys': {
        'type': 2,
        'id': 2005878,
        'country': 'GR',
        'sunrise': 1623812531,
        'sunset': 1623865774
      },
      'timezone': 10800,
      'id': 264371,
      'name': 'Athens',
      'cod': 200
    }
  ],
  'city': {
    'id': 4219762,
    'name': 'Rome',
    'coord': {
      'lat': 34.257,
      'lon': -85.1647
    },
    'country': 'US',
    'population': 36303,
    'timezone': -14400,
    'sunrise': 1623839306,
    'sunset': 1623891270
  }
}