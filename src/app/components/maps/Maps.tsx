"use client"

import styles from '../../(pages)/(home)/contacts/contacts.module.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Maps = () => {

    return <div className={styles.map_container}>
        <YMaps query={{ apikey: 'bf776145-9ae3-4b24-ac9f-51333af94130' }}>
            <Map className={styles.map}
                defaultState={{ center: [53.22718860354542,50.174198318640734], zoom: 16 }}
            >
                <Placemark geometry={[53.22718860354542,50.174198318640734]}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: '/sticker-round.gif',
                        iconImageSize: [32, 32],
                        iconImageOffset: [0, 0],
                        cursor: 'pointer',
                        preset: "islands#violetIcon",
                    }}
                />
            </Map>
        </YMaps>
    </div>
}

export default Maps