import { WeatherData } from './../models/weather.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherApiBaseURL: string = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
  XRapidApiHostHeaderName: string = 'X-RapidAPI-Host';
  XRapidApiHostHeaderValue: string = 'weather-by-api-ninjas.p.rapidapi.com';
  XRapidApiKeyHeaderName: string = 'X-RapidAPI-Key';
  XRapidApiKeyHeaderValue: string = 'd13f37c4a9msh0129f60713a18afp1e09c3jsnd98230311cd1';


  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
      return this.http.get<WeatherData>(this.weatherApiBaseURL, {
      headers: new HttpHeaders()
      .set(this.XRapidApiHostHeaderName, this.XRapidApiHostHeaderValue)
      .set(this.XRapidApiKeyHeaderName, this.XRapidApiKeyHeaderValue),
      params: new HttpParams()
      .set('city', cityName)
    })
  }
}
