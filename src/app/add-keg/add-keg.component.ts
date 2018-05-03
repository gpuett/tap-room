import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {
  @Output() sendKeg = new EventEmitter();

  submitKeg(price: number, name: string, brand: string, alcoholContent: number, imgString: string) {
      let newKeg = new Keg(price, name, brand, alcoholContent, imgString);
      this.sendKeg.emit(newKeg);
  }



}
