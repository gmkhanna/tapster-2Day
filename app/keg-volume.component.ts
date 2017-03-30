import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-volume',
  template: `
    <div class="keg-volume">
      <h1>{{grandchildSelectedKeg.volume}}</h1>
      <h4>pints left</h4>
    </div>
  `
})

export class KegVolumeComponent {
    @Input() grandchildSelectedKeg: Keg;

}
