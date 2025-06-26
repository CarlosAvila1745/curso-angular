import { createReducer, on } from '@ngrx/store';
import { trackClick } from './tracking.actions';

export interface TrackingState {
  counts: Record<string, number>;
}

export const initialState: TrackingState = {
  counts: {}
};

export const trackingReducer = createReducer(
  initialState,
  on(trackClick, (state, { tag }) => ({
    counts: {
      ...state.counts,
      [tag]: (state.counts[tag] || 0) + 1
    }
  }))
);
