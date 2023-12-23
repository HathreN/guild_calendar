import Meeting from "../components/meeting";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    isSameDay,
    parse,
    parseISO,
    startOfToday,
} from 'date-fns'
import { pl } from 'date-fns/locale'
import {useState, useEffect} from 'react'
import SingleDay from "../components/singleDay";

const meetings = [
    {
        id: 1,
        name: 'Lodzik 25 main run',
        imageUrl:
            './achievement.png',
        description: "6k gemy, enchanty oraz taktyki",
        startDatetime: '2023-12-19T13:00',
        endDatetime: '2023-12-19T14:30',
    },
    {
        id: 2,
        name: 'Michael Foster',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        startDatetime: '2023-12-20T09:00',
        endDatetime: '2023-12-20T11:30',
    },
    {
        id: 3,
        name: 'Dries Vincent',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        startDatetime: '2023-12-20T17:00',
        endDatetime: '2023-12-20T18:30',
    },
    {
        id: 4,
        name: 'Leslie Alexander',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        startDatetime: '2024-01-09T13:00',
        endDatetime: '2024-01-09T14:30',
    },
    {
        id: 5,
        name: 'Michael Foster',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        startDatetime: '2023-12-13T14:00',
        endDatetime: '2023-12-13T14:30',
    },
]


function dayStyle(isSelected, isToday, isSameMonth){
    const styles=[]
    if(isToday){ styles.push('text-white')
    } else {

    }
    if(isSelected){styles.push('bg-red-500 text-white')}
    return styles
}

export default function Example() {
    const [hover, setHover] = useState(null)
    let [currentMonth, setCurrentMonth] = useState(format(startOfToday(), 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
    let today = startOfToday()
    let selectedDayStorage = today
    let [selectedDay, setSelectedDay] = useState(today)
    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    })
    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    let selectedDayMeetings = meetings.filter((meeting) =>
        isSameDay(parseISO(meeting.startDatetime), selectedDay)
    )

    function handleSelectDay() {
        selectedDayStorage = localStorage.getItem('selectedDay')
        setSelectedDay(selectedDayStorage)
    }

    useEffect(() => {
        setSelectedDay(selectedDay)
    }, [selectedDay]);

    return (
        <div className="pt-16">
            <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
                <div className="md:grid md:grid-cols-1 md:divide-x md:divide-gray-200">
                    <div className="md:pr-14">
                        <div className="flex items-center">
                            <h2 className="flex-auto font-semibold text-gray-900">
                                {format(firstDayCurrentMonth, 'LLLL yyyy',{locale: pl})}
                            </h2>
                            <button
                                type="button"
                                onClick={previousMonth}
                                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Previous month</span>
                                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                            <button
                                onClick={nextMonth}
                                type="button"
                                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Next month</span>
                                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                            <div>Pon</div>
                            <div>Wto</div>
                            <div>Śro</div>
                            <div>Czw</div>
                            <div>Pią</div>
                            <div>Sob</div>
                            <div>Nie</div>
                        </div>
                        <div className="grid grid-cols-7 mt-2 text-sm">
                            {days.map((day, dayIdx) =>
                                <SingleDay meetings={meetings} day={day} dayId={dayIdx} handleSelectDay={()=>handleSelectDay()}/>
                            )}
                        </div>
                    </div>
                    <section className="mt-12 md:mt-0 md:pl-14">
                        <h2 className="font-semibold text-gray-900">
                            Raidy w dzień{' '}
                            <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                                {format(selectedDay, 'LLL dd, yyy', {locale:pl})}
                            </time>
                        </h2>
                        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                            {selectedDayMeetings.length > 0 ? (
                                selectedDayMeetings.map((meeting) => (
                                    <Meeting meeting={meeting} key={meeting.id} />
                                ))
                            ) : (
                                <p>No meetings for today.</p>
                            )}
                        </ol>
                    </section>
                </div>
            </div>
        </div>
    )
}


