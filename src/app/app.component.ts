import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Employes } from './employes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  found:boolean = false;
 
  private empData: any = [];

  constructor(private httpClient : HttpClient){
  }
  onNameKeyUp(event:any){
    this.found= false;
  }

  getProfile(){
    this.httpClient.get('http://ergast.com/api/f1/drivers.json?limit=10&offset=20')
    .subscribe(data => {
      this.empData = data;
      console.log(this.empData);
    })
  }
 
}
