import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ColorState } from './color.state';

const getColorState = createFeatureSelector<ColorState>('color');

export const getColor = createSelector(getColorState, (state) => {
  return state.color;
});
