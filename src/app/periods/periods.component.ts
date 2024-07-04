import { Component, OnInit } from '@angular/core';
import { Period } from '../period';
import { PERIODS } from '../mock-periods';
import { PeriodService } from '../services/period.service';
@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss']
})
export class PeriodsComponent implements OnInit {
  periods: Period[] = [];

  constructor(private periodService: PeriodService) { }

  ngOnInit(): void {
    this.getPeriods();
  }

  getPeriods(): void {
    this.periodService.getPeriods().subscribe(periods => this.periods = periods);
  }
}
