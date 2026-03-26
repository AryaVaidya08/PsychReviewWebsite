'use client';

import { useState, useEffect } from 'react';
import styles from './ScrollArrow.module.css';

export default function ScrollArrow() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`${styles.arrow} ${visible ? styles.visible : styles.hidden}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4v20M5 15l9 9 9-9" stroke="rgba(245,244,240,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
