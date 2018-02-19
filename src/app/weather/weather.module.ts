import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { WeatherRoutingModule } from './weather.routing.module';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    WeatherRoutingModule,
    SharedModule
  ],
  declarations: [
    WeatherSearchComponent,
    WeatherListComponent
  ]
})
export class WeatherModule { }
