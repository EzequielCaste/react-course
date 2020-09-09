import moment from "moment";
import { types } from "../types/types";


const initialState = {
  events: [{
    title: 'Cumpleaños del jeff',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Eze'
    }
  }
  ],
  activeEvent: null
};

export const calendarReducer = ( state = initialState, action ) => {

  switch ( action.type ) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload
      }

    case types.eventAddNEw:
      return {
        ...state,
        events: [ ...state.events, action.payload ]
      }
    
    
  
    default:
      return state;
  }
}