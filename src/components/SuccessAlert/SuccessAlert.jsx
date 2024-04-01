'use client'

import { useState, useEffect } from 'react';
import { createPortal } from "react-dom"
import styles from './SuccessAlert.module.css';

export const SuccessAlert = ({ message, setVisibleOff }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setVisibleOff(false);
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  
  return (
    <>
      {isVisible && (
        createPortal(
          <div className={styles.alert}>
            <p>{message}</p>
          </div>,
          document.body
        )
      )}
    </>
  );
};