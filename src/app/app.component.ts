import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
import { AddKegComponent } from './add-keg/add-keg.component';
import { DisplayKegComponent } from './display-keg/display-keg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Garnett & William Taps';

  masterKegs: Keg[] = [
    new Keg(5, "Huntsman IPA", "Yharnam Brewing", 6.9, './../assets/huntsman.jpg'),
    new Keg(4, "Cainhurst Cider", "Silver Lady Orchard", 5.2, './../assets/silver_lady.jpg'),
    new Keg(5, "Celestial Saisson", "Iosefka's Clinic", 4.8, './../assets/celestial.jpg'),
    new Keg(6, "Mad One IIPA", "Hemwick Hops", 8, './../assets/madone.jpg')
  ];

  addKegButton = false;

  displayAddKeg() {
    this.addKegButton = true;
  }

  addKeg(newKeg: Keg) {
    this.masterKegs.push(newKeg);
    this.addKegButton = false;
  }
}
