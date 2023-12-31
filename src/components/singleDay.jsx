import {format, getDay, isEqual, isSameDay, isSameMonth, isToday, parse, parseISO, startOfToday} from "date-fns";
import {useState} from "react";

let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
]

function filterMeetingsByDay(meetings, day) {
    return meetings.filter((meeting) =>
        isSameDay(parseISO(meeting.startDatetime), day)
    )
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SingleDay = ({meetings, day, dayId, handleSelectDay}) => {
    function setSelectedDay(day) {
        localStorage.setItem('selectedDay', day)
        handleSelectDay(day)
    }

    function showRaidDay() {
        console.log(todaysMeeting)
        localStorage.setItem('meeting', JSON.stringify(todaysMeeting))
        window.location = "/raid"
    }

    function changeHoverState(param) {
        setHover(param)
    }

    let today = startOfToday()
    let selectedDay = today
    const todaysMeeting = filterMeetingsByDay(meetings, day)
    const [hover, setHover] = useState(null)
    let [currentMonth, setCurrentMonth] = useState(format(startOfToday(), 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
    const anyMeetingsPresent = todaysMeeting.length > 0
    const isSelected = isEqual(day, selectedDay)

    return (
        <div
            key={day.toString()}
            className={classNames(
                dayId === 0 && colStartClasses[getDay(day - 1)],
                'py-1.5'
            )}
        >
            <button
                type="button"
                onClick={() => setSelectedDay(day)}
                className={classNames(
                    isSelected && 'text-white',
                    !isSelected && isToday(day) && 'text-red-500',
                    !isSelected && !isToday(day) && isSameMonth(day, firstDayCurrentMonth) && 'text-gray-900', //every day of month other than today
                    !isSelected && !isToday(day) && !isSameMonth(day, firstDayCurrentMonth) && 'text-gray-900',
                    isSelected && isToday(day) && 'border-double border-4 border-sky-500 rounded-none', // today
                    isSelected && !isToday(day) && 'bg-gray-900', // every day of month other than today
                    !isSelected && 'hover:bg-gray-200', // hovered day
                    (isSelected || isToday(day)) && 'font-semibold', 'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                )}
            >
                <time dateTime={format(day, 'yyyy-MM-dd')}>
                    <div className="" onMouseEnter={() => {
                        if (anyMeetingsPresent) changeHoverState(todaysMeeting)
                    }}>
                        {/* eslint-disable-next-line no-unused-expressions */}
                        {anyMeetingsPresent ? <img src={todaysMeeting[0].imageUrl} alt="meeting" onClick={() => {
                            showRaidDay()
                        }}/> : format(day, 'd')}
                    </div>
                </time>
            </button>
            {hover &&
                <div className="absolute p-2 -mt-8 bg-amber-300" onMouseLeave={() => changeHoverState(false)}>
                    {todaysMeeting.map((day, dayIdx) =>
                        <div>
                            <div>{day.name}</div>
                            <img className="h-10 w-10" src={day.imageUrl}/>
                            <div>{day.startDatetime}</div>
                        </div>
                    )}
                </div>}
            <div className="w-1 h-1 mx-auto mt-1">
                {meetings.some((meeting) =>
                    isSameDay(parseISO(meeting.startDatetime), day)
                ) && (
                    <div className="w-1 h-1 rounded-full bg-red-500"></div>
                )}
            </div>
        </div>
    );
}

export default SingleDay;