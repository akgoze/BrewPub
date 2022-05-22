import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/Beer';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults: Beer[] = [];
  @Input() recentSearches: string[] = [];
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
