import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="title-bar">
    <h1>Tapster</h1>
  </div>
  <div class="container">
  <keg-list [childKegList]="parentKegList" (clickSender)="editKeg($event)"></keg-list>
  <div class="row">
    <div class="col-md-4">
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
    </div>
    <div class="col-md-8">
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    </div>
  </div>
  </div>
  `
})


export class AppComponent {
  parentKegList: Keg[] = [
    new Keg('Mongo', 'Port Brewing', 7, 7.5),
    new Keg('Talon', 'Mendocino Brewing Co', 7, 10),
    new Keg('Wolf Mother', 'Golden Road', 9, 11.3),
    new Keg('2x4', 'Melvin Brewery', 11, 10.0),
    new Keg('Double Jack', 'Firestone Brewery', 9, 10.5),
    new Keg('Anniversary Ale', 'Port Brewing', 11.5, 10.0),
    new Keg('Detour IIPA', 'Uinta', 10, 10.5),
    new Keg('Raging B', 'Flying Dog Brewery', 9, 11.1),
  ];

  selectedKeg = null;

  addKeg(newKegFromChild: Keg) {
      this.parentKegList.push(newKegFromChild);
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

}
