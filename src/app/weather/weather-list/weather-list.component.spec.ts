import { TestBed } from "@angular/core/testing";
import { WeatherListComponent } from "./weather-list.component";

describe('Component : weahter-list', ()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[WeatherListComponent]
    });
  })

  it('Weather component should exists', ()=>{
    let fixture  = TestBed.createComponent(WeatherListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

    it('Weather component should exists', ()=>{
    let fixture  = TestBed.createComponent(WeatherListComponent);
    let app = fixture.debugElement.componentInstance;
    app.temperature = {Datetime:'17-Feb-2018', MinTemperature:'10.00', MaxTemperature:'20.44'};
    fixture.detectChanges();
    let complied = fixture.debugElement.nativeElement;
    expect(complied.querySelector('div').textContent).toContain(app.temperature.Datetime);
    expect(complied.querySelector('div').textContent).toContain(app.temperature.MinTemperature);
    expect(complied.querySelector('div').textContent).toContain(app.temperature.MaxTemperature);
  })

})
