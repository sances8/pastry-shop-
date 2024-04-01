import styles from './Footer.module.css'

export const Footer = () => {
    return (
    <footer className={styles.footer}>
        <div className={styles.wrapper}>
        <div className={styles.footerWrapper}>
            <div className={styles.footerMenu}>
                <div className={styles.footerMenuBlock}>
                    <span>Меню</span>
                    <ul>
                        <li>Доставка еды</li>
                        <li>Торты на заказ</li>
                        <li>Фуршетное меню</li>
                    </ul>
                </div>
                <div className={styles.footerMenuBlock}>
                    <span>Покупателю</span>
                    <ul>
                        <li>Как оформить заказ</li>
                        <li>Как заказать торт</li>
                        <li>Оплата и доставка</li>
                        <li>Бонусная программа</li>
                        <li>Акции</li>
                    </ul>
                </div>
                <div className={styles.footerMenuBlock}>
                    <span>Компания</span>
                    <ul>
                        <li>О нас</li>
                        <li>Отзывы</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerContacts}>
                <span className={styles.footerContactsTitle}>Контакты</span>
                <span>+7 (473) 251-45-93</span>
            </div>
        </div>
        <div className={styles.footerBottom}>
            <span>© ИП Азовцева Александра Владимировна. Все права защищены.</span>
            <span>Политика конфиденциальности</span>
        </div>
        </div>
    </footer>
    )    
}