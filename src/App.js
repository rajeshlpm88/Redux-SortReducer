// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from './actions';

const App = () => {
    const sort = useSelector(state => state);
    const dispatch = useDispatch();

    const sampleList = [
        { name: 'Alice', date: '2021-04-01' },
        { name: 'Bob', date: '2021-03-01' },
        { name: 'Charlie', date: '2021-05-01' },
    ];

    const sortedList = [...sampleList].sort((a, b) => {
        if (sort === 'name') 
        {
            return a.name.localeCompare(b.name);
        } 
        else if (sort === 'date') 
        {
            return new Date(a.date) - new Date(b.date);
        }
        return 0;
    });

    const handleSortChange = (e) => {
        dispatch(setSort(e.target.value));
    };

    return (
        <div>
            <h2>Sort</h2>
            <p>Current Sort: {sort}</p>
            <select value={sort} onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="date">Date</option>
            </select>
            <ul>
                {sortedList.map((item, index) => (
                    <li key={index}>{`${item.name} - ${item.date}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
