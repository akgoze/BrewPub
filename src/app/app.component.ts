import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'BrewPub';
  isFilterShow:boolean = false;

  getFilterStatus($event:any) {
    this.isFilterShow = $event;
  }
}
