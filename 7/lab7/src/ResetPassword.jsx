import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm = () => {
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [mailDirty, setMailDirty] = useState(false);
    const [mailError, setMailError] = useState('Email не может быть пустым');
    const [isFormValid, setFormValid] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (mailError || !mail.trim() ) 
        {
            setFormValid(false);
        } 
        else 
        {
            setFormValid(true);
        }
    }, [mailError, mail]);

    const mailHandler = (e) => {
        const value = e.target.value;
        setMail(value);
        setSuccessMessage('');
        
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
            setMailError('Некорректный email');
            return;
        }
        
        setMailError('');
    };

    const blurHandler = (e) => {
        setMailDirty(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isFormValid) 
        {
            const newPassword = generateRandomPassword();
            setSuccessMessage(`Новый пароль отправлен на ${mail}. Ваш временный пароль: ${newPassword}`);
            setMail('');
            setMailDirty(false);
        }
    };

    const generateRandomPassword = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 10; i++) 
        {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    return (
        <div className="authForm">
            <form onSubmit={handleSubmit}>
                <h1>Восстановление пароля</h1>
                
                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}
                
                {(mailDirty && mailError) && <div className="error-message">{mailError}</div>}
                <input 
                    onChange={mailHandler} 
                    value={mail} 
                    onBlur={blurHandler} 
                    name="email" 
                    type="text" 
                    placeholder="Введите ваш email"
                />
                
                <button disabled={!isFormValid} type="submit">
                    Восстановить пароль
                </button>
                
                <div className="auth-links">
                    <div className="auth-link">
                        Вспомнили пароль?
                        <button 
                            type="button" 
                            onClick={() => navigate('/sign-in')}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ResetPasswordForm;
