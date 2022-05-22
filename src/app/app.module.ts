import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
