import { createAction, props } from '@ngrx/store';

export const setColor = createAction('SetColor', props<{ value: string }>());
export const removeColor = createAction('RemoveColor');
