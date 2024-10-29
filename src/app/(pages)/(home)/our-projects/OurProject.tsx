'use client'

import Carousel from '@/app/components/carousel/Carousel'
import styles from './our-project.module.scss'
import Image from 'next/image'
import React, { ForwardedRef, forwardRef, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Img11 from '../../../../../public/1_1.webp'
import Img12 from '../../../../../public/1_2.webp'
import Img13 from '../../../../../public/1_3.webp'
import Img14 from '../../../../../public/1_4.webp'
import Img15 from '../../../../../public/1_5.webp'
import Img16 from '../../../../../public/1_6.webp'
import Img17 from '../../../../../public/1_7.webp'
import Img18 from '../../../../../public/1_8.webp'
import Img19 from '../../../../../public/1_9.webp'
import Img110 from '../../../../../public/1_10.webp'
import Img111 from '../../../../../public/1_11.webp'
import Img112 from '../../../../../public/1_12.webp'
import Img21 from '../../../../../public/2_1.webp'
import Img22 from '../../../../../public/2_2.webp'
import Img23 from '../../../../../public/2_3.webp'
import Img24 from '../../../../../public/2_4.webp'
import Img25 from '../../../../../public/2_5.webp'
import Img26 from '../../../../../public/2_6.webp'
import Img27 from '../../../../../public/2_7.webp'
import Img28 from '../../../../../public/2_8.webp'
import Img29 from '../../../../../public/2_9.webp'
import Img210 from '../../../../../public/2_10.webp'
import Img211 from '../../../../../public/2_11.webp'
import Img212 from '../../../../../public/2_12.webp'
import Img31 from '../../../../../public/3_1.webp'
import Img32 from '../../../../../public/3_2.webp'
import Img33 from '../../../../../public/3_3.webp'
import Img34 from '../../../../../public/3_4.webp'
import Img35 from '../../../../../public/3_5.webp'
import Img36 from '../../../../../public/3_6.webp'
import Img37 from '../../../../../public/3_7.webp'
import Img38 from '../../../../../public/3_8.webp'
import Img39 from '../../../../../public/3_9.webp'
import Img310 from '../../../../../public/3_10.webp'
import Img311 from '../../../../../public/3_11.webp'
import Img312 from '../../../../../public/3_12.webp'

const Card1 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img11}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card2 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img12}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card3 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img13}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card4 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img14}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card5 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img15}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card6 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img16}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card7 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img17}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card8 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img18}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card9 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img19}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card10 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img110}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card11 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img111}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card12 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img112}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card13 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img21}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card14 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img22}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card15 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img23}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card16 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img24}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card17 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img25}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card18 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img26}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card19 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img27}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card20 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img28}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card21 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img29}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card22 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img210}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card23 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img211}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card24 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img212}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card25 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img31}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card26 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img32}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card27 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img33}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card28 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img34}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card29 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img35}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card30 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img36}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card31 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img37}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card32 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img38}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card33 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img39}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card34 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img310}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card35 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img311}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const Card36 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Img312}
        alt={'Наши работы'}
        sizes="100vw"
        quality={75}
        placeholder='blur'
        priority
        fill
        style={{
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
        }}
        draggable="true"
    />
</div>

