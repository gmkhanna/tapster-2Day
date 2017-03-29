import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Tapster</h1>
    <keg-list [childKegList]="parentKegList"></keg-list>
  </div>
  `,
  styles: [`
    .keg {
      outline: 1px solid red;
    }
  `]
})


export class AppComponent {
  parentKegList: Keg[] = [
    new Keg('Mongo', 'Port Brewing', 7, 7.5),
    new Keg('Talon', 'Mendocino Brewing Co', 7, 10),
    new Keg('Wolf Mother', 'Golden Road', 9, 11.3)
  ];

}
