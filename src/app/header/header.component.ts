import { Component, Input } from '@angular/core';
import { Period } from '../period';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() header: string[] = [];
}
