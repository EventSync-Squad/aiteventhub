import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import React from 'react';
import Fullcalendar from '@fullcalendar/react';
import list from '@fullcalendar/list';

const Calendar = () => {
    return (
        <div>
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,list]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                start: "today prev,next", // will normally be on the left. if RTL, will be on the right
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay,list", // will normally be on the right. if RTL, will be on the left
                }}
                height={"90vh"}
                windowResizeDelay={0}
                selectable={true}
                nowIndicator={true}
            />
        </div>
    );
}

export default Calendar;