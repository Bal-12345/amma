// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/exampleActions';

const App = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.example.data);
    const loading = useSelector((state) => state.example.loading);
    const error = useSelector((state) => state.example.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div>
            <h1>React-Redux with Redux-Thunk</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