const OurProject = forwardRef(function Contacts(props, ref: ForwardedRef<HTMLDivElement>) {
    const container_1 = useRef<HTMLDivElement>(null)
    const container_2 = useRef<HTMLDivElement>(null)
    const container_3 = useRef<HTMLDivElement>(null)
    const isInView_1 = useInView(container_1, { once: true })
    const isInView_2 = useInView(container_2, { once: true })
    const isInView_3 = useInView(container_3, { once: true })
    const transition = {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 2,
        delay: 0.3
    }
    const ourProjects1 = [
        React.createElement(Card1),
        React.createElement(Card2),
        React.createElement(Card3),
        React.createElement(Card4),
        React.createElement(Card5),
        React.createElement(Card6),
        React.createElement(Card7),
        React.createElement(Card8),
        React.createElement(Card9),
        React.createElement(Card10),
        React.createElement(Card11),
        React.createElement(Card12),
    ]
    const ourProjects2 = [
        React.createElement(Card13),
        React.createElement(Card14),
        React.createElement(Card15),
        React.createElement(Card16),
        React.createElement(Card17),
        React.createElement(Card18),
        React.createElement(Card19),
        React.createElement(Card20),
        React.createElement(Card21),
        React.createElement(Card22),
        React.createElement(Card23),
        React.createElement(Card24),
    ]
    const ourProjects3 = [
        React.createElement(Card25),
        React.createElement(Card26),
        React.createElement(Card27),
        React.createElement(Card28),
        React.createElement(Card29),
        React.createElement(Card30),
        React.createElement(Card31),
        React.createElement(Card32),
        React.createElement(Card33),
        React.createElement(Card34),
        React.createElement(Card35),
        React.createElement(Card36),
    ]

    return <section>
        <div className={styles.project_block_1} ref={container_1}>
            <div ref={ref} className={styles.ref_block} />
            <h2 className={styles.title}>Наши работы</h2>
            <Carousel cards={ourProjects1} transition={400} columns={1} infinite switching delay={15000} id='our-project-carousel' />
            <div className={styles.mosaic}>
                {isInView_1 && <>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: 200 }}
                        animate={{ scale: 1, opacity: 1, x: 0 }}
                        transition={{ ...transition }}
                        className={styles.img1_1}
                    >{React.createElement(Card1)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ ...transition }}
                        className={styles.img1_2}
                    >{React.createElement(Card2)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ ...transition }} className={styles.img1_3}>{React.createElement(Card3)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: -15 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ ...transition }} className={styles.img1_4}>{React.createElement(Card4)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ ...transition }}
                        className={styles.img1_6}
                    >{React.createElement(Card6)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: -200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img1_8}
                    >{React.createElement(Card8)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ ...transition }}
                        className={styles.img1_10}
                    >{React.createElement(Card10)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img1_12}
                    >{React.createElement(Card12)}</motion.div>
                </>}
            </div>
        </div>

        <div className={styles.project_block_2} ref={container_2}>
            <h2 className={styles.title}>Премиум класс</h2>
            <Carousel cards={ourProjects2} transition={400} columns={1} infinite switching delay={15000} id='our-project-carousel_2' />
            <div className={styles.mosaic}>
                {isInView_2 && <>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img2_1}
                    >{React.createElement(Card13)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img2_2}
                    >{React.createElement(Card14)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img2_3}
                    >{React.createElement(Card15)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img2_4}
                    >{React.createElement(Card16)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img2_6}
                    >{React.createElement(Card18)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img2_8}
                    >{React.createElement(Card20)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img2_10}
                    >{React.createElement(Card22)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img2_12}
                    >{React.createElement(Card24)}</motion.div>
                </>}
            </div>
        </div>

        <div className={styles.project_block_3} ref={container_3}>
            <h2 className={styles.title}>Комфорт-класс</h2>
            <Carousel cards={ourProjects3} transition={400} columns={1} infinite switching delay={15000} id='our-project-carousel_2' />
            <div className={styles.mosaic}>
                {isInView_3 && <>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img3_1}
                    >{React.createElement(Card25)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img3_2}
                    >{React.createElement(Card26)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img3_3}
                    >{React.createElement(Card27)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img3_4}
                    >{React.createElement(Card28)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img3_6}
                    >{React.createElement(Card30)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img3_8}
                    >{React.createElement(Card32)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img3_10}
                    >{React.createElement(Card34)}</motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ ...transition }}
                        className={styles.img3_12}
                    >{React.createElement(Card36)}</motion.div>
                </>}
            </div>
        </div>
    </section>
})

export default OurProject