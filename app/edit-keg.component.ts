import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  template:`
  <div>
    <div *ngIf="childSelectedKeg">
      <h3>Edit Keg</h3>
      <label>Enter Beer Name</label>
      <input [(ngModel)]="childSelectedKeg.name">
      <label>Enter Brewery</label>
      <input [(ngModel)]="childSelectedKeg.brand">
      <label>Enter Price</label>
      <input type="number" [(ngModel)]="childSelectedKeg.price">
      <label>Enter ABV</label>
      <input type="number" [(ngModel)]="childSelectedKeg.abv">
      <button (click)="doneButtonClicked()">Submit</button>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
