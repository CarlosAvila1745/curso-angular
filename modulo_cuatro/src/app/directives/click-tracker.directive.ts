import { Directive, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appClickTracker]'
})
export class ClickTrackerDirective implements OnInit, OnDestroy {
  private clickSub!: Subscription;

  @Output() clicked = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.clickSub = fromEvent(this.el.nativeElement, 'click').subscribe(() => {
      const tag = this.el.nativeElement.getAttribute('data-tracking-tag') || 'unknown';
      this.clicked.emit(tag);
    });
  }

  ngOnDestroy() {
    if (this.clickSub) this.clickSub.unsubscribe();
  }
}
