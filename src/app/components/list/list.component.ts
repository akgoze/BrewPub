import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';
import { HttpClient } from "@angular/common/http";
import { Beer } from 'src/app/models/Beer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  p: number = 1;
  beers: any[] = [];
  
  constructor(
    private _beerService: BeerService,
    private _http: HttpClient
  ) { }
    getBeers(pageID:number) { 
      this._beerService.getAllBeers(this.p).subscribe(beers => {
        this.beers = beers;
      })
    }
    pageChanged(event: any): void {
      this.p = event;
      this.getBeers(this.p);
      
    }
  ngOnInit(): void {
    this.getBeers(this.p);
    
  }

}
