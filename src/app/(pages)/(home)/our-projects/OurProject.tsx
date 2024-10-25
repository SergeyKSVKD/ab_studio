'use client'

import Carousel from '@/app/components/carousel/Carousel'
import styles from './our-project.module.scss'
import Image from 'next/image'
import React from 'react'
import Project1Img from '../../../../../public/project1.webp'

const Card1 = () => <div className={styles.image_container}>
    <Image
        className={styles.image}
        src={Project1Img}
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

const OurProject = () => {
    const ourProjects = [
        React.createElement(Card1),
    ]

    return <section>
        <div className={styles.project}>
            <Carousel cards={ourProjects} transition={400} columns={1} infinite switching delay={10000} id='our-project-carousel' />
            <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro provident sunt doloribus cum alias temporibus illo sed beatae, quia facere laboriosam accusantium quidem dolorem, iure quasi quo praesentium voluptas? Unde eaque quod, voluptatem earum iste pariatur a illo, porro odio, ratione dolorem? Maiores iusto tenetur molestiae perferendis voluptatibus tempore voluptatem quibusdam officia eaque minima! Sit corrupti soluta reprehenderit recusandae dolore quis expedita consectetur animi, ad pariatur ipsum. Corporis velit consequatur eaque eius mollitia soluta rerum. Mollitia, molestias facere incidunt suscipit, cum quasi praesentium hic eveniet autem adipisci, fuga natus tempore corporis vel maiores consequuntur enim ex numquam quae molestiae modi fugiat. Perferendis magnam tempore enim rem accusantium cupiditate, deserunt minus ab dignissimos vero, totam quibusdam excepturi, quos a ad quam pariatur unde sed sunt adipisci in nihil laborum. Facere veritatis natus ut corporis reiciendis suscipit commodi qui nobis tempore dolorum quod, in debitis esse est distinctio tempora blanditiis, nostrum delectus vero perspiciatis at quos earum obcaecati nemo. Minima tenetur iusto dignissimos repudiandae incidunt, placeat ullam sint corporis maxime officia! Sit inventore recusandae ex aliquam veritatis reprehenderit facere et eius beatae optio quis cum, eum impedit libero modi fugiat nobis aliquid quibusdam? Odio repudiandae aliquam consectetur unde accusantium vel eum! Repellendus neque reiciendis, perspiciatis odio enim temporibus illum rem cumque ipsam magnam quisquam ab vitae deleniti dicta, nihil at saepe praesentium molestias pariatur rerum blanditiis eligendi. Ab dolore doloremque amet nulla ut? Deleniti molestias adipisci eos iste, eius quasi nulla id alias aliquid quis dolores? Aspernatur eaque maxime fuga, suscipit quidem tenetur similique placeat voluptatem provident? Quam sint mollitia nemo qui, error repellendus delectus sunt ipsam dignissimos architecto asperiores quod, saepe consequatur sed pariatur! Id atque delectus assumenda. Sunt accusamus ipsa esse aliquid explicabo nam dolor voluptatibus iure ex nesciunt maiores voluptatum cupiditate quisquam unde expedita, quae ratione quo sit reprehenderit delectus veritatis odio? Aspernatur doloremque accusantium omnis sunt tempore cumque nesciunt, fuga ab non! Iusto reprehenderit possimus rerum placeat at nisi aperiam officia, nemo magnam, harum laborum velit natus suscipit, hic pariatur sunt beatae. Vero iusto dicta maiores officiis quam molestias mollitia. Deleniti vel eveniet id molestias, temporibus necessitatibus non illo illum numquam architecto fugiat nemo voluptates recusandae aperiam omnis officiis error autem sunt eum odit rem corporis eos in fuga! Doloremque voluptas quas amet et provident at quisquam nemo, delectus quos aperiam consectetur nobis porro libero sunt eveniet rerum laborum perferendis eligendi quam vero quibusdam pariatur. Facilis officiis qui totam id similique hic asperiores dolor animi eveniet nam aut cumque accusantium harum omnis perspiciatis ut a iusto, amet corporis aspernatur consequuntur? Sequi modi fugiat distinctio et, maiores totam at quod alias recusandae magnam. Delectus quod quo nam porro perspiciatis ad consequatur repellendus nihil dicta impedit accusantium accusamus mollitia exercitationem neque inventore odit voluptatum, qui voluptate culpa iure placeat nemo incidunt eum? Enim, quidem debitis voluptatum dicta repellat cupiditate expedita vero magnam eum, inventore, perspiciatis ullam. Ipsam, fuga officiis ex itaque error et? Perferendis, distinctio quidem. Voluptate, autem dolorum minus accusantium quibusdam sint corporis animi optio laboriosam voluptatibus sed?</div>
        </div>
    </section>
}

export default OurProject