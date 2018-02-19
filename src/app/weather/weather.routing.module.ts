import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

const weatherRoutes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
    { path: '', component: WeatherSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(weatherRoutes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule {

}
