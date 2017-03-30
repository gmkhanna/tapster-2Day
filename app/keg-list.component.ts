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

    <div class="keg" *ngFor="let currentKeg of childKegList | emptiness:filterByEmptiness" [style.border-color]="borderColor(currentKeg.type)">
    <beer-glass [currentKeg]="currentKeg"></beer-glass>

      <h3 class="name">{{currentKeg.name}}</h3>
      <h4 class="brand"> {{currentKeg.brand}}</h4>
      <p><span class="type">{{currentKeg.type}}</span></p>
      <p>$<span class="price">{{currentKeg.price}}</span></p>
      <p><span class="abv">{{currentKeg.abv}}</span>% abv</p>
      <p><span>{{currentKeg.volume}}</span> Pints in Keg</p>
      <button class="btn" (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg</button>
    </div>
  </div>
  `
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

  borderColor(currentType) {
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
