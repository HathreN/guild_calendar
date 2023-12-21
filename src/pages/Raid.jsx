import {useEffect} from "react";

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

const Raid = () => {
    let meetingId= localStorage.getItem('meetingId')
    useEffect(() => {
        meetingId= localStorage.getItem('meetingId')
        console.log(meetingId)
    }, [meetingId]);
    return(
        <div id="mainPage">
            <div id="mainContent">
                <div id="navbar">
                </div>
                <div id="calendar" className="text-amber-600 font-bold">
                    <p className="text-amber-600">{meetings[meetingId-1].name}</p>
                </div>
            </div>
        </div>
    )

}
export default Raid;