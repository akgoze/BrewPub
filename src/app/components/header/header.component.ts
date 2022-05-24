import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() filterModalStatus: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  toggleFilter(value: boolean) {
    this.filterModalStatus.emit(value);
  }
  ngOnInit(): void {
  }

}
