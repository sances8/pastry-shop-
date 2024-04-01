import styles from './Advantage.module.css'

export const Advantage = () => {
    return (
        <section className={styles.advantages}>
            <div className={styles.wrapper}>
        <h2>Наши преимущества</h2>
        <div className={styles.advantagesBlocks}>
            <div className={styles.advantageBlock}>
                <div className={styles.advantageBlockTitle}>
                    <span>Дешевые цены</span>
                </div>
                <p>Мы маленькая частная кондитерская на дому, поэтому мы можем позволить себе делать минимальную наценку на продукцию</p>
            </div>
            <div className={styles.advantageBlock}>
                <div className={styles.advantageBlockTitle}>
                    <span>Связь</span>
                </div>
                <p>Мы маленькая частная кондитерская на дому, поэтому мы внимательно относимя к каждому клиенту и на связи 24 / 7</p>
            </div>
            <div className={styles.advantageBlock}>
                <div className={styles.advantageBlockTitle}>
                    <span>Доставка</span>
                </div>
                <p>Доставляем по городу Воронеж беспланто</p>
            </div>
        </div>
        </div>
    </section>   
    )
}