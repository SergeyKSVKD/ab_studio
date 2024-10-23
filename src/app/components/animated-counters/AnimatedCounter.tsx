'use client'

import { animate, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import React, {  useRef } from "react";

type AnimatedCounterProps = {
    from: number,
    to: number,
    animationOptions?: KeyframeOptions,
    durations?: number,
    fixed?: number,
    delay?: number
}

const AnimatedCounter = ({ from, to, animationOptions, durations = 2, delay = 0, fixed = 0 }: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, {
        once: true
    })

    useIsomorphicLayoutEffect(() => {
        const element = ref.current

        if (!element) return
        if (!inView) return

        element.textContent = String(from)

        const controls = animate(from, to, {
            duration: durations,
            delay: delay,
            ease: 'easeOut',
            ...animationOptions,
            onUpdate(value) {
                element.textContent = String(value.toFixed(fixed))
            }
        })

        return () => {
            controls.stop()
        }
    }, [ref, from, to, inView])

    return <span ref={ref}></span>
}

export default AnimatedCounter