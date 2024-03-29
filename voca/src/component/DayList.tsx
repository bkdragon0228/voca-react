// import dummy from '../db/db.json';
import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';

export interface IDay {
    id : number;
    day : number
}
const DayList = () => {
    const [days, setDays] = useState([]);

    const fetchDay = async () => {
        const res = await fetch('http://localhost:3001/days');
        const json = await res.json();
        setDays(json);
    };

    useEffect(() => {
        fetchDay();
    }, []);

    return (
        <ul className="list_day">
            {days.map((ele: IDay) => (
                <li key={ele.id}>
                    <Link to={`/day/${ele.day}`}>Day {ele.day}</Link>
                </li>
            ))}
        </ul>
    );
};

export default DayList;
