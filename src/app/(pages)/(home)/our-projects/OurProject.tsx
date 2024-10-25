'use client'

import Carousel from '@/app/components/carousel/Carousel'
import styles from './our-project.module.scss'
import Image from 'next/image'
import React, { ForwardedRef, forwardRef } from 'react'
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

const OurProject = forwardRef(function Contacts(props, ref: ForwardedRef<HTMLDivElement>) {
    const ourProjects = [
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

    return <section>
        <div className={styles.project}>
            <div ref={ref} className={styles.ref_block} />
            <h2 className={styles.title}>Наши работы</h2>
            <Carousel cards={ourProjects} transition={400} columns={1} infinite switching delay={10000} id='our-project-carousel' />
            <div className={styles.mosaic}>
                <div className={styles.img1_1}>{React.createElement(Card1)}</div>
                <div className={styles.img1_2}>{React.createElement(Card2)}</div>
                <div className={styles.img1_3}></div>
                <div className={styles.img1_4}></div>
                <div className={styles.img1_5}></div>
                <div className={styles.img1_6}></div>
                <div className={styles.img1_7}></div>
                <div className={styles.img1_8}></div>
                <div className={styles.img1_9}></div>
                <div className={styles.img1_10}></div>
                <div className={styles.img1_11}></div>
                <div className={styles.img1_12}></div>
            </div>
        </div>
    </section>
})

export default OurProject