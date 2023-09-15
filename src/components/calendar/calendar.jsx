import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import list from '@fullcalendar/list';
import Fullcalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import React from 'react';
import './calendar.css';


const addEvent = () => {

}

const Calendar = () => {
    return (
        <div className='page'>
            <div className='aside'>
                <h2>AIT Event Hub</h2>
                <Fullcalendar
                    plugins={[list]}
                    initialView='listWeek'
                    headerToolbar={false}
                />
            </div>
            <div className='calendar'>
                <Fullcalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView={"dayGridMonth"}
                    headerToolbar={{
                    start: "prev,today,next addEventButton", // will normally be on the left. if RTL, will be on the right
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
                    }}
                    height={"100vh"}
                    windowResizeDelay={0}
                    selectable={true}
                    nowIndicator={true}
                    customButtons = {{
                        addEventButton : {
                            text: 'Add Event',
                            click: addEvent()
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Calendar;