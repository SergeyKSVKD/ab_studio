'use client'

import { useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, motion, wrap, useInView } from 'framer-motion';
import styles from './advantages.module.scss'
import { useRef } from 'react';

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 0], [0, 5], {
        clamp: false
    })

    const x = useTransform(baseX, (v) => `${wrap(-5, 0, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 10000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    })

    return (
        <div className={styles.parallax}>
            <motion.div className={styles.scroller} style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}

const Advantages = () => {
    // const container = useRef<HTMLDivElement>(null)
    // const isInView = useInView(container, { once: false })

    // return <div ref={container} className={styles.container}>
    return <div className={styles.container}>
        {/* {isInView && <> */}
            <ParallaxText baseVelocity={-1}>Экспертные исполнители</ParallaxText>
            <ParallaxText baseVelocity={1}>Прогрессивный подход</ParallaxText>
            <ParallaxText baseVelocity={-1}>Современные технологии</ParallaxText>
            <ParallaxText baseVelocity={1}>Гарантия качества</ParallaxText>
            <ParallaxText baseVelocity={-1}>Топовый инструмент</ParallaxText>
        {/* </>
        } */}
    </div>
}

export default Advantages