import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
import { AddKegComponent } from './add-keg/add-keg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Garnett & William Taps';
  kegs: Keg[] = [
    new Keg(5, "Huntsman IPA", "Yharnam Brewing", 6.9, './../assets/huntsman.jpg'),
    new Keg(4, "Cainhurst Cider", "Silver Lady Orchard", 5.2, './../assets/silver_lady.jpg'),
    new Keg(5, "Celestial Saisson", "Iosefka's Clinic", 4.8, './../assets/celestial.jpg'),
    new Keg(6, "Mad One IIPA", "Hemwick Hops", 8, './../assets/madone.jpg')
  ];
  selectedKeg = null;
  editForm = false;

  inventoryColor(keg) {
    if (keg.pints >= 62) {
      return "high";
    } else if (keg.pints >= 31) {
      return "med";
    } else {
      return "low";
    }
  }

  displayEditForm(clickedKeg) {
    this.editForm = true;
    this.selectedKeg = clickedKeg;
  }

  finishedEdit(){
    this.selectedKeg = null;
  }

}
