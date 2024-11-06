import styles from './Modal.module.scss'
import cn from 'classnames'

type successfulType = 'false' | 'true' | 'warning'

interface ModalI {
    message: string,
    isModalActive: boolean,
    successful: successfulType
}

const Modal = ({ message, isModalActive, successful = 'true' }: ModalI) => {

    return (<>
        <div className={cn({
            [styles.active]: isModalActive,
            [styles.unsuccessful]: successful === 'false',
            [styles.successful]: successful === 'true',
            [styles.warning]: successful === 'warning',
        }, styles.modal)}>
            <span className={styles.text}>{message}</span>
        </div>
    </>)
}

export { Modal }