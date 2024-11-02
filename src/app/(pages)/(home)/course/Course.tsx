import Image from 'next/image'
import styles from './course.module.scss'
import cn from 'classnames'
import CourseImg from '../../../../../public/course.webp'
import Link from 'next/link'
import { ForwardedRef, forwardRef } from 'react'
import ImageSlider from '@/app/components/image-slider/ImageSlider'

const Course = forwardRef(function Contacts(props, ref: ForwardedRef<HTMLDivElement>) {

    return <>
        <section className={styles.container}>
            <div ref={ref} className={styles.ref_block} />
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
        <h2 className={styles.attitude}>Ваше отношение к ремонту до и после курса</h2>
        <ImageSlider />
        <h2 className={styles.learn_something}>Чему научитесь</h2>
        <div className={cn(styles.text, styles.learn_something_text_block)}>
            <p><span className={styles.text_color}>Планировать ремонт.</span> Вам станут понятны основные этапы ремонта и как они влияют друг на друга. <span className={styles.text_color}>Как отличить качественную бригаду</span> от «мы так всегда делаем» и как принимать работу. Тем самым сможете <span className={styles.text_color}>избежать ненужных и дорогих переделок.</span></p>
            <p><span className={styles.text_color}>Составлять ТЗ для исполнителей.</span> У Вас больше не будет вопросов: -Почему сделали «так, а не иначе» и Вы не услышите ответов, что «Вы не спрашивали, мы и не предлагали». <span className={styles.text_color}>Теперь Вы понимаете суть каждого этапа</span> и сможете ясно изложить свои потребности и поймете, если Вас попытаются обмануть.</p>
            <p><span className={styles.text_color}>Грамотно экономить на материалах.</span> Разберетесь в разных видах материала и сможете выбрать те, которые впишутся в Ваш бюджет и при этом <span className={styles.text_color}>не снизят качество ремонта.</span> А при желании улучшить отделку в последующем, Вам не придется начинать все с нуля, так как <span className={styles.text_color}>у Вас будет заложена отличная база.</span></p>
            <p><span className={styles.text_color}>Планировать бюджет.</span> В курсе представлена выборка по всем основным строительным материалам актуальным на данный момент на рынке из разных ценовых сегментов, теперь Вам решать на чем <span className={styles.text_color}>можно сэкономить минимум миллион рублей</span>, а на чем не стоит и самое главное, как не попасть на полную переделку, выбрав не качественный или не подходящий материал. Наличие на рынке огромного количества аналогов вовсе не означает широкие возможности.</p>
            <p><Link className={cn(styles.link, styles.text_color)} href='https://abstudiokurs.ru/course'>Подробности по ссылке!</Link></p>
        </div>
    </>
})

export default Course