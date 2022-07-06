import { useState } from 'react';

const Word = ({ word }) => {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const handleClick = () => {
        // setIsShow((prev) => (prev ? false : true));
        setIsShow((prev) => !prev);
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
        }).then((res) => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    };
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
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    );
};

export default Word;
