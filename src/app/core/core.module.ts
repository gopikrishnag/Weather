import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


import { DataWeatherService } from '../weather/service/data-weather-service';

import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    DataWeatherService,
    AuthService,
    AuthGuard
  ]

})
export class CoreModule { }
