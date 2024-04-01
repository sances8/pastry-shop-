import React from 'react';
import styles from './Tag.module.css';

export const Tag = ({text, onClick, isActive}) => {
    const handleClick = () => {
        onClick(text);
    };

    return (
        <div
            className={`${styles.root} ${isActive ? styles.active : ''}`}
            onClick={handleClick}
        >
            {text}
        </div>
    );
};