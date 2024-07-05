import { Component, Input } from '@angular/core';
import { Period } from '../period';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() periods: Period[] = [];
}
