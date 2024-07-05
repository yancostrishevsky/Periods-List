import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Period } from '../period';
import { PeriodService } from '../services/period.service';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeriodsComponent implements OnInit {
  periods: Period[] = [];
  header: string[] = ["asasa", "asdasdas", "asdasda"];
  constructor(private periodService: PeriodService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getPeriods();
  }

  getPeriods(): void {
    this.periodService.getPeriods().subscribe(periods => {
      this.periods = periods;
      this.cdr.markForCheck();
    });
  }
}