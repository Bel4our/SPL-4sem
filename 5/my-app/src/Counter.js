import React, { useState } from 'react';
import Button from './Button';
import './App.css';

function Counter()
{
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="cont">
            <div className={`count ${count >= 5 ? 'red' : ''}`}>
                {count}
            </div>
            <div className="button-container">
                <Button
                    title="inc"
                    callback={increase}
                    disabled={count >= 5}
                />
                <Button
                    title="res"
                    callback={reset}
                    disabled={count == 0}
                />
            </div>
        </div>
    );
};

export default Counter;
