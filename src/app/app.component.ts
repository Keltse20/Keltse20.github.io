import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){

  }

  weatherData?: WeatherData;
  cityName: string = '';
  actualCity: string = this.cityName;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.actualCity = this.cityName;
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.actualCity = this.cityName;
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) =>{
        this.weatherData = response;
        console.log(response);
      }
    })
  }
}
