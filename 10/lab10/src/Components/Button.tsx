import React from "react";
import styles from '../App.module.css';

interface ButtonProps {
    text: string,
    callback: () => void;
}

const Button : React.FC<ButtonProps> = ({text, callback}) => {
    return (
        <button onClick={callback}  className={`${styles.button}`}>
            {text}
        </button>
    );
}

export default Button;