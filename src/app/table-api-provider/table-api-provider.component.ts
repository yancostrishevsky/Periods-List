import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Period } from '../period';
import { ListApiService } from '../services/list-api.service';

@Component({
  selector: 'app-table-api-provider',
  templateUrl: './table-api-provider.component.html',
  styleUrls: ['./table-api-provider.component.scss']
})
export class TableApiProviderComponent implements OnInit {
  data$: Observable<Period[]>;

  constructor(private readonly listApiService: ListApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.data$ = this.listApiService.getList();
  }
}
