import { useEffect, useRef, useState } from 'react';

const CreateWord = () => {
    const [days, setDays] = useState([]);

    const fetchDay = async () => {
        const res = await fetch('http://localhost:3001/days');
        const json = await res.json();
        setDays(json);
    };

    useEffect(() => {
        fetchDay();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    return (
        <form onSubmit={handleSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input
                    type="text"
                    placeholder="Please Enter"
                    ref={engRef}
                ></input>
            </div>
            <div className="input_area">
                <label>kor</label>
                <input
                    type="text"
                    placeholder="입력하시오"
                    ref={korRef}
                ></input>
            </div>
            <div className="input_area">
                <label>day</label>
                <select ref={dayRef}>
                    {days.map((day) => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <button>저장</button>
            </div>
        </form>
    );
};

export default CreateWord;
