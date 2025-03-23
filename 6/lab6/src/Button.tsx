import React from "react";

type ButtonProps = {
    value: string;
    onClick: () => void;
};

function Button({ value, onClick }: ButtonProps) {
    const isOperator = ["+", "-", "*", "/"].includes(value);
    const isZero = value === "0";
    const isSpecial = ["C", "⌫", "🌙", "="].includes(value);

    const buttonClass = `button ${isOperator ? "operator" : isZero ? "zero" : isSpecial ? "special" : ""}`;

    return (
        <button onClick={onClick} className={buttonClass}>
            {value}
        </button>
    );
}

export default Button;