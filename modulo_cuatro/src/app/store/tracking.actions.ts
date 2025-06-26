import { createAction, props } from '@ngrx/store';

export const trackClick = createAction(
  '[Tracker] Track Click',
  props<{ tag: string }>()
);
