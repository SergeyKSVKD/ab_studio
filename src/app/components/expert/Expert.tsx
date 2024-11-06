'use client'

import { AnimatePresence, motion, useInView } from 'framer-motion'
import AnimatedCounter from '../animated-counters/AnimatedCounter'
import styles from './expert.module.scss'
import { useRef } from 'react'
import Image from 'next/image'
import ExpertImg from '../../../../public/expert.webp'

const Expert = () => {
    const container = useRef<HTMLDivElement>(null)
    const isInView = useInView(container, { once: true })
    const transition = {
        type: "spring",
        stiffness: 150,
        damping: 20,
    }

    return <div className={styles.container}>
            <div className={styles.title_container}>
                <h2 className={styles.title}>Эксперт</h2>
                <h2 className={styles.expert}>Иванов Иван</h2>
            </div>
            <div ref={container} className={styles.info}>
                {isInView &&
                    <ul>
                        <AnimatePresence>
                            <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    ...transition,
                                    delay: 0
                                }} key={1}
                            >
                                {<span>Основатель студии <span className={styles.text_color}>премиум класса</span> Design studio</span>}
                            </motion.li>
                            <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    ...transition,
                                    delay: 0.75
                                }} key={2}
                            ><span>Отделочник со стажем <span className={styles.text_color}>{<AnimatedCounter from={1} to={20} durations={0.5} delay={0.6} />}+</span> лет</span>
                            </motion.li>
                            <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    ...transition,
                                    delay: 1.5
                                }} key={3}
                            ><span>Сдано квадратных метров <span className={styles.text_color}>{<AnimatedCounter from={1} to={50000} durations={0.5} delay={1.35} />}+</span></span>
                            </motion.li>
                            <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    ...transition,
                                    delay: 2.25
                                }} key={4}
                            ><span>Принято от застройщика квартир <span className={styles.text_color}>{<AnimatedCounter from={1} to={2300} durations={0.5} delay={2.1} />}+</span></span>
                            </motion.li>
                            <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    ...transition,
                                    delay: 3
                                }} key={5}
                            ><span>Просмотров на <span className={styles.text_color}>YouTube</span> канале <span className={styles.text_color}>{<AnimatedCounter from={0.01} to={10.91} durations={0.5} delay={2.85} fixed={2} />} млн+</span></span>
                            </motion.li>
                        </AnimatePresence>
                    </ul>}
            </div>
        <div className={styles.image_container}>
            <Image
                src={ExpertImg}
                alt='о-нас'
                quality={100}
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
    </div>
}

export default Expert