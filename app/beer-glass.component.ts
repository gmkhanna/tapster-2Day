import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: "beer-glass",
  template: `
  <div class="glass"><img src="/resources/images/glass.png">
    <div [class]="beerLevelImg(currentKeg.volume)"></div>
  </div>
  `,
  styles: [`
    .glass{
      position: relative;
      z-index: 10;
    }
    .glass img {
      position: relative;
      width: 60%;
      z-index: 10;
    }

    .beer-full{
      position: absolute;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
      width: 18%;
      height: 0;
      border: 14px solid rgba(0,0,0,0);
      border-top: 0 solid;
      border-bottom: 100px solid #F1A33B;
      font: normal 100%/normal Arial, Helvetica, sans-serif;
      color: rgba(0,0,0,1);
      -o-text-overflow: clip;
      text-overflow: clip;
      -webkit-transform: rotateX(180deg)   ;
      transform: rotateX(180deg)   ;
      top: 7%;
      left: 34%;
      z-index: 0;
    }

    .beer-half {
      position: absolute;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
      width: 20%;
      height: 0;
      border: 6px solid rgba(0,0,0,0);
      border-top: 0 solid;
      border-bottom: 50px solid #F1A33B;
      font: normal 100%/normal Arial, Helvetica, sans-serif;
      color: rgba(0,0,0,1);
      -o-text-overflow: clip;
      text-overflow: clip;
      -webkit-transform: rotateX(180deg)   ;
      transform: rotateX(180deg)   ;
      top: 48%;
      left: 37%;
      z-index: 0;
    }

    .beer-empty {
      position: absolute;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
      width: 20%;
      height: 0;
      border: 1px solid rgba(0,0,0,0);
      border-top: 0 solid;
      border-bottom: 10px solid #E53800;
      font: normal 100%/normal Arial, Helvetica, sans-serif;
      color: rgba(0,0,0,1);
      -o-text-overflow: clip;
      text-overflow: clip;
      -webkit-transform: rotateX(180deg)   ;
      transform: rotateX(180deg)   ;
      top: 79%;
      left: 40%;
      z-index: 0;
    }
  `]
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
