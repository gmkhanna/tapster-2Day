import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: "beer-glass",
  template: `
  <div class="glass"><img src="/resources/images/glass.png">
    <div [class]="beerLevelImg(currentKeg.volume)"></div>
  </div>
  `
})

export class BeerGlassComponent {
  @Input() currentKeg: Keg;

  beerLevelImg(currentVol) {
    if (currentVol <= 10) {
      return "beer-empty";
    }
    else if (currentVol <= 62) {
      return "beer-half";
    } else {
      return "beer-full";
    }
  }

}
