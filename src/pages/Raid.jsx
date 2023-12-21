const Raid = () => {
    let meetingsToday = JSON.parse(localStorage.getItem('meeting'))

    return (
        <div id="mainPage">
            <div id="mainContent">
                <div id="navbar">
                </div>
                {meetingsToday.map((meeting, meetingId) => (
                    <div>
                        <div id="calendar" className="text-amber-600 font-bold">
                            <p className="text-amber-600">{meeting.id}</p>
                        </div>
                        <div id="calendar" className="text-amber-600 font-bold">
                            <p className="text-amber-600">{meeting.name}</p>
                        </div>
                        <div id="calendar" className="text-amber-600 font-bold">
                            <img src={meeting.imageUrl}/>
                        </div>
                        <div id="calendar" className="text-amber-600 font-bold">
                            <p className="text-amber-600">{meeting.startDatetime}</p>
                        </div>
                    </div>)
                )}
            </div>
        </div>
    )

}
export default Raid;