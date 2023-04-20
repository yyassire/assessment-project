import { createReducer, on } from '@ngrx/store';
import { initialState } from './color.state';
import { removeColor, setColor } from './color.actions';

const _colorReducer = createReducer(
  initialState,
  on(setColor, (state, action) => {
    return {
      ...state,
      color: action.value,
    };
  }),
  on(removeColor, (state) => {
    return {
      ...state,
      color: '',
    };
  })
);
export function colorReducer(state, action) {
  return _colorReducer(state, action);
}
