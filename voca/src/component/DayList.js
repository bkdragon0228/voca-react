import dummy from '../db/db.json';
const DayList = () => {
    return (
        <ul className="list_day">
            {dummy.days.map((ele) => (
                <li key={ele.id}>Day {ele.day}</li>
            ))}
        </ul>
    );
};

export default DayList;
