import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
//import { Store } from '@ngrx/store';
import { Observable, Subscribable } from 'rxjs/observable';
import 'rxjs/Rx';
import { Search, Temperature } from '../../models/models';
import { DataWeatherService } from '../service/data-weather-service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  weatherSearchState: Observable<{weatherSearchRes: Search[]}>;
  searchResult: Search;
  searchPlace: string;
  searchTemperature : Temperature[];
  isShow: boolean=false;
  subscription: Subscription;


  //search: Search;

  constructor(private dataWeatherService: DataWeatherService,
   // private store: Store<{weatherSearchList: {weatherSearchRes: Search[]}}>
  ) { }

  ngOnInit() {
        }




  onSubmit(form: NgForm) {
//console.log(form.value);
    const value = form.value;
   // console.log(value.placeName);
   this.isShow = false;
    this.dataWeatherService.getWeatherInfo(value.placeName)
    .subscribe(
      result => {
        this.searchPlace = result.PlaceName;
        this.searchTemperature = result.Temperature;
        this.isShow = this.searchTemperature.length>0;
      },
      err => { this.searchPlace = 'Server Error';
              this.isShow = true;
              this.searchTemperature= [] } ,
      () => console.log('completed')
    );

  }

  onClear() {
    this.slForm.reset();
    this.isShow = false;
    this.searchTemperature = [];
  }

  ngOnDestroy() {
  //  this.subscription.unsubscribe();
  }

}
