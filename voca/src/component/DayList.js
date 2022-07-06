import dummy from '../db/db.json';
import { Link } from 'react-router-dom';
const DayList = () => {
    return (
        <ul className="list_day">
            {dummy.days.map((ele) => (
                <li key={ele.id}>
                    <Link to="/day">Day {ele.day}</Link>
                </li>
            ))}
        </ul>
    );
};

export default DayList;
