'use client'

import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import styles from './CardFood.module.css';

import Image from 'next/image';
import {SuccessAlert} from '../SuccessAlert/SuccessAlert';

import Napaleon from '../../../public/foods/Напалеон.png';
import Pancakes from '../../../public/pancakes.png';
import Maffin from '../../../public/foods/мафины.webp';
import Pechen from '../../../public/foods/печенье.webp';
import Chizkek from '../../../public/foods/чизкейк.webp';
import Rafalo from '../../../public/foods/рафаэло.webp';
import Medovik from '../../../public/foods/медовик.webp';
import Red from '../../../public/foods/красный.webp';
import Tiramisu from '../../../public/foods/тирамису.webp';

export const CardFood = ({ food, setActive }) => {
    const [showAlert, setShowAlert] = useState(false);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addItem(food));
        setShowAlert(true);
    };

    return (
        <>
            <div className={styles.root}>
                <Image width={222} hight={195} onClick={() => {setActive(food.id)}} className={styles.image} src={
                    (food.img === 'Napaleon' && Napaleon) ||
                    (food.img === 'Pancakes' && Pancakes) ||
                    (food.img === 'Maffin' && Maffin) ||
                    (food.img === 'Pechen' && Pechen) ||
                    (food.img === 'Chizkek' && Chizkek) ||
                    (food.img === 'Rafalo' && Rafalo) ||
                    (food.img === 'Medovik' && Medovik) ||
                    (food.img === 'Red' && Red) ||
                    (food.img === 'Tiramisu' && Tiramisu)
                } alt="Pancakes"/>
                <p className={styles.text}>{food.name}</p>
                <div className={styles.block}>
                    <span className={styles.price}>{food.price} ₽</span>
                    <button className={styles.btn} onClick={handleClick}>В корзину</button>
                </div>
            </div>
            {showAlert && <SuccessAlert setVisibleOff={setShowAlert} message="Товар добавлен" />}
        </>
    );
};
