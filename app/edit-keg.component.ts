import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  template:`
  <div>
    <div *ngIf="selectedKeg">
      <h3>Edit Keg</h3>
      <label>Enter Beer Name</label>
      <input [(ngModel)]="selectedKeg.name">
      <label>Enter Brewery</label>
      <input [(ngModel)]="selectedKeg.brand">
      <label>Enter Price</label>
      <input type="number" [(ngModel)]="selectedKeg.price">
      <label>Enter ABV</label>
      <input type="number" [(ngModel)]="selectedKeg.abv">
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
