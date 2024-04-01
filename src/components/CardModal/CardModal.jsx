'use client'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import styles from './CardModal.module.css'
import { createPortal } from "react-dom"
import Image from 'next/image'
import CartMini from '../../../public/cart-mini.svg'
import { SuccessAlert } from '../SuccessAlert/SuccessAlert';
import Expand from '../../../public/expand.svg';


import Napaleon from '../../../public/foods/Напалеон.png';
import Pancakes from '../../../public/pancakes.png';
import Maffin from '../../../public/foods/мафины.webp';
import Pechen from '../../../public/foods/печенье.webp';
import Chizkek from '../../../public/foods/чизкейк.webp';
import Rafalo from '../../../public/foods/рафаэло.webp';
import Medovik from '../../../public/foods/медовик.webp';
import Red from '../../../public/foods/красный.webp';
import Tiramisu from '../../../public/foods/тирамису.webp';

export const CardModal = ({ food, active, setActive }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [expanded, setExpanded] = useState(false); 
    
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addItem(food));
        setShowAlert(true);
    };

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {active !== 0 && createPortal(
                <div className={styles.root} onClick={() => setActive(0)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <Image src={
                    (food.img === 'Napaleon' && Napaleon) ||
                    (food.img === 'Pancakes' && Pancakes) ||
                    (food.img === 'Maffin' && Maffin) ||
                    (food.img === 'Pechen' && Pechen) ||
                    (food.img === 'Chizkek' && Chizkek) ||
                    (food.img === 'Rafalo' && Rafalo) ||
                    (food.img === 'Medovik' && Medovik) ||
                    (food.img === 'Red' && Red) ||
                    (food.img === 'Tiramisu' && Tiramisu)
                } alt="Pancakes" width={222} hight={300} />
                        <div className={styles.description}>
                            <span className={styles.title}>{food.name}</span>
                            <div className={styles.compound}>
                                {food.composition}
                            </div>
                            <div className={styles.addition} onClick={handleToggleExpand}>
                                <div className={styles.additionWrapper}>
                                    <span>Доп. информация</span>
                                    <button>
                                        <Image
                                            src={Expand}
                                            alt='expand'
                                            className={expanded ? styles.expanded : ''}
                                        />
                                    </button>
                                </div>
                                {expanded && (
                                <div className={styles.additionInfo}>
                                    <span>Срок хранения: {food.storagePeriod}</span>
                                    <span>Условия хранения: {food.storageConditions}</span>
                                    <span>Пищевая ценность: {food.nutritionalValue}</span>
                                </div>
                                )}
                            </div>
                            <div className={styles.block}>
                                <span className={styles.price}>{food.price} ₽</span>
                                <button onClick={handleClick} className={styles.btn}><Image src={CartMini} alt='CartMini' />Добавить</button>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
            {showAlert && <SuccessAlert setVisibleOff={setShowAlert} message="Товар добавлен" />}
        </>
    )
}
