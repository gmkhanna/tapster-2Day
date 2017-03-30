import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: "beer-glass",
  template: `
  <div class="glass"><img src="/resources/images/glass.png">
    <div [style.border-bottom-color]="beerColor(currentKeg.type)" [class]="beerLevelImg(currentKeg.volume, currentKeg.type)"></div>
  </div>
  `
})

export class BeerGlassComponent {
  @Input() currentKeg: Keg;

  beerLevelImg(currentVol, currentType) {
    if (currentVol <= 10) {
      return "beer-empty";
    }
    else if (currentVol <= 62) {
      return "beer-half";
    } else {
      return "beer-full";
    }
  }

  beerColor(currentType) {
    if (currentType === "Lager") {
      return "#F4BF43";
    }
    else if (currentType === "Stout") {
      return "#3C1F15";
    }
    else if (currentType === "Red Ale") {
      return "#9B2913";
    }
    else if (currentType === "Double IPA") {
      return "#F16214";
    }
    else if (currentType === "Barleywine") {
      return "#A60000";
    }
    else {
      return "#F1A33B";
    }
  }
}
