import React from 'react';
import DepartureBoard from './components/DepartureBoard';
import './App.css';

const METRICS = [
    { label: 'ALL-TIME REVENUE', value: '$1,234,567' },
    { label: 'ALL-TIME BOOKINGS', value: '42,314' },
    { label: 'ALL-TIME COUNTRIES SERVED', value: '87' },
    { label: 'ALL-TIME HAPPY TRAVELERS', value: '125,000+' },
];

function App() {
    return (
        <div className="app">
            <DepartureBoard metrics={METRICS} />
        </div>
    );
}

export default App;
