'use client'
import styles from './page.module.scss'

import AboutUs from "./(pages)/(home)/about-us/AboutUs";
import Hero from "./(pages)/(home)/hero/Hero";
import AboutTeam from './(pages)/(home)/about-team/AboutTeam';
import Course from './(pages)/(home)/course/Course';
import Expert from './components/expert/Expert';
import Advantages from './(pages)/(home)/advantages/Advantages';
import OurProject from './(pages)/(home)/our-projects/OurProject';
import Contacts from './(pages)/(home)/contacts/Contacts';
import { useRef } from 'react';
import Navbar from './components/navbar/Navbar';
import Form from './(pages)/(home)/form/Form';

export default function Page() {
  const aboutUs = useRef<HTMLDivElement>(null)
  const course = useRef<HTMLDivElement>(null)
  const ourProject = useRef<HTMLDivElement>(null)
  const feedback = useRef<HTMLDivElement>(null)
  const contacts = useRef<HTMLDivElement>(null)

  return <div className={styles.main_container}>
    <Navbar contacts={contacts} aboutUs={aboutUs} course={course} ourProject={ourProject} feedback={feedback} />
    <Hero />
    <Advantages />
    <AboutUs ref={aboutUs} />
    <Expert />
    <AboutTeam />
    <OurProject ref={ourProject} />
    <Course ref={course} />
    <Form ref={feedback} />
    <Contacts ref={contacts} />
  </div>
}
