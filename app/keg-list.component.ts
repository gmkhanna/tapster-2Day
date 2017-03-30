import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="keg-list">
    <h2>Keg List</h2>

    <select (change)="onChange($event.target.value)">
      <option value="kegsOnTap">On Tap</option>
      <option value="almostEmptyKegs">Less than 10 Pints</option>
      <option value="allKegs">All Kegs</option>
    </select><br>

    <div class="keg" *ngFor="let currentKeg of childKegList | emptiness:filterByEmptiness">
    <div class="glass"><img src="/resources/images/glass.png">
    <div [class]="beerLevelImg(currentKeg.volume)"></div>

    </div>
      <h3 class="name">{{currentKeg.name}}</h3>
      <h4 class="brand"> {{currentKeg.brand}}</h4>
      <p>$<span class="price">{{currentKeg.price}}</span></p>
      <p><span class="abv">{{currentKeg.abv}}</span>% abv</p>
      <p><span>{{currentKeg.volume}}</span> Pints in Keg</p>
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg</button>
    </div>
  </div>
  `,
  styles: [`
    .keg {
      display: inline-block;
      padding: 10px;
      margin: 10px;
      outline: 1px solid red;
      width: 20%;
      text-align: center;
    }
    .keg p:first-of-type {
      font-size: 40px;
    }
    .keg p:nth-of-type(2) {
      font-style: italic;
    }

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


export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByEmptiness: string = "kegsOnTap";

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByEmptiness = optionFromMenu;
  }

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
