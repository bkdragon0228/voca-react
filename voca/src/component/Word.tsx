import { useState } from 'react';
import React from 'react';

interface Iprops {
    word: Iword;
}

export interface Iword {
    id: number;
    day: number;
    eng: string;
    kor: string;
    isDone: boolean;
}

const Word = ({ word: W }: Iprops) => {
    const [word, setWord] = useState(W);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const handleClick = () => {
        // setIsShow((prev) => (prev ? false : true));
        setIsShow(prev => !prev);
    };

    const toggleDone = () => {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    };
    const del = () => {
        if (window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
            }).then(res => {
                if (res.ok) {
                    setWord({ ...word, id: 0 });
                }
            });
        }
    };

    if (word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input
                    type="checkbox"
                    onChange={toggleDone}
                    checked={isDone}
                ></input>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={handleClick}>
                    뜻 {isShow ? '숨기기' : '보기'}
                </button>
                <button className="btn_del" onClick={del}>
                    삭제
                </button>
            </td>
        </tr>
    );
};

export default Word;
