import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { Beer } from 'src/app/models/Beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  showSearchResults: boolean = false;
  isFocusSearchInput: boolean = false;
  searchResultData: Beer[] = [];

  recentSearchesData: any;
  
  constructor(
    private _beerService: BeerService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _renderer: Renderer2
  ) { 

  }
  toggleBodyClass(status:boolean) {
    status ? this._renderer.addClass(document.body, 'hidden') : this._renderer.removeClass(document.body, 'hidden');
  }

  searchBeer() {
    if (this.searchTerm.length > 3) {
      // this.showSearchResults = true;

      this._beerService.searchBeers(this.searchTerm).subscribe(beers => {
          this.searchResultData = beers;
          this.showSearchResults = true;
          
          this._router.navigate([], { queryParams: { search: this.searchTerm } });
          if (
            beers.length > 0 && 
            !this.recentSearchesData.data.includes(this.searchTerm)) {
              console.log(this.recentSearchesData);
              this.recentSearchesData.data.unshift(this.searchTerm);

            if (this.recentSearchesData.data.length > 5) {
              this.recentSearchesData.data.pop();
            }
            localStorage.setItem('searchSuggestions',JSON.stringify(this.recentSearchesData));
          }
          
        }
      );
    }
  }
  resetSearch() {
    this.searchTerm = ''; 
    this.isFocusSearchInput = false; 
    this.showSearchResults=false;
    this.searchResultData = [];
    this.toggleBodyClass(false);
    this._router.navigate(['/']);
  }


  ngOnInit(): void {
    const getSuggections:any = localStorage.getItem('searchSuggestions');

    if(getSuggections != null) {
      this.recentSearchesData = JSON.parse(getSuggections);
      
      
    } else {
      localStorage.setItem('searchSuggestions', JSON.stringify({data:[]}));
      this.recentSearchesData = {data:[]};
    }


    this._activatedRoute.queryParams.subscribe(params => {
      let searchParam = params['search'];
      
      if (searchParam != undefined) {
        this.toggleBodyClass(true);
        this._beerService.searchBeers(searchParam).subscribe(beers => {
          this.searchResultData = beers;
          this.searchTerm = searchParam;
          this.isFocusSearchInput = true;
          this.showSearchResults = true;
        });
      }
    });
  }

}
