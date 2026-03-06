'use client'

import styles from './button.module.css';

export default function Button({ onClick, type, caption }) {
    return (
        <button onClick={() => onClick(caption)} className={styles.button} type={type}>{caption}</button>
    );
}