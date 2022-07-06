import { useParams } from 'react-router-dom';
import dummy from '../db/db.json';
import Word from './Word';

const Day = () => {
    const { day } = useParams();
    const wordList = dummy.words.filter((e) => e.day === Number(day));
    return (
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map((ele) => (
                        <Word key={ele.id} word={ele} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Day;
