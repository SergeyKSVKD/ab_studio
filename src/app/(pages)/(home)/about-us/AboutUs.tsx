import Image from 'next/image'
import styles from './aboutUs.module.scss'
import cn from 'classnames'
import AboutUsImg from '../../../../../public/about-us.webp'
import { FaTelegramPlane } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import Link from 'next/link';
import { ForwardedRef, forwardRef } from 'react';

const AboutUs = forwardRef(function Contacts(props, ref: ForwardedRef<HTMLDivElement>) {

    return <section className={styles.container}>
        <div ref={ref} className={styles.ref_block} />
        <h2 className={styles.brand}>Design Studio since</h2>
        <div className={styles.text}>
            <p>Команда <span className={styles.text_color}>профессионалов</span> с новейшим техническим оборудованием выполнит ремонт <span className={styles.text_color}>любой сложности</span> в точные сроки. Вы получите <span className={styles.text_color}>прозрачность</span> расходов, обоснованное ценообразование, взаимопонимание и превосходный результат.</p>
            <p>Используем современные технологии согласно лучшим <span className={styles.text_color}>строительным практикам.</span></p>
            <p>Гарантия на работы. Поэтапная оплата. Фиксированная стоимость. Работаем по договору.</p>
            <p>Подписывайся на <span className={styles.text_color}>наши каналы</span> и следи за ходом работ:</p>
            <br />
            <Link className={cn(styles.link, styles.text_color)} href='https://t.me/xxx'><FaTelegramPlane /> https://t.me/xxx</Link>
            <Link className={cn(styles.link, styles.text_color)} href='https://youtube.com/@xxxxxxx'><TfiYoutube /> https://youtube.com/@xxxxxxx</Link>
        </div>
        <div className={styles.image_container}>
            <Image
                src={AboutUsImg}
                alt='о-нас'
                quality={50}
                priority
                fill
                width={0}
                height={0}
                style={{
                    pointerEvents: 'none',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                }}
                draggable="true"
                unoptimized
            />
        </div>
    </section>
})

export default AboutUs