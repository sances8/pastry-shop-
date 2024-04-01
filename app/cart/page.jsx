'use client'

import { useSelector, useDispatch } from 'react-redux';
import { increaseItem, decreaseItem } from '../../src/redux/cartSlice'; 
import styles from './page.module.css';
import Image from 'next/image';

import Plus from '../../public/plus.svg';
import Minus from '../../public/minus.svg';

export default function Page() {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleIncreaseItem= (itemId) => {
        dispatch(increaseItem({ id: itemId }));
    };

    const handleDecreaseItem = (itemId) => {
        dispatch(decreaseItem({ id: itemId }));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.counter, 0);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.root}>
                <h1>Корзина</h1>
                <div className={styles.cartItems}>
                    {cartItems.length === 0 ? (
                        <p>Корзина пуста</p>
                    ) : (
                        <>
                            <ul>
                                {cartItems.map(item => (
                                    <li key={item.id}>
                                        <span>{item.name}</span>
                                        <span>{item.price} ₽</span>
                                        <div className={styles.control}>
                                            <button className={styles.btn} onClick={() => handleDecreaseItem(item.id)}><Image src={Minus} alt="minus"/></button>
                                            <button className={styles.btn} onClick={() => handleIncreaseItem(item.id)}><Image src={Plus} alt="plus"/></button>
                                            <span>{item.counter}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.totalPrice}>
                                <p>Итого: {getTotalPrice()} ₽</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
