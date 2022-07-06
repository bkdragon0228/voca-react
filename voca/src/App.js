import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import Empty from './component/Empty';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateWord from './component/CreateWord';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<DayList />} />
                <Route path="/day/:day" element={<Day />} />
                <Route path="/create_word" element={<CreateWord />} />
                <Route path="*" element={<Empty />} />
            </Routes>
        </Router>
    );
}

export default App;
