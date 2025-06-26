import { trackingReducer, initialState, TrackingState } from './tracking.reducer';
import { trackClick } from './tracking.actions';

describe('trackingReducer', () => {
  it('debe incrementar el contador de un tag', () => {
    const action = trackClick({ tag: 'btn-guardar' });
    const state1 = trackingReducer(initialState, action);
    expect(state1.counts['btn-guardar']).toBe(1);

    const state2 = trackingReducer(state1, action);
    expect(state2.counts['btn-guardar']).toBe(2);
  });

  it('debe mantener el estado original para tags distintos', () => {
    const action1 = trackClick({ tag: 'tag1' });
    const action2 = trackClick({ tag: 'tag2' });

    const state1 = trackingReducer(initialState, action1);
    const state2 = trackingReducer(state1, action2);

    expect(state2.counts['tag1']).toBe(1);
    expect(state2.counts['tag2']).toBe(1);
  });
});
