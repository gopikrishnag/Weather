import { Component, OnInit, Input,  } from '@angular/core';
import { RouterModule } from '@angular/router'
import { Temperature } from '../../models/models';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  @Input() temperature: Temperature;
  @Input() index: number;
  ngOnInit() {
  }
}
