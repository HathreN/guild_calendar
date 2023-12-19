import {format, getDay, isEqual, isSameDay, isSameMonth, isToday, parse, parseISO, startOfToday} from "date-fns";
import {useContext, useState} from "react";

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
const SingleDay =  ({meetings, day, dayId}) => {

    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
    const todaysMeeting=filterMeetingsByDay(meetings,day)
    let [currentMonth, setCurrentMonth] = useState(format(startOfToday(), 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
    const anyMeetingsPresent = todaysMeeting.length>0
    const isSelected = isEqual(day,selectedDay)

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
                onClick={() => console.log('tutaj')}
                className={classNames(
                    isSelected && 'text-white',
                    !isSelected && isToday(day) && 'text-red-500',
                    !isSelected && !isToday(day) && isSameMonth(day, firstDayCurrentMonth) && 'text-gray-900', //every day of month other than today
                    !isSelected && !isToday(day) && !isSameMonth(day, firstDayCurrentMonth) && 'text-gray-400 bg-gray-900',
                    isSelected && isToday(day) && 'bg-red-500', // today
                    isSelected && !isToday(day) && 'bg-gray-900', // every day of month other than today
                    !isSelected && 'hover:bg-gray-200', // hovered day
                    (isSelected || isToday(day)) && 'font-semibold', 'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                )}
            >
                <time dateTime={format(day, 'yyyy-MM-dd')}>
                    <div className="">
                        {anyMeetingsPresent? <img src={todaysMeeting[0].imageUrl}/> : format(day, 'd')}
                    </div>
                </time>
            </button>

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