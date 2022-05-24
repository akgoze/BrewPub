import { Component, OnInit, Input } from '@angular/core';
import { Beer } from 'src/app/models/Beer';

@Component({
  selector: 'list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() beer: Beer = {
    id: 0,
    name: '',
    tagline: '',
    description: '',
    image_url: '',
    abv: undefined,
    attenuation_level: undefined,
    brewers_tips: '',
    contributed_by: '',
    first_brewed: '',
  };

  @Input() listView: 'withshadow' | 'withoutshadow' | undefined = 'withshadow';

  constructor() { }

  ngOnInit(): void {
  }

}
