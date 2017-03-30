import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-volume',
  template: `
    <div class="keg-volume">
      <h1>{{grandchildSelectedKeg.volume}}</h1>
      <h4>pints left</h4>
      <button class="btn" id="dec1-button" (click)="decVolume(grandchildSelectedKeg, 1)">Decrease By 1</button>
      <button class="btn" id="dec-button" (click)="decVolume(grandchildSelectedKeg, 29)"> Decrease By 29</button>
    </div>
  `
})

export class KegVolumeComponent {
    @Input() grandchildSelectedKeg: Keg;

    decVolume(kegToChange: Keg, amount: number) {
      console.log(kegToChange);
      var currentAmount = kegToChange.volume;

    if (currentAmount <= 10 && currentAmount- amount >= 0) {
      kegToChange.volume -= amount;
      alert("Change Keg - We sellin' out!");
    } else if (currentAmount - amount >= 0) {
      kegToChange.volume -= amount;
      console.log(kegToChange.volume);
    } else {
      alert("Sold Out!");
    }
  }

}
