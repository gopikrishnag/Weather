import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { WeatherModule } from './weather/weather.module';
import { WeatherReducer } from './weather/store/weather.reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    WeatherModule,
    AuthModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
