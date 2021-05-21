import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HadiService {

  constructor(private _http: HttpClient) { }

  getData(){
    return this._http.get("https://jsonplaceholder.typicode.com/todos/1",{
      observe: 'response'
    })
  }
}
