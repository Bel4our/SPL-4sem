import React from 'react';
import styles from '../App.module.css';

interface ButtonProps {
    title: string;
    callback: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, callback}) => {
    return (
        <button onClick={callback}  className={`${styles.button}`}>
            {title}
        </button>
    );
};

export default Button;
