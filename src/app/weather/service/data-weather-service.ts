import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Search } from "../../models/search.model";
import { Temperature } from "../../models/models";


@Injectable()
export class DataWeatherService {
  constructor(private http: Http,
   // private authService: AuthService
  ) {}


    getWeatherInfo(placeName?: string): Observable<Search>
    {
   return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ placeName +',us&appid=45a117f5f59c1c52c514dbe6c4448d68' )
    .map((respone: any) => {
      let searchResults: Search = new Search();
          searchResults.Temperature =[];

      searchResults.PlaceName = respone.json().city.name;
      const searchResult = respone.json().list;
      for (let serRes of searchResult)
      {
        let searchRes: Temperature =  new Temperature();
         searchRes.Datetime = serRes.dt_txt;
         searchRes.MaxTemperature = serRes.main.temp_max;
         searchRes.MinTemperature = serRes.main.temp_min;
        searchResults.Temperature.push(searchRes);

      }
     return searchResults;
    }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }


}
