import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Employes } from './employes';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Pipe({
  name: 'sortBy'
})

export class AppComponent{

  found:boolean = false;

  apiUrl = 'http://ergast.com/api/f1/drivers.json?limit=10&offset=20';
  localApiUrl = 'http://localhost:8080/emp/';
 
  private empData: any = [];

  constructor(private httpClient : HttpClient){
  }
  onNameKeyUp(event:any){
    this.found= false;
  }

  getProfile(){
    this.httpClient.get(this.localApiUrl)
    .subscribe(data => {
      this.empData = data;
      console.log(this.empData);
    })
  }
}

