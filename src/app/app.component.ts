import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  found:boolean = false;

  apiUrl = 'http://ergast.com/api/f1/drivers.json?limit=10&offset=20';
  localApiUrl = 'http://localhost:8080/emp/';
 
  private empData: any = [];

  private empData1: any = [];

  constructor(private httpClient : HttpClient){
  }
  onNameKeyUp(event:any){
    this.found= false;
  }

  getProfile(){
    this.httpClient.get(this.apiUrl)
    .subscribe(data => {
      this.empData = data;

      this.empData1 = this.empData.MRData.DriverTable.Drivers
      // // console.log(this.empData.MRData.drivers);
        console.log(this.empData.MRData.DriverTable.Drivers)
    })
  } 
}

