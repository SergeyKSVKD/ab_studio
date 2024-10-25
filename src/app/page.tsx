import styles from './page.module.scss'

import AboutUs from "./(pages)/(home)/about-us/AboutUs";
import Hero from "./(pages)/(home)/hero/Hero";
import AboutTeam from './(pages)/(home)/about-team/AboutTeam';
import Course from './(pages)/(home)/course/Course';
import Expert from './components/expert/Expert';
import Advantages from './(pages)/(home)/advantages/Advantages';
import OurProject from './(pages)/(home)/our-projects/OurProject';
import Contacts from './(pages)/(home)/contacts/Contacts';

export default function Page() {
  return <div className={styles.main_container}>
    <Hero />
    <Advantages />
    <AboutUs />
    <AboutTeam />
    <Course />
    <Expert />
    <OurProject />
    <Contacts />
  </div>
}
