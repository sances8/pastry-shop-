'use client'

import { useState } from 'react';
import styles from './FeedBack.module.css';
import Image from 'next/image';
import Quotes from '../../../public/quotes.svg';
import Telegram from '../../../public/telegram.svg';
import Instagram from '../../../public/instagram.svg';

import { feedbackData } from '../../../data.js';


export const FeedBack = () => {
    const [visibleCards, setVisibleCards] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextSlide = () => {
        if (currentIndex < feedbackData.length - visibleCards) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <section className={styles.feedback}>
            <div className={styles.wrapper}>
                <h2>Отзывы наших клиентов</h2>
                <div className={styles.feedbackSlider}>
                    {feedbackData.slice(currentIndex, currentIndex + visibleCards).map((slide, index) => (
                        <div key={index} className={styles.feedbackCard}>
                            <div className={styles.feedbackCardTop}>
                                <div className={styles.feedbackCardTopImg}>
                                    <Image src={Quotes} alt="quotes" />
                                </div>
                                <span>{slide.name}</span>
                            </div>
                            <p>{slide.comment}</p>
                            <div className={styles.feedbackImgs}>
                                <button>
                                    <Image src={Telegram} alt="telegram" />
                                </button>
                                <button>
                                    <Image src={Instagram} alt="instagram" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {currentIndex > 0 && (
                    <button className={styles.prevButton} onClick={handlePrevSlide}>
                        &lt;
                    </button>
                )}
                {currentIndex < feedbackData.length - visibleCards && (
                    <button className={styles.nextButton} onClick={handleNextSlide}>
                        &gt;
                    </button>
                )}
            </div>
        </section>
    );
};

