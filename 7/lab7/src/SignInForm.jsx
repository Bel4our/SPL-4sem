import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    const navigate = useNavigate();
    const [mail, setmail] = useState('');
    const [password, setPassword] = useState('');
    const [mailDirty, setmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [mailError, setMailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [isFormValid, setFormValid] = useState(false);
    const [authError, setAuthError] = useState('');

    useEffect(() => {
        if (mailError || passwordError) 
        {
            setFormValid(false);
        } 
        else 
        {
            setFormValid(true);
        }
    }, [mailError, passwordError]);

    const mailHandler = (e) => {
        const value = e.target.value;
        setmail(value);
        setAuthError('');
        
        if (!value.trim()) 
        {
            setMailError('Email не может быть пустым');
            return;
        }
        
        if (/\s/.test(value))
        {
            setMailError('Email не должен содержать пробелы');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toLowerCase())) 
        {
            setMailError('Некорректный Email');
            return;
        }
        
        setMailError('');
    };

    const passwordHandler = (e) => {
        const value = e.target.value;
        setPassword(value);
        setAuthError('');
        
        if (!value) {
            setPasswordError('Пароль не может быть пустым');
            return;
        }
        
        setPasswordError('');
    };

    const blurHandler = (e) => {
        switch (e.target.name) 
        {
            case 'mail':
                setmailDirty(true);
                break;

            case 'password':
                setPasswordDirty(true);
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isFormValid) 
        {
            if (mail === 'test@test.com' && password === 'test') 
            {
                alert('Авторизация прошла успешно!');
            } 
            else 
            {
                setAuthError('Неверный Email или пароль');
            }
        }
    };


    return (
        <div className="authForm">
            <form onSubmit={handleSubmit}>
                <h1>Вход</h1>
                
                {authError && <div className="error-message">{authError}</div>}
                
                {(mailDirty && mailError) && <div className="error-message">{mailError}</div>}

                <input 
                    onChange={mailHandler} 
                    value={mail} 
                    onBlur={blurHandler} 
                    name="mail" 
                    type="text" 
                    placeholder="Введите ваш Email"
                />
                
                {(passwordDirty && passwordError) && <div className="error-message">{passwordError}</div>}
                <input 
                    onChange={passwordHandler} 
                    value={password} 
                    onBlur={blurHandler} 
                    name="password" 
                    type="password" 
                    placeholder="Введите ваш пароль"
                />
                
                <button disabled={!isFormValid} type="submit">
                    Войти
                </button>
                
                <div className="auth-links">
                    <div className="auth-link">
                        Нет аккаунта?
                        <button type="button" onClick={() => navigate('/sign-up')}>
                            Зарегистрироваться
                        </button>
                    </div>
                    <div className="auth-link">
                        <button type="button"  onClick={() => navigate('/reset-password')}>
                            Забыли пароль?
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
