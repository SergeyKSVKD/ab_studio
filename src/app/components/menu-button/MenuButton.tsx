import styles from './menu-button.module.scss'
import { motion } from 'framer-motion'
import { type MenuButtonProps } from './types'
import { bottomVariants, centerVariants, topVariants } from './variants'

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, opened }) => {

    return (
        <div className={styles.menu} onClick={onClick}>
            <motion.div
                animate={opened ? 'opened' : 'closed'}
                variants={topVariants} className={styles.top}></motion.div>
            <motion.div
                animate={opened ? 'opened' : 'closed'}
                variants={centerVariants} className={styles.center}></motion.div>
            <motion.div
                animate={opened ? 'opened' : 'closed'}
                variants={bottomVariants} className={styles.bottom}></motion.div>
        </div>
    )
}

export default MenuButton