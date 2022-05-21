import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: string = '';
  constructor() { }
  searchKeyUp(event: any) {
    console.log(event.target.value);
  }
  ngOnInit(): void {
  }

}
