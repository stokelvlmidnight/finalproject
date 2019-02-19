import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // this is my base url http://mean-2019-1-brendan-phortonssf.c9users.io:8080/api/appUsers
  baseUrl: string = "http://mean-2019-1-brendan-phortonssf.c9users.io:8080/api/appUsers";

  
  constructor(private _http: HttpClient) { }
  
  request(data) {
    return this._http.post(this.baseUrl, data);
  }
  
  // http.post(baseurl, data)
  //getSearch( ) {
    
}
