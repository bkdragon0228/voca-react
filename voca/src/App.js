import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<DayList />} />
                <Route path="/day/:day" element={<Day />} />
            </Routes>
        </Router>
    );
}

export default App;
