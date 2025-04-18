import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function RegistrationForm()
{
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    const [nameError, setNameError] = useState('Поле не может быть пустым');
    const [mailError, setMailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [repeatPasswordError, setRepeatPasswordError] = useState('Повторите пароль');


    const [nameDirty, setNameDirty] = useState(false);
    const [mailDirty, setMailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false);


    const [isFormValid, setFormValid] = useState(false);
    const [allFieldsTouched, setAllFieldsTouched] = useState(false);

    useEffect(() => {
        const fieldsTouched = nameDirty && mailDirty && passwordDirty && repeatPasswordDirty;
        setAllFieldsTouched(fieldsTouched);
    
        const isValid = !nameError && !mailError && !passwordError && !repeatPasswordError && name && mail && password && repeatPassword;
        
        setFormValid(isValid);
    }, [nameError, mailError, passwordError, repeatPasswordError, name, mail, password, repeatPassword, nameDirty, mailDirty, passwordDirty, repeatPasswordDirty]);


    const nameHadler = (e) =>{
        const value = e.target.value;
        setName(value);
        if(!value.trim())
        {
            setNameError("Поле не может быть пустым");
            return;
        }

        if(value.length < 2)
        {
            setNameError("Имя не может быть меньше 2 букв");
            return;
        }

        if(value.length > 50)
            {
                setNameError("Имя не может быть больше 50 букв");
                return;
            }

        if(!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(value))
        {
            setNameError("Введены недопустимые символы!");
            return;
        }
        setNameError('');
    }

    const mailHandler = (e) => {
        const value = e.target.value;
        setMail(value);
        
        if (!value.trim()) 
        {
            setMailError('Email не может быть пустым');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toLowerCase())) 
        {
            setMailError('Некорректный email');
            return;
        }

        if (/\s/.test(value)) 
        {
            setMailError('Email не должен содержать пробелы');
            return;
        }
        
        setMailError('');
    };

    const passwordHandler = (e) => 
        {
        const value = e.target.value;
        setPassword(value);
        
        if (!value) 
        {
            setPasswordError('Пароль не может быть пустым');
            return;
        }
        
        if (/\s/.test(value)) 
        {
            setPasswordError('Пароль не должен содержать пробелы');
            return;
        }
        
        if (value.length < 8) 
        {
            setPasswordError('Пароль должен быть длиннее 8 символов');
            return;
        }

        if (value.length > 20) 
        {
            setPasswordError('Пароль должен быть менее 20 символов');
            return;
        }
        
        if (!/[A-ZА-ЯЁ]/.test(value)) 
        {
            setPasswordError('Пароль должен содержать хотя бы одну заглавную букву');
            return;
        }
        
        if (!/[a-zа-яё]/.test(value)) 
        {
            setPasswordError('Пароль должен содержать хотя бы одну строчную букву');
            return;
        }
        
        if (!/[0-9]/.test(value)) 
        {
            setPasswordError('Пароль должен содержать хотя бы одну цифру');
            return;
        }
        
        setPasswordError('');
        
        if (repeatPassword && value !== repeatPassword) 
        {
            setRepeatPasswordError('Пароли не совпадают');
        } 
        else 
        {
            setRepeatPasswordError('');
        }
    };

    const repeatPasswordHandler = (e) => {
        const value = e.target.value;
        setRepeatPassword(value);
        
        if (!value) 
        {
            setRepeatPasswordError('Подтвердите пароль');
            return;
        }
        
        if (value !== password) 
        {
            setRepeatPasswordError('Пароли не совпадают');
            return;
        }
        
        setRepeatPasswordError('');
    };

    const blurHandler = (e) => {
        switch (e.target.name) 
        {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setMailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            case 'repeatPassword':
                setRepeatPasswordDirty(true);
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!allFieldsTouched) 
        {
            setNameDirty(true);
            setMailDirty(true);
            setPasswordDirty(true);
            setRepeatPasswordDirty(true);
            return;
        }

        if (isFormValid) 
        {
            alert('Регистрация прошла успешно!');
            setName('');
            setMail('');
            setPassword('');
            setRepeatPassword('');

            setNameDirty(false);
            setMailDirty(false);
            setPasswordDirty(false);
            setRepeatPasswordDirty(false);
        }
    };



    return (
        <div className="registrationForm">
            <form onSubmit={handleSubmit}>
                <h1>Регистрация</h1>
                
                <input 
                    name="name"
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={nameHadler}
                    onBlur={blurHandler}
                    className={nameDirty && nameError ? "error" : ""}
                />
                {nameDirty && nameError && <div className="error-message">{nameError}</div>}
                
                <input 
                    name="email"
                    placeholder="Введите ваш email"
                    value={mail}
                    onChange={mailHandler}
                    onBlur={blurHandler}
                    className={mailDirty && mailError ? "error" : ""}
                />
                {mailDirty && mailError && <div className="error-message">{mailError}</div>}
                
                <input 
                    name="password"
                    type="password"
                    placeholder="Введите ваш пароль"
                    value={password}
                    onChange={passwordHandler}
                    onBlur={blurHandler}
                    className={passwordDirty && passwordError ? "error" : ""}
                />
                {passwordDirty && passwordError && <div className="error-message">{passwordError}</div>}
                
                <input 
                    name="repeatPassword"
                    type="password"
                    placeholder="Повторите ваш пароль"
                    value={repeatPassword}
                    onChange={repeatPasswordHandler}
                    onBlur={blurHandler}
                    className={repeatPasswordDirty && repeatPasswordError ? "error" : ""}
                />
                {repeatPasswordDirty && repeatPasswordError && <div className="error-message">{repeatPasswordError}</div>}
                
                <button type="submit" disabled={!isFormValid}>
                    Зарегистрироваться
                </button>
                
                <div className="auth-link">
                    Есть аккаунт?
                    <button type="button" onClick={() => navigate('/sign-in')}>
                        Войти
                    </button>
                </div>
            </form>
        </div>
    )

}

export default RegistrationForm;