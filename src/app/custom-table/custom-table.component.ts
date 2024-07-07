import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { Period } from '../period';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {
  @Input() dataSource: Period[];

  @ContentChildren(ColumnComponent) columns: QueryList<ColumnComponent>;
}
