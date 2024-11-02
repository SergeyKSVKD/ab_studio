import { RefObject, useState } from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/Metadata/logo.jpg'
import { motion } from 'framer-motion'
import MenuButton from '../menu-button/MenuButton'
import { useQuery } from '@/app/helpers/useQuery'

interface NavbarI {
    aboutUs: RefObject<HTMLDivElement>
    course: RefObject<HTMLDivElement>
    ourProject: RefObject<HTMLDivElement>
    contacts: RefObject<HTMLDivElement>
}

export const listVariants = {
    closed: {
        x: '100vw',
    },
    opened: {
        x: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.15,
            duration: 0.2,
        }
    },
}

export const listItemVariants = {
    closed: {
        x: 50,
        scale: 0,
        opacity: 0,
    },
    opened: {
        x: 0,
        scale: 1,
        opacity: 1,
    },
}

const Navbar = ({ aboutUs, course, ourProject, contacts }: NavbarI) => {
    const [opened, setOpened] = useState<boolean>(false)
    const isMobile = useQuery(`(max-width: 480px)`)

    return <nav className={styles.navbar}>
        <Image
            src={Logo}
            alt='logo'
            quality={75}
            priority
            width={55}
            height={55}
            draggable="true"
        />
        <div className={styles.menu}>
            <span onClick={() => aboutUs.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>
                О нас
            </span>
            <span onClick={() => ourProject.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>
                Наши проекты
            </span>
            <span onClick={() => course.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>
                О курсе
            </span>
            <span onClick={() => contacts.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>
                Контакты
            </span>
        </div>
        <div className={styles.feedback}>
            <Link className={styles.phone} href='tel:+79277548732'>
                +7 (927) 754-87-32
            </Link>
            <button className={styles.contact}
            // onClick={() => props.feedback && props.feedback.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
            >Связаться с нами</button>
        </div>

        {isMobile && <MenuButton onClick={() => setOpened(!opened)} opened={opened} />}
        {opened &&
            <motion.div
                variants={listVariants}
                initial='closed'
                animate='opened'
                className={styles.menu_mobile}
            >
                <motion.div variants={listItemVariants}>
                    <span onClick={() => {
                        setOpened(!opened)
                        aboutUs.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}>
                        О нас
                    </span>
                </motion.div>
                <motion.div variants={listItemVariants}>
                    <span onClick={() => {
                        setOpened(!opened)
                        ourProject.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}>
                        Наши проекты
                    </span>
                </motion.div>
                <motion.div variants={listItemVariants}>
                    <span onClick={() => {
                        setOpened(!opened)
                        course.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}>
                        О курсе
                    </span>
                </motion.div>
                <motion.div variants={listItemVariants}>
                    <span onClick={() => {
                        setOpened(!opened)
                        contacts.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}>
                        Контакты
                    </span>
                </motion.div>
            </motion.div>
        }
    </nav>
}

export default Navbar