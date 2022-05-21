import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/Beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(
    private _http: HttpClient
  ) { }
}
