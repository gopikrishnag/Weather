import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service.service';
import { HomeComponent } from './core/home/home.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
 { path: 'weather', component: WeatherSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
