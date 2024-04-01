'use client'

import React, { useState } from 'react';
import styles from './page.module.css';
import { Tag } from '../../src/components/Tag/Tag';
import { CardFood } from '../../src/components/CardFood/CardFood';
import { CardModal } from '../../src/components/CardModal/CardModal';

import { foodsData } from '../../data.js';

export default function Page() {
    const [activeFood, setActiveFood] = useState(0);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const foodModal = (activeFood != 0 && foodsData.length !=0)  ? foodsData.filter((food) => food.id == activeFood)[0] : null;
   
    const openModal = () => {
        setActive(true);
    };

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };
    
    const categories = [...new Set(foodsData.map((food) => food.category))];

    const foodsObject = {}

    for (let food of foodsData) {
        if (!foodsObject[food.category]) {
            foodsObject[food.category] = []
        }
        foodsObject[food.category].push(food)
    }

    return (
        <div className={styles.root}>
            <CardModal food={foodModal} active={activeFood} setActive={setActiveFood} />
            <div className={styles.body}>
                {
                    foodsData.length != 0 ? <>
                    <div className={styles.menu}>
                        {categories.map((category, index) => (
                            <Tag
                                key={index}
                                text={category}
                                onClick={toggleCategory}
                                isActive={selectedCategories.includes(category)}
                            />
                        ))}
                    </div>
                    <div className={styles.content}>
                        {selectedCategories.length === 0 && (
                            <>
                            {categories.map((category) => (
                            <div key={category} className={styles.foodBlock}>
                                <h2 className={styles.foodBlockTitle}>{category}</h2>
                                <div className={styles.foodBlockWrapper}>
                                    {foodsObject[category].map((food, index) => (
                                        <CardFood setActive={setActiveFood} key={index} id={index} food={food} onClick={openModal} />
                                    ))}
                                </div>
                            </div>
                        ))}
                            </>
                        )}
                        {selectedCategories.map((category) => (
                            <div key={category} className={styles.foodBlock}>
                                <h2 className={styles.foodBlockTitle}>{category}</h2>
                                <div className={styles.foodBlockWrapper}>
                                    {foodsObject[category].map((food, index) => (
                                        <CardFood setActive={setActiveFood} key={index} id={index} food={food} onClick={openModal} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    </> : <h2>Товаров нет</h2>
                }
            </div>
        </div>
    );
}