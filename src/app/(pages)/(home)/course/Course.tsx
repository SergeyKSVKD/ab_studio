import Image from 'next/image'
import styles from './course.module.scss'
import cn from 'classnames'
import CourseImg from '../../../../../public/course.webp'
import Link from 'next/link'

const Course = () => {

    return <section className={styles.container}>
        <h2 className={styles.title}>Авторский курс “Ремонт с нуля”</h2>
        <div className={cn(styles.text, styles.text_block1)}>
            <p>Для тех, кто планирует ремонт Алексей Белянин - основатель AB Studio записал свой <span className={styles.text_color}>авторский курс «Ремонт с нуля».</span></p>
            <p><span className={styles.text_color}>Благодаря экспертным знаниям</span>, собранным в курсе и отточенному годами опыту слово "ремонт" больше не будет для вас синонимом головной боли! Он <span className={styles.text_color}>станет быстрым и приятным опытом</span>, каким и должен быть.</p>
            <p>Преображение квартиры или дома <span className={styles.text_color}>без больших вложений</span> станет не просто возможным, а даже неминуемым для вас, потому что вы выбрали <span className={styles.text_color}>ВЕРНЫЙ КУРС</span></p>
            <p><Link className={cn(styles.link, styles.text_color)} href='https://abstudiokurs.ru/course'>Подробности по ссылке!</Link></p>
        </div>
        <div className={styles.image_container}>
            <Image
                src={CourseImg}
                alt='о-курсе'
                quality={75}
                priority
                fill
                width={0}
                height={0}
                style={{
                    pointerEvents: 'none',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                }}
                draggable="true"
                unoptimized
            />
        </div>
    </section>
}

export default Course