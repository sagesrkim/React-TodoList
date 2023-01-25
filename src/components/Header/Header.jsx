import React from 'react';
import styles from './Header.module.css';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header({ filters, filter, onFilterChange }) {
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <header className={styles.header}>
            <h1>To Do List</h1>
            <ul className={styles.filters}>
                {filters.map((value, index) => (
                    <li key={index} >
                        <button className={`${styles.filter} ${filter === value && styles.selected}`} 
                        onClick={() => onFilterChange(value)}>{value}</button>
                    </li>))}
            </ul>

            <button className={styles.toggle} onClick={() => toggleDarkMode()}>
                {!darkMode ? <BsMoonFill /> : <BsSunFill /> }
            </button>

        </header>
    );
}

