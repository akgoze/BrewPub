import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/Beer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  apiURL = 'https://api.punkapi.com/v2/beers';
  constructor(
    private _http: HttpClient
  ) { }

  getAllBeers(pageId:number):Observable<Beer[]> {
    return this._http.get<Beer[]>(`${this.apiURL}?page=${pageId}&per_page=10`);
  }

  searchBeers(searchTerm: string):Observable<Beer[]> {
    return this._http.get<Beer[]>(`${this.apiURL}?beer_name=${searchTerm}`);
  }
}
