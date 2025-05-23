import { useState } from "react";
import { AppDispatch } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { TodoListState, Todos } from "../Redux/type";
import { add_todo, toggle_todo, delete_todo, edit_todo } from "../Redux/action";
import Button from "./Button";
import styles from '../App.module.css';

export default function Todo() {
    const [inputText, setInputText] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const dispatch: AppDispatch = useDispatch();
    const todosList = useSelector((state: TodoListState) => state);

    const handleSubmit = () => {
        const trimmedText = inputText.trim();
        if (!trimmedText) return;

        if (editingId !== null) {
            dispatch(edit_todo({id: editingId, text:trimmedText}));
            setEditingId(null);
        } else {
            dispatch(add_todo(trimmedText));
        }
        setInputText("");
    };

    const handleEdit = (todo: Todos) => {
        setInputText(todo.text);
        setEditingId(todo.id);
    };

    const handleCancel = () => {
        setEditingId(null);
        setInputText("");
    };

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Введите задачу"
                    className={styles.input}
                />
                <Button
                    text={editingId ? "Сохранить" : "Добавить"}
                    callback={handleSubmit}
                />
                {editingId && (
                    <Button text="Отмена" callback={handleCancel} />
                )}
            </div>

            <ul className={styles.list}>
                {todosList.map((todo) => (
                    <li key={todo.id} className={styles.item}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggle_todo(todo.id))}
                            className={styles.checkbox}
                        />
                        <span
                            className={`${styles.text} ${todo.completed ? styles.completed : ''}`}
                        >
                            {todo.text}
                        </span>
                        <div className={styles.actions}>
                            <Button
                                text="Редактировать"
                                callback={() => handleEdit(todo)}
                            />
                            <Button
                                text="Удалить"
                                callback={() => dispatch(delete_todo(todo.id))}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}