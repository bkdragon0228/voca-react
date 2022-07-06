import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CreateWord = () => {
    const [days, setDays] = useState([]);
    const navigate = useNavigate();

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

        fetch(`http://localhost:3001/words/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false,
            }),
        }).then((res) => {
            if (res.ok) {
                alert('생성이 완료 되었습니다.');
                navigate(`/day/${dayRef.current.value}`);
            }
        });
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
