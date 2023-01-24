import React from 'react';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
    return (
        <header className={styles.header}>
            <h2>To Do List</h2>
            <ul className={styles.filters}>
                {filters.map((value, index) => (
                    <li key={index} >
                        <button className={`${styles.filter} ${filter === value && styles.selected}`} 
                        onClick={() => onFilterChange(value)}>{value}</button>
                    </li>))}
            </ul>
        </header>
    );
}

