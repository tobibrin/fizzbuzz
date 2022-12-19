import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, finalize, Subject, takeUntil} from "rxjs";
import {Fizzbuzz, FizzbuzzEntry} from "@fizz-buzz/shared";
import {FizzbuzzService} from "../core/fizzbuzz/fizzbuzz.service";

@Component({
  selector: 'fizz-buzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.scss'],
})
export class FizzbuzzComponent implements OnInit, OnDestroy {
  title = 'Fizzbuzz';

  private requestPending = false;

  fizzbuzz = Fizzbuzz;
  destroy$ = new Subject<void>();
  data$ = new BehaviorSubject<Array<FizzbuzzEntry>>([]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private fizzbuzzService: FizzbuzzService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(({list}) => {
      this.data$.next(list);
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  onNextButtonClick(): void {
    if (this.requestPending) {
      return;
    }
    this.requestPending = true;
    const currentIndex = Math.max(...this.data$.getValue().map(entry => entry.value));
    const nextIndex = currentIndex + 1;
    this.fizzbuzzService.load(nextIndex)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.requestPending = false)
      )
      .subscribe(data => {
        const currentValues = this.data$.getValue();
        this.data$.next([
          {
            value: nextIndex,
            result: data
          },
          ...currentValues
        ]);
      });
  }
}
