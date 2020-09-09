import React, { useState, useReducer } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { uiOpenModal } from '../../actions/ui';
import { useDispatch } from 'react-redux';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [{
  title: 'Cumpleaños del jeff',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Eze'
  }
}];




export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month' );

  const dispatch = useDispatch();

  const onEventDoubleClick = (e) => {   
    dispatch( uiOpenModal() )
  }

  const onSelectEvent = (e) => {
    //console.log(e);
  }

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  }

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }

    return {
      style
    }
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
        messages={ messages }
        eventPropGetter={ eventStyleGetter }
        components={{ 
          event: CalendarEvent 
        }}
      />  

      <CalendarModal />

    </div>
  )
}
