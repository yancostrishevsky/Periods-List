import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() key: string;
  @Input() header: string;

  @ContentChild('headerTemplate', { static: false }) headerTemplate: TemplateRef<any>;
  @ContentChild('cellTemplate', { static: false }) cellTemplate: TemplateRef<any>;
}
