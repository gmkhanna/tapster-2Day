import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  template:`
  <div class="row"  *ngIf="childSelectedKeg">
    <div class="col-sm-6">
       <div>
         <h3>Edit Keg</h3>
         <div class="form-group">
           <label>Enter Beer Name</label>
           <input [(ngModel)]="childSelectedKeg.name">
         </div>
         <div class="form-group">
           <label>Enter Brewery</label>
           <input [(ngModel)]="childSelectedKeg.brand">
         </div>
         <div class="form-group">
           <label>Enter Beer Type</label>
           <input [(ngModel)]="childSelectedKeg.type">
         </div>
         <div class="form-group">
           <label>Enter Price</label>
           <input type="number" [(ngModel)]="childSelectedKeg.price">
         </div>
         <div class="form-group">
           <label>Enter ABV</label>
           <input type="number" [(ngModel)]="childSelectedKeg.abv">
         </div>
         <button (click)="doneButtonClicked()">Submit</button>
       </div>
     </div>
     <div class="col-sm-6">
       <keg-volume [grandchildSelectedKeg]="childSelectedKeg"></keg-volume>
     </div>
   </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() volumeSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
