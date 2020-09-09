import { types } from "../types/types";


export const eventAddNew = ( event ) => ({
  type: types.eventAddNEw,
  payload: event
});

export const eventSetActive = ( event ) => ({
  type: types.eventSetActive,
  payload: event
});