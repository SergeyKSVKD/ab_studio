'use client'

import { ForwardedRef, forwardRef } from 'react'
import styles from './contacts.module.scss'
import cn from 'classnames'
import Maps from '@/app/components/maps/Maps';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { TbInfoSquare } from "react-icons/tb";
import Link from "next/link";
import { TfiYoutube } from 'react-icons/tfi';
import Image from 'next/image';
import Logo from '../../../../../public/Metadata/logo.jpg'

const Contacts = forwardRef(function Contacts(props, ref: ForwardedRef<HTMLDivElement>) {

    return (
        <footer className={cn(styles.container)}>
            <div ref={ref} className={styles.ref_block} />
            <h2 className={styles.title}>Как с нами связаться</h2>
            <Maps />
            <div id='contacts' className={styles.contacts}>
                <p className={styles.contact}>
                    <IoPhonePortraitOutline />
                    Телефон:
                    <Link className={styles.link} href='tel:+7 (xxx) xxx-xx-xx'>
                        +7 (xxx) xxx-xx-xx</Link>
                </p>
                <p className={styles.contact}>
                    <IoIosMail />
                    E-mail:
                    <Link className={styles.link} href='mailto: info@info.ru'>
                        info@info.ru</Link>
                </p>
                <p className={cn(styles.contact)}>
                    <FaMapMarkerAlt />улица, Самара
                </p>
                <p className={cn(styles.requisites, styles.contact)}>
                    <TbInfoSquare />ИП Рога и Копыта
                </p>
                <div className={styles.requisites_info}>
                    <p>ИНН: <span className={styles.text_color}>xxxxxxxxxxxx</span></p>
                    {/* <p>ОКПО: <span className={styles.text_color}>2024277861</span></p>
                    <p>ОКАТО: <span className={styles.text_color}>36401373000</span></p> */}
                    <p>ОРГНИП: <span className={styles.text_color}>xxxxxxxxxxxxxxx</span></p>
                </div>
            </div>
            <div className={styles.logo}>
                <Image
                    src={Logo}
                    alt='logo'
                    quality={75}
                    priority
                    width={60}
                    height={60}
                    draggable="true"
                />
                <span className={styles.brand}>Студия ремонта и дизайна</span>
            </div>
            <div className={styles.socials}>
                <Link href='https://vk.com/xxxxxxx'><SlSocialVkontakte /></Link>
                <Link href='https://t.me/xxx'><FaTelegramPlane /></Link>
                <Link href='https://youtube.com/@xxxxxxx'><TfiYoutube /></Link>
            </div>
        </footer>
    )
})

export default Contacts