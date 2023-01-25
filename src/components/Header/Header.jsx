import React from 'react';
import styles from './Header.module.css';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header({ filters, filter, onFilterChange }) {
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <>
        <header className={styles.header}>
            <button className={styles.toggle} onClick={()  => toggleDarkMode()}>
                {!darkMode ? <BsMoonFill /> : <BsSunFill /> }
            </button>
            <div className={styles.navbar}>
                <h2>To Do List</h2>
                <ul className={styles.filters}>
                {filters.map((value, index) => (
                    <li key={index} >
                        <button className={`${styles.filter} ${filter === value && styles.selected}`} 
                        onClick={() => onFilterChange(value)}>{value}</button>
                    </li>))}
                </ul>  
            </div>
        </header>
        </>
    );
}

