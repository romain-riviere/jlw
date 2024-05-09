import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';
import moment from 'moment';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit, OnDestroy {
  days1 = 0;
  days2 = 0;
  days3 = 0;
  hours1 = 0;
  hours2 = 0;
  minutes1 = 0;
  minutes2 = 0;
  seconds1 = 0;
  seconds2 = 0;

  subscription: Subscription | undefined;

  constructor(private zone: NgZone, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.updateCounter();
    this.zone.runOutsideAngular(() => {
      const timeInterval = interval(1000);
      this.subscription = timeInterval.subscribe(() => this.updateCounter());
    });
  }

  ngOnDestroy(): void {
  }

  private updateCounter(): void {
    var targetDate = moment('2025-05-10 12:00:00');
    var now = moment.now();
    var time = targetDate.diff(now);
    var days = Math.floor(time / (1000 * 60 * 60 * 24));

    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);

    this.days1 = Math.floor(days / 100);
    this.days2 = Math.floor((days % 100) / 10);
    this.days3 = days % 10;

    this.hours1 = Math.floor(hours / 10);
    this.hours2 = hours % 10;

    this.minutes1 = Math.floor(minutes / 10);
    this.minutes2 = minutes % 10;

    this.seconds1 = Math.floor(seconds / 10);
    this.seconds2 = seconds % 10;

    this.changeDetector.detectChanges();
  }
}

