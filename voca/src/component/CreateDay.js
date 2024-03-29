import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateDay = () => {
    const [days, setDays] = useState([]);
    const navigate = useNavigate();
    const fetchDay = async () => {
        const res = await fetch('http://localhost:3001/days');
        const json = await res.json();
        setDays(json);
    };
    const addDay = () => {
        fetch(`http://localhost:3001/days/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: days.length + 1,
            }),
        }).then((res, err) => {
            if (res.ok) {
                alert('생성이 완료 되었습니다.');
                navigate('/');
            }
        });
    };
    useEffect(() => {
        fetchDay();
    }, []);
    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    );
};

export default CreateDay;
