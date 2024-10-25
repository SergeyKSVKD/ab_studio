'use client'

import React, { cloneElement, useEffect, useState } from "react"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import styles from './carousel.module.scss'
import { motion, useMotionValue } from "framer-motion"

type CardsType = React.JSX.Element[]
export type ColumnType = 1 | 2 | 3 | 4
type SwitchingType = boolean
type DelayType = number

interface CarouselI {
    cards?: CardsType,
    transition?: number,
    columns?: ColumnType,
    switching?: SwitchingType,
    id?: string,
    delay?: DelayType,
    gap?: number,
    infinite?: boolean,
}

const Carousel = ({
    cards = [],
    transition = 100,
    columns = 1,
    switching = false,
    delay = 0,
    gap = 0,
    infinite = false,
    id = '',
}: CarouselI) => {
    const dragX = useMotionValue(0);

    const [imageIndex, setImageIndex] = useState<number>(0)
    const [count, setCount] = useState(cards.length)
    const [width, setWidth] = useState<number>(100)
    const [content, setContent] = useState<any>([])
    const [transitionCard, setTransitionCard] = useState<number>(transition)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    useEffect(() => {
        switch (columns) {
            case 1:
                setWidth(100)
                break;

            case 2:
                setWidth(50)
                break;

            case 3:
                setWidth(33.3333333333333333)
                break;

            case 4:
                setWidth(25)
                break;

            default:
                break;
        }
    }, [columns])

    useEffect(() => {
        if (switching) {
            let timerId = setTimeout(() => {
                document.getElementById(`${id}`)?.click();
            }, delay)

            return () => {
                clearTimeout(timerId)
            }
        }
    }, [imageIndex])

    function showPrev() {
        if (!isDisabled) {
            setImageIndex(index => {

                if (index === 0) return count - columns
                return index - 1
            })
            setIsDisabled(true)
        }
    }
    function showNext() {
        if (!isDisabled) {
            setImageIndex(index => {

                if (index === count - columns) return 0
                return index + 1
            })
            setIsDisabled(true)
        }
    }

    const onDragEnd = () => {
        const x = dragX.get()
        const offset = 20

        if (x <= -offset) {
            showNext()
        } else if (x >= offset) {
            showPrev()
        }
    }

    useEffect(() => {
        if (infinite) {
            setContent([
                cloneElement(cards[count - 1]),
                ...cards,
                cloneElement(cards[0]),
            ])
            setCount(count + 2)
            setImageIndex(1)
        }
        else setContent(cards)
    }, [infinite])

    useEffect(() => {

        if (!infinite) return

        if (content.length !== 0 && imageIndex === 0) {
            setTimeout(() => {
                setTransitionCard(0)
                setImageIndex(count - 2)
            }, transitionCard)
        }

        if (content.length !== 0 && imageIndex === count - 1) {
            setTimeout(() => {
                setTransitionCard(0)
                setImageIndex(1)
            }, transitionCard)
        }

    }, [infinite, imageIndex])

    useEffect(() => {

        if (transitionCard === 0) {
            setTimeout(() => {
                setTransitionCard(transition)
            }, transitionCard)
        }
    }, [transitionCard])

    useEffect(() => {
        if (isDisabled) {
            setTimeout(() => {
                setIsDisabled(false)
            }, transitionCard)
        }
    }, [isDisabled])

    return <div className={styles.wrapper}>
        <div className={styles.carousel_container} style={{
            width: `calc(${count} * ${width}%)`,
            gap: `${gap}px`
        }}>
            {content && content.map((item: any, index: any) => {

                return <motion.div key={index}
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{
                        x: dragX,
                    }}
                    animate={{
                        translateX: `-${imageIndex * 100}%`,
                    }}
                    transition={{
                        duration: transitionCard / 1000,
                        easy: 'ease-in-out',
                        type: "tween",
                    }}
                    onDragEnd={onDragEnd}
                    onMouseDown={onDragEnd}
                >{item}</motion.div>
            })}
        </div>
        <div onClick={showPrev} className={styles.back}><MdArrowBackIos className={styles.svg} /></div>
        <div onClick={showNext} id={id} className={styles.forward}><MdArrowForwardIos className={styles.svg} /></div>
    </div>
}

export default Carousel