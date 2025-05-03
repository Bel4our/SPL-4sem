import React from 'react';
import Counter from './components/Counter';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Counter/>
    </div>
  )
}