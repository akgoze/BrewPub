import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/Beer';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults: Beer[] | null = [];
  @Input() recentSearches: string[] | null = null;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
