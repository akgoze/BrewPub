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
  beers: any[] = [
    {
      "id": 1,
      "name": "Buzz",
      "tagline": "A Real Bitter Experience.",
      "first_brewed": "09/2007",
      "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
      "image_url": "https://images.punkapi.com/v2/keg.png",
      "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
      "contributed_by": "Sam Mason <samjbmason>",
      "abv": 4.1,
      "ph": 5.3,
    },
    {
      "id": 2,
      "name": "Trashy Blonde",
      "tagline": "You Know You Shouldn't",
      "first_brewed": "04/2008",
      "description": "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
      "image_url": "https://images.punkapi.com/v2/2.png",
      "brewers_tips": "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.",
      "contributed_by": "Sam Mason <samjbmason>",
      "abv": 4.1,
      "ph": 5.3,
    },
    {
      "id": 3,
      "name": "Berliner Weisse With Yuzu - B-Sides",
      "tagline": "Japanese Citrus Berliner Weisse.",
      "first_brewed": "11/2015",
      "description": "Japanese citrus fruit intensifies the sour nature of this German classic.",
      "image_url": "https://images.punkapi.com/v2/keg.png",
      "brewers_tips": "Clean everything twice. All you want is the clean sourness of lactobacillus.",
      "contributed_by": "Sam Mason <samjbmason>",
      "abv": 4.1,
      "ph": 5.3,
    },
    {
      "id": 4,
      "name": "Pilsen Lager",
      "tagline": "Unleash the Yeast Series.",
      "first_brewed": "09/2013",
      "description": "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
      "image_url": "https://images.punkapi.com/v2/4.png",
      "brewers_tips": "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.",
      "contributed_by": "Ali Skinner <AliSkinner>",
      "abv": 4.1,
      "ph": 5.3,
    },
    {
      "id": 5,
      "name": "Avery Brown Dredge",
      "tagline": "Bloggers' Imperial Pilsner.",
      "first_brewed": "02/2011",
      "description": "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.",
      "image_url": "https://images.punkapi.com/v2/5.png",
      "brewers_tips": "Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.",
      "contributed_by": "Sam Mason <samjbmason>",
      "abv": 4.1,
      "ph": 5.3,
    },
    {
      "id": 6,
      "name": "Electric India",
      "tagline": "Vibrant Hoppy Saison.",
      "first_brewed": "05/2013",
      "description": "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
      "image_url": "https://images.punkapi.com/v2/6.png",
      "brewers_tips": "Source some really good heather honey to get the right spicy esters in the beer.",
      "contributed_by": "Sam Mason <samjbmason>",
      "abv": 4.1,
      "ph": 5.3,
    },
    {
      "id": 7,
      "name": "AB:12",
      "tagline": "Imperial Black Belgian Ale.",
      "first_brewed": "07/2012",
      "description": "An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.",
      "image_url": "https://images.punkapi.com/v2/7.png",
      "brewers_tips": "Don't worry too much about controlling the temperature with the Belgian yeast strain - just make sure it doesn't rise above 30°C!",
      "contributed_by": "Sam Mason <samjbmason>",
      "abv": 4.1,
      "ph": 5.3,
    },
    {
      "id": 8,
      "name": "Fake Lager",
      "tagline": "Bohemian Pilsner.",
      "first_brewed": "03/2013",
      "description": "Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.",
      "image_url": "https://images.punkapi.com/v2/8.png",
      "brewers_tips": "Once the primary fermentation is complete get this beer as cold as you can and let it mature for as long as you've got.",
      "contributed_by": "Sam Mason <samjbmason>"
    },
    {
      "id": 9,
      "name": "AB:07",
      "tagline": "Whisky Cask-Aged Scotch Ale.",
      "first_brewed": "03/2010",
      "description": "Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill.",
      "image_url": "https://images.punkapi.com/v2/9.png",
      "brewers_tips": "Authentic heather honey adds a beautiful floral top note that is unachievable any other way.",
      "contributed_by": "Sam Mason <samjbmason>",
      "abv": 4.1,
      "ph": 5.3,
    },
    {
      "id": 10,
      "name": "Bramling X",
      "tagline": "Single Hop IPA Series - 2011.",
      "first_brewed": "01/2011",
      "description": "Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.",
      "image_url": "https://images.punkapi.com/v2/10.png",
      "brewers_tips": "Getting good Bramling Cross is key. Most English hops are in leaf form (not pelletised), so getting fresh hops close to harvest (September) will give this beer the right amount of dark berry intensity.",
      "contributed_by": "Sam Mason <samjbmason>",
      "abv": 4.1,
      "ph": 5.3,
    }
  ];
  
  constructor(
    private _beerService: BeerService,
    private _http: HttpClient
  ) { }
    getBeers() {
      this._beerService.getAllBeers().subscribe(beers => {
        console.log(beers);
    })
    }
  ngOnInit(): void {
    // this.getBeers();
  }

}
