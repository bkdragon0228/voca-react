import dummy from '../db/db.json';
const Day = () => {
    const day = 1;
    const wordList = dummy.words.filter((e) => e.day === day);
    return (
        <div>
            <table>
                <tbody>
                    {wordList.map((ele) => (
                        <tr>
                            <td>{ele.eng}</td>
                            <td>{ele.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Day;
