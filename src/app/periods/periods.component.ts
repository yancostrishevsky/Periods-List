import { Component } from '@angular/core';
import { Period } from '../period';
import { PERIODS } from '../mock-periods';
@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss']
})
export class PeriodsComponent {
  periods = PERIODS;

  getDisplayedText(dataTypes: string[]): string{
    const maxLenght = 30;
    const joinedText = dataTypes.join(', ');

    if (joinedText.length > maxLenght){
      return joinedText.substring(0, maxLenght) + '...';
    }
    else {
      return joinedText;
    }
  }
}
