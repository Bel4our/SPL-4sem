import { useState, useEffect } from "react";
import React from "react";
import Button from "./Button";
import Display from "./Display";

function Calculator() 
{
    const [input, setInput] = useState<string>("");
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme === "dark" : true;
    });
    const [history, setHistory] = useState<string[]>([]);
    const [isError, setIsError] = useState<boolean>(false);

    const handleButtonClick = (value: string) => {
        if (isError) return;
    
        const lastNumber = input.split(/[\+\-\*\/]/).pop() || "";
    
        if (/[0-9]/.test(value)) 
        {
            if (lastNumber === "0") 
            {
                return; 
            }
        }
    
        if (value === ".") 
        {
            if (lastNumber.includes(".")) 
            {
                return; 
            }
            if (lastNumber === "") 
            {
                setInput((prevInput) => prevInput + "0."); 
                return;
            }
        }
    
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput("");
        setIsError(false);
    };

    const handleBackspace = () => {
        if (isError) return;
        setInput((prevInput) => prevInput.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            if (input === "" || input === "0") 
            {
                throw new Error("Пустой ввод");
            }

            if (input.includes("/0")) 
            {
                throw new Error("Деление на ноль");
            }

            const result: string = eval(input);

            setInput(result.toString());

            setHistory((prevHistory) => [...prevHistory, `${input} = ${result}`]);
        } catch (error) {
            if (error instanceof Error && error.message === "Деление на ноль") 
            {
                setInput(error.message);
            } else if(error instanceof Error && error.message === "Пустой ввод")
            {
                setInput(error.message);
            }
            else 
            {
                setInput("Ошибка");
            }
            setIsError(true);
        }
    };

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode: boolean = !prevMode;
            localStorage.setItem("theme", newMode ? "dark" : "light");
            document.body.classList.toggle("light", !newMode); 
            return newMode;
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") 
        {
            document.body.classList.add("light"); 
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key;

            if (isError) return;
            
            if (/[0-9+\-*/.]/.test(key)) {
                handleButtonClick(key);
            } else if (key === "Enter") {
                event.preventDefault(); 
                handleCalculate();
            } else if (key === "Backspace") {
                handleBackspace();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [input, isError]);

    return (
        <div className={`container ${isDarkMode ? "dark" : "light"}`}>
            <div className="calculator">
                <Display value={input} />
                <div className="buttons">
                    <Button value="🌙" onClick={toggleTheme} />
                    <Button value="C" onClick={handleClear} />
                    <Button value="⌫" onClick={handleBackspace} />
                    <Button value="/" onClick={() => handleButtonClick("/")} />

                    <Button value="7" onClick={() => handleButtonClick("7")} />
                    <Button value="8" onClick={() => handleButtonClick("8")} />
                    <Button value="9" onClick={() => handleButtonClick("9")} />
                    <Button value="*" onClick={() => handleButtonClick("*")} />

                    <Button value="4" onClick={() => handleButtonClick("4")} />
                    <Button value="5" onClick={() => handleButtonClick("5")} />
                    <Button value="6" onClick={() => handleButtonClick("6")} />
                    <Button value="-" onClick={() => handleButtonClick("-")} />

                    <Button value="1" onClick={() => handleButtonClick("1")} />
                    <Button value="2" onClick={() => handleButtonClick("2")} />
                    <Button value="3" onClick={() => handleButtonClick("3")} />
                    <Button value="+" onClick={() => handleButtonClick("+")} />
                </div>
                <div className="bottom">
                    <Button value="0" onClick={() => handleButtonClick("0")} />
                    <Button value="." onClick={() => handleButtonClick(".")} />
                    <Button value="=" onClick={handleCalculate} />
                </div>
                <div className="history">
                    <h3>История вычислений:</h3>
                    {history.map((entry, index) => (
                        <div key={index} className="history-entry">
                            {entry}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calculator;