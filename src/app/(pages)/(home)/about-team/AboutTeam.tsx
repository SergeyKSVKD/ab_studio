import Image from 'next/image'
import styles from './aboutTeam.module.scss'
import cn from 'classnames'
import AboutMeImg from '../../../../../public/avatar.webp'
import Ellipse1Img from '../../../../../public/ellipse1.svg'
import Link from 'next/link'
import { TfiYoutube } from 'react-icons/tfi'
import { FaTelegramPlane } from 'react-icons/fa'

const AboutTeam = () => {

    return <section className={styles.container}>
        <div className={styles.image_container}>
            <Image
                src={AboutMeImg}
                alt='о-нас'
                quality={75}
                priority
                fill
                width={0}
                height={0}
                style={{
                    pointerEvents: 'none',
                    objectFit: 'cover',
                    objectPosition: '25% 75%',
                }}
                draggable="true"
                unoptimized
            />
        </div>
        <h2 className={styles.title}>Обо мне и моей команде</h2>
        <div className={cn(styles.text, styles.text_block1)}>
            <p>Приветствую Друзья!</p>
            <p>Меня зовут Алексей Белянин и я основатель студии ремонта <span className={styles.text_color}>премиум класса</span> AB studio.</p>
            <p>Почему премиум спросите вы? Потому что наша команда специализируется на <span className={styles.text_color}>сложных технических ремонтах</span> и закрывает абсолютно все вопросы от проектирования до декорирования. Но мы с удовольствием работаем с проектами любой сложности.</p>
            <p>Помимо основной деятельности по отделке квартир и коттеджей, а с 2012 года мной сдано <span className={styles.text_color}>более 2700 квадратных метров</span>, я занимаюсь консультацией при приемке квартир. За несколько лет принято у застройщика <span className={styles.text_color}>более 300 квартир</span>, что дает огромный уровень насмотренности и позволяет применять этот опыт при проектировании.</p>
            <p>На своем <span className={styles.text_color}>YouTube канале</span>, я делаю обзоры новостроек, что позволит вам без проблем выбрать себе застройщика, узнав у кого из застройщиков какой подход к строительству. Кстати на канале <Link className={cn(styles.link, styles.text_color)} href='https://youtube.com/@remont_smr'>уже более 1,8 млн просмотров, присоединяйтесь! <TfiYoutube /></Link></p>
        </div>
        <div className={cn(styles.text, styles.text_block2)}>
            <p>Практически на каждой консультации, я сталкивался с одними и теми же вопросами и болями со стороны новоселов, что натолкнуло меня на мысль не просто собрать все ответы в одном месте, а записать своеобразную <span className={styles.text_color}>инструкцию по ремонту квартир</span>, что позволит сэкономить не только время, но и деньги.</p>
            <p>Так родился <span className={styles.text_color}>авторский курс “Ремонт с нуля”</span>, кстати он идеально подойдет для начинающих отделочников, дизайнеров и прорабов!</p>
            <p>Для любителей живого контента, я веду ТГ канал, где всегда свежая информация с объектов и не только. Только личные мысли, никаких СММ! Кстати каждые выходные, я провожу рубрику “Вопрос-ответ”, где можно получить ответ на любую тему по отделке и ремонту! <Link className={cn(styles.link, styles.text_color)} href='https://t.me/remont_smr'>Подписывайся, я тебя жду! <FaTelegramPlane /></Link></p>
        </div>
        {/* <Image
            src={Ellipse1Img}
            draggable="false"
            quality={25}
            alt='круг'
            className={styles.ellipse1}
        /> */}
    </section>
}

export default AboutTeam