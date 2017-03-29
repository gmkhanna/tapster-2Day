import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="keg-list">
    <h2>Keg List</h2>

    <div class="keg" *ngFor="let currentKeg of childKegList">
      <h3 class="name">{{currentKeg.name}}</h3>
      <h4 class="brand"> {{currentKeg.brand}}</h4>
      <p>$<span class="price">{{currentKeg.price}}</span></p>
      <p><span class="abv">{{currentKeg.abv}}</span>% abv</p>
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
  `]
})


export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }


}
