
import {  FormsModule } from '@angular/forms';
import { TestBed, async } from "@angular/core/testing";
import { WeatherSearchComponent } from "./weather-search.component";
import { WeatherListComponent } from "../weather-list/weather-list.component";
import { DataWeatherService } from '../service/data-weather-service';
import { HttpModule } from "@angular/http";
import {Observable } from 'rxjs';
//import { Store } from '@ngrx/store';



describe('Component : weahter-list', ()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [  FormsModule,HttpModule],// Store
      declarations:[WeatherSearchComponent, WeatherListComponent],
      providers:[DataWeatherService]
    });
  })

  it('Weather search component should exists', ()=>{
    let fixture  = TestBed.createComponent(WeatherSearchComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })


    it('Weather component should exists', ()=>{
    let fixture  = TestBed.createComponent(WeatherSearchComponent);
    let app = fixture.debugElement.componentInstance;
    app.isShow = true;
    app.searchPlace = 'london';
    fixture.detectChanges();
    let complied = fixture.debugElement.nativeElement;
    expect(complied.querySelector('div').textContent).toContain(app.searchPlace);
  })

  it('Weather component should exists', ()=>{
    let fixture  = TestBed.createComponent(WeatherSearchComponent);
    let app = fixture.debugElement.componentInstance;
    app.isShow = true;
    app.searchTemperature = [{Datetime:'17-Feb-2018', MinTemperature:'10.00', MaxTemperature:'20.44'},
    {Datetime:'18-Feb-2018', MinTemperature:'12.00', MaxTemperature:'24.44'}]
    fixture.detectChanges();
    let complied = fixture.debugElement.nativeElement;
    expect(complied.querySelector('#divSearchRes').textContent).toContain(app.searchTemperature[0].Datetime);
 });


 it('Weather component service should exists', ()=>{
  let fixture  = TestBed.createComponent(WeatherSearchComponent);
  let app = fixture.debugElement.componentInstance;
  let service = TestBed.get(DataWeatherService);
  // var res = spyOn(service, 'getWeatherInfo').and.returnValue(Observable.from([{Datetime:'17-Feb-2018', MinTemperature:'10.00', MaxTemperature:'20.44'},
  // {Datetime:'18-Feb-2018', MinTemperature:'12.00', MaxTemperature:'24.44'}] ));
  var res = spyOn(service, 'getWeatherInfo').and.returnValue(Observable.from([1,2,3] ));
  app.isShow = true;
  fixture.detectChanges();

  console.log('res ', res.length);

 expect(res.length===1);
})

})
