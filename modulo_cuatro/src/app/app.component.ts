import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TrackingState } from './store/tracking.reducer';
import { trackClick } from './store/tracking.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  trackedTags: Record<string, number> = {};

  constructor(private store: Store<{ tracking: TrackingState }>) {
    this.store.select('tracking').subscribe(state => {
      this.trackedTags = state.counts;
    });
  }

  onTagClicked(tag: string) {
    this.store.dispatch(trackClick({ tag }));
  }
}
