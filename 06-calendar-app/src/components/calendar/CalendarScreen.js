import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { uiOpenModal } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { eventSetActive, eventClearActiveEvent, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar );
  const { uid } = useSelector( state => state.auth );
  
  useEffect(() => {
    
    dispatch( eventStartLoading() );

  }, [dispatch]);

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month' );

  
  const onEventDoubleClick = (e) => {   
    dispatch( uiOpenModal() );
  }

  const onSelectEvent = (e) => {
    dispatch( eventSetActive( e ));   
  }

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  }

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: ( uid === event.user._id ) ?  '#367CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }
    return {
      style
    }
  }

  const onSelectedSlot = (e) => {
    console.log(e);
    dispatch( eventClearActiveEvent() );
  }

  return (
    <div className="calendar-screen">
      <Navbar />  

      <Calendar
        view={ lastView }
        localizer={localizer}
        events={ events }
        startAccessor="start"
        endAccessor="end"
        onDoubleClickEvent={ onEventDoubleClick }
        onSelectEvent={ onSelectEvent }
        onView={ onViewChange }
        onSelectSlot={ onSelectedSlot }
        selectable={true}
        messages={ messages }
        eventPropGetter={ eventStyleGetter }
        components={{ 
          event: CalendarEvent 
        }}
      />  

      <CalendarModal />

      <AddNewFab onClick={ onEventDoubleClick }/>
      
      {
        activeEvent &&
        <DeleteEventFab />

      }

    </div>
  )
}
