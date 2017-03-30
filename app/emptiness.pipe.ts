import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], desiredEmptiness) {
    var output: Keg[] = [];
    if (desiredEmptiness === "kegsOnTap"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].volume > 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptiness === "almostEmptyKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].volume <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
