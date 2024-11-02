'use client'

import styles from './image-slider.module.scss'
import BeforeImage from '../../../../public/before.webp'
import AfterImage from '../../../../public/after.webp'
import Image from 'next/image'
import { TouchEvent, useState } from 'react'

const ImageSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)

    const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDragging) return

        const rect = event.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width))
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

        setSliderPosition(percent)
    }

    const touchMove = (event: TouchEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.touches[0].clientX - rect.left, rect.width))
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

        setSliderPosition(percent)
    }

    const handleDown = () => {
        setIsDragging(true);
    }

    const handleUp = () => {
        setIsDragging(false);
    }

    return <section className={styles.container} onMouseUp={handleUp} >
        <div
            className={styles.image_after_container}
            onMouseMove={handleMove}
            onMouseDown={handleDown}
            onTouchMove={touchMove}
            onTouchStart={touchMove}
        >
            <span className={styles.after}>
                ПОСЛЕ
            </span>
            <Image
                src={AfterImage}
                alt='после'
                fill
                priority
                sizes="100vw"
                quality={75}
                placeholder='blur'
                style={{
                    pointerEvents: 'none',
                }}
                draggable="true"
            />
            <div
                className={styles.image_before_container}
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <span className={styles.before}>
                    ДО
                </span>
                <Image
                    src={BeforeImage}
                    alt='до'
                    fill
                    priority
                    sizes="100vw"
                    quality={75}
                    placeholder='blur'
                    style={{
                        pointerEvents: 'none',
                    }}
                    draggable="true"
                />
            </div>
            <div
                className={styles.slider}
                style={{
                    left: `calc(${sliderPosition}% - 1px)`,
                }}
            >
                <div className={styles.cursor}>
                    <div className={styles.arrow_left} />
                    <div className={styles.arrow_right} />
                </div>
            </div>
        </div>
    </section>
}

export default ImageSlider