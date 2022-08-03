import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import dummy from '../db/db.json';
import Word from './Word.tsx';

const Day = () => {
    const { day } = useParams();
    // const wordList = dummy.words.filter((e) => e.day === Number(day));

    const [words, setWords] = useState([]);

    const wordFetch = async () => {
        const res = await fetch(` http://localhost:3001/words?day=${day}`);
        const json = await res.json();
        setWords(json);
    };

    useEffect(() => {
        wordFetch();
    }, [day]);

    return (
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map((ele) => (
                        <Word key={ele.id} word={ele} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Day;
