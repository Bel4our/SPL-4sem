import React from 'react';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/action';
import { CounterState } from '../redux/types';
import styles from '../App.module.css';
import { AppDispatch } from '../redux/store';

export default function Counter() {

    

    const dispatch : AppDispatch = useDispatch();
    const count = useSelector((state: CounterState) => state);
    
    return (
        <div className={styles.counterContainer}>
            <div className={styles.counterValue}>
                <span>{count}</span>
            </div>
            <div className={styles.buttonGroup}>
                <Button title="increase" callback={() => dispatch(increment())} />
                <Button title="decrease" callback={() => dispatch(decrement())} />
                <Button title="reset" callback={() => dispatch(reset())} />
            </div>
        </div>
    )
}
