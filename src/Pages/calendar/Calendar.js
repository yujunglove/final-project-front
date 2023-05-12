import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import CalendarCss from '../../components/calendar/Calendar.css';

function Calendar(){

    return(

    <div className={CalendarCss} >
        <div className='personalCal'>개인</div>
        <div className='companyCal'>부서/회사</div>
        <div className='insertSch'>일정등록</div>
        <div id='Calendar'>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        height={770}
        
      />
      </div>
    </div>
  );
}

export default Calendar;