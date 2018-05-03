import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../models/keg.model';


@Component({
  selector: 'app-display-keg',
  templateUrl: './display-keg.component.html',
  styleUrls: ['./display-keg.component.css']
})
export class DisplayKegComponent {
  @Input() childKegs: Keg[];
  @Output() clickSender = new EventEmitter();

  selectedKeg = null;
  editForm = false;

  editKeg(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  displayEditForm(clickedKeg) {
    this.editForm = true;
    this.selectedKeg = clickedKeg;
  }

  finishedEdit(){
    this.selectedKeg = null;
  }

  filterByPercentage: string = "allTaps";

  onChange(optionFromMenu) {
    this.filterByPercentage = optionFromMenu;
  }

  inventoryColor(keg) {
    if (keg.pints >= 62) {
      return "high";
    } else if (keg.pints >= 31) {
      return "med";
    } else {
      return "low";
    }
  }
}
