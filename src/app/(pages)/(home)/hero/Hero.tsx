'use client'

import Image from 'next/image'
import styles from './hero.module.scss'
import HeroImg from '../../../../../public/hero.webp'
import { useQuery } from '@/app/helpers/useQuery'

const Hero = () => {
    const size = useQuery(`(max-width: 540px)`)

    return <section className={styles.container}>
        <Image
            src={HeroImg}
            alt='hero'
            quality={75}
            priority
            fill
            width={0}
            height={0}
            style={{
                pointerEvents: 'none',
                objectFit: 'cover',
                objectPosition: 'center center',
                filter: 'brightness(0.5)'
            }}
            draggable="true"
            unoptimized
        />
        <div className={styles.text_container}>
            <h1 className={styles.title}><span className={styles.brand}>AB Studio</span>{<pre></pre>} Студия ремонта и дизайна</h1>
            <h4 className={styles.subtitle}>AB studio-студия прогрессивного ремонта полного цикла. Всё от проекта до мебели. Умный дом. Договор. Гарантия</h4>
        </div>
    </section>
}

export default Hero