import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "percentage",
  pure: false
})

export class PercentagePipe implements PipeTransform {
  transform(input: Keg[], desiredPercentage) {
    let output: Keg[] = [];
    if(desiredPercentage === "highAbvTaps") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].alcoholContent >= 6) {
          output.push(input[i]);
        }
      }
    return output;
  } else {
    return input;
  }
  }
}
