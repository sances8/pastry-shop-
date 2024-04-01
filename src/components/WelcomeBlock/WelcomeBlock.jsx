import styles from './WelcomeBlock.module.css'
import Image from 'next/image'
import Link from 'next/link'

import BtnArrow from '../../../public/btn-arrow.svg'
import Cackes from '../../../public/cackes.png'
import Cake from '../../../public/cake.png' 
import Cheesecake from '../../../public/Cheesecake.png'
import Muffin from '../../../public/muffin.svg'
import BirthdayCake from '../../../public/birthdayCake.svg'

export const WelcomeBlock = () => {
    return (
        <section className={styles.welcomeBlock}>
            <div className={styles.wrapper}>
        <div className={styles.promoBlock}>
            <div className={styles.quickButton}>
                <div className={styles.quickButtonLeft}>
                    <span>Кексы</span>
                    <button>
                        <Link href="/catalog"><Image src={BtnArrow} alt="btn-arrow"/></Link>
                    </button>
                </div>
                <div className={styles.quickButtonRight}>
                    <Image className={styles.quickButtonImg} src={Cackes} alt="cackes"/>
                </div>
            </div>
            <div className={styles.promoBlockRight}>
                <div className={styles.quickButtonGorizontal}>
                    <div className={styles.quickButtonGorizontalText}>
                        <span>Торты</span>
                        <button>
                            <Link href="/catalog"><Image src={BtnArrow} alt="btn-arrow"/></Link>
                        </button>
                    </div>
                    <Image src={Cake} alt="cake"/>
                </div>
                <div className={styles.quickButtonGorizontal}>
                    <div className={styles.quickButtonGorizontalText}>
                        <span>Чизкейки</span>
                        <button>
                            <Link href="/catalog"><Image src={BtnArrow} alt="btn-arrow"/></Link>
                        </button>
                    </div>
                    <Image src={Cheesecake} alt="cake"/>
                </div>
            </div>
        </div>
        <div className={styles.welcomeDescription}>
            <div className={styles.welcomeDescriptionText}>
                <span className={styles.welcomeDescriptionTop}>Добро пожаловать</span>
                <div className={styles.welcomeDescriptionBody}>
                    <span>В нашую уютную</span>
                    <br/>
                    <div className={styles.welcomeDescriptionBodySecond}>
                        <Image src={Muffin} alt="muffin"/>
                        <span>кондитерскую</span>
                    </div>
                </div>
                <span className={styles.welcomeDescriptionBottom}>Готовим с любовью и душой</span>
            </div>
            <div >
                <Image src={BirthdayCake} alt="birthdayCake"/>
            </div>
        </div>
        </div>
    </section>
    )
}