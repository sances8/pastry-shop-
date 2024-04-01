'use client'

import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

import logo from '../../../public/logo.svg'
import cart from '../../../public/cart.svg'
import profile from '../../../public/profile.svg'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Image src={logo} alt="logo"/>
                    <h1><Link href={'/'}>Десертная Сказка</Link></h1>
                </div>
                <nav className={`${styles.navbar} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <ul>
                        <li><Link href={'/catalog'}>Готовые десерты</Link></li>
                        <li><Link href={'/about'}>Подробнее о нас</Link></li>
                        <li><Link href={'/contacts'}>Контакты</Link></li>
                    </ul>
                    <div className={styles.personal}>
                            <Link href={'/cart'}><button className={styles.btn}><Image src={cart} alt="cart" /></button></Link>
                            <button className={styles.btn}><Image src={profile} alt="profile" /></button>
                    </div>
                </nav>
                <button className={`${styles.burgerMenu} ${isMenuOpen ? styles.opened : ''}`} onClick={toggleMenu}>
                    <div className={`${styles.burgerLine} ${styles.line1} `}></div>
                    <div className={`${styles.burgerLine} ${styles.line2} `}></div>
                    <div className={`${styles.burgerLine} ${styles.line3} `}></div>
                </button>
            </div>
            </header>
    )
}