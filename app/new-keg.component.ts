import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  template: `
  <h2>Add New Keg</h2>
  <div class="form-group">
    <label>Beer Name</label>
    <input #newBeer>
  </div>
  <div class="form-group">
    <label>Brewery</label>
    <input #newBrand>
  </div>
  <div class="form-group">
    <label>Pint Price</label>
    <input type="number" #newPrice>
  </div>
  <div class="form-group">
    <label>Alcohol By Volume</label>
    <input type="number" #newABV>
  </div>
  <button (click)="submitForm(newBeer.value, newBrand.value, newPrice.value, newABV.value); newBeer.value=''; newBrand.value=''; newPrice.value=''; newABV.value='';">Add Keg</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }

}
