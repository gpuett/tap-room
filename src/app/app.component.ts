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
    new Keg(5, "Huntsman IPA", "Yharnam Brewing", 6.9),
    new Keg(4, "Cainhurst Cider", "Silver Lady Orchard", 5.2),
    new Keg(5, "Celestial Saisson", "Iosefka's Clinic", 4.8),
    new Keg(6, "Mad One IIPA", "Hemwick Hops", 8)
  ];

  
}
