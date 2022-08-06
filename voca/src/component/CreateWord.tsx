import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IDay } from './DayList';
const CreateWord = () => {
    const [days, setDays] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const fetchDay = async () => {
        const res = await fetch('http://localhost:3001/days');
        const json = await res.json();
        setDays(json);
    };

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);
            fetchDay();
            setIsLoading(false);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isLoading && dayRef.current && engRef.current && korRef.current) {
            setIsLoading(true);
            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;

            fetch(`http://localhost:3001/words/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    day: day,
                    eng: eng,
                    kor: kor,
                    isDone: false,
                }),
            }).then(res => {
                if (res.ok) {
                    alert('생성이 완료 되었습니다.');
                    navigate(`/day/${day}`);
                }
            });
        }
    };

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);
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
                    {days.map((day: IDay) => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <button style={{ opacity: isLoading ? 0.3 : 1 }}>
                    {isLoading ? 'Saving...' : '저장'}
                </button>
            </div>
        </form>
    );
};

export default CreateWord;
