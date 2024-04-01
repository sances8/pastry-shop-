'use client'

import styles from './Faq.module.css'
import Image from 'next/image'
import {useState} from 'react'


import Expand from '../../../public/expand.svg'

import {faqData} from '../../../data.js'

export const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleToggle = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1); 
        } else {
            setExpandedIndex(index); 
        }
    };

    const isExpanded = (index) => expandedIndex === index;

    return (
        <section className={styles.faq}>
            <div className={styles.wrapper}>
                <h2>Ответы на частые вопросы</h2>
                <div className={styles.faqCards}>
                    {faqData.map((val, index) => (
                        <div className={styles.faqCardWrapper} key={index}>
                            <div className={styles.faqCard} onClick={() => handleToggle(index)}>
                                <span>{val.question}</span>
                                <button>
                                    <Image
                                        src={Expand}
                                        alt="expand"
                                        className={isExpanded(index) ? styles.expanded : ''}
                                    />
                                </button>
                                
                            </div>
                            {isExpanded(index) && (
                                    <div className={styles.answer}>
                                        <p>{val.answer}</p>
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};