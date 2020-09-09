import moment from "moment";
import { types } from "../types/types";


const initialState = {
  events: [{
    id: new Date().getTime(),
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
        events: [ 
          ...state.events, 
          action.payload 
        ]
      }
    
    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null
      }

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map(
          e => ( e.id === action.payload.id ) ? action.payload : e
        )
      }
    
  
    default:
      return state;
  }
}