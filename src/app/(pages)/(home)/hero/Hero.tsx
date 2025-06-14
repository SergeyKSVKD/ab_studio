'use client'

import Image from 'next/image'
import styles from './hero.module.scss'
import HeroImg from '../../../../../public/hero.webp'
import { motion } from 'framer-motion'

const Hero = () => {

    return <section className={styles.container}>
        <Image
            src={HeroImg}
            alt='hero'
            quality={50}
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
            <motion.h1 className={styles.title}
                initial={{
                    opacity: 0,
                    y: -100,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    type: "spring", 
                    stiffness: 100,
                    duration: 0.6,
                    delay: 0.5,
                }}
            ><span className={styles.brand}>Design Studio</span>{<pre></pre>} Студия ремонта и дизайна</motion.h1>
            <motion.h4 className={styles.subtitle}
                initial={{
                    opacity: 0,
                    y: 100,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    type: "spring", 
                    stiffness: 100,
                    duration: 0.6,
                    delay: 0.5,
                }}
            >Design Studio - студия прогрессивного ремонта полного цикла. Всё от проекта до мебели. Умный дом. Договор. Гарантия</motion.h4>
        </div>
    </section>
}

export default Hero