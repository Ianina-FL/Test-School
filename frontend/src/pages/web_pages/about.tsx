import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'Test School';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const features_points = [
    {
      name: 'Comprehensive Course Builder',
      description:
        'Create and customize courses with ease. Our intuitive builder allows you to design engaging syllabi and integrate diverse resources.',
      icon: 'mdiBookEdit',
    },
    {
      name: 'Advanced Analytics',
      description:
        'Gain insights into student performance and course effectiveness. Use data-driven reports to make informed decisions and improve outcomes.',
      icon: 'mdiChartLine',
    },
    {
      name: 'Interactive Discussion Boards',
      description:
        'Facilitate meaningful interactions between students and instructors. Our discussion boards encourage collaboration and enhance learning experiences.',
      icon: 'mdiForum',
    },
  ];

  const testimonials = [
    {
      text: 'Using ${projectName} has transformed our online courses. The platform is intuitive and has significantly improved our student engagement.',
      company: 'EduTech Innovations',
      user_name: 'Alice Johnson, Head of Curriculum',
    },
    {
      text: 'The analytics feature in ${projectName} is a game-changer. It provides us with valuable insights that help us tailor our teaching strategies.',
      company: 'Learning Solutions Inc.',
      user_name: 'Michael Smith, Data Analyst',
    },
    {
      text: 'Our instructors love the course management tools. ${projectName} makes it easy to update content and manage student interactions.',
      company: 'FutureLearn Academy',
      user_name: 'Emily Davis, Lead Instructor',
    },
    {
      text: "The discussion boards have enhanced our students' learning experience. ${projectName} fosters a collaborative environment that encourages participation.",
      company: 'Bright Minds University',
      user_name: 'John Williams, Student Engagement Coordinator',
    },
    {
      text: 'We appreciate the seamless enrollment process. ${projectName} has streamlined our operations and improved our administrative efficiency.',
      company: 'Global Education Network',
      user_name: 'Sarah Brown, Enrollment Manager',
    },
    {
      text: 'The support team at ${projectName} is fantastic. They are always ready to help and ensure we get the most out of the platform.',
      company: 'Innovative Learning Group',
      user_name: 'David Lee, IT Support Specialist',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - Learn More About ${projectName}`}</title>
        <meta
          name='description'
          content={`Discover the mission, values, and team behind ${projectName}. Learn how we empower education through innovative solutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'Test School'} pages={pages} />
      <main
        className={`flex-grow   bg-skyBlueTheme-websiteBG   rounded-none  `}
      >
        <HeroSection
          projectName={'Test School'}
          image={['Team discussing project goals']}
          mainText={`Discover the Vision Behind ${projectName}`}
          subTitle={`Explore the mission and values that drive ${projectName}. Learn how we are transforming the educational landscape with innovative solutions.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Meet Our Team`}
        />

        <AboutUsSection
          projectName={'Test School'}
          image={['Team collaborating in office']}
          mainText={`Our Journey with ${projectName}`}
          subTitle={`At ${projectName}, we are committed to revolutionizing education. Our dedicated team works tirelessly to create a platform that empowers educators and students alike.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn Our Story`}
        />

        <FeaturesSection
          projectName={'Test School'}
          image={['Icons representing key features']}
          withBg={1}
          features={features_points}
          mainText={`Innovative Features of ${projectName}`}
          subTitle={`Discover how ${projectName} enhances the educational experience with cutting-edge features designed for educators and students.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'Test School'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Users Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Test School'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Person writing an email']}
          mainText={`Connect with ${projectName} Today `}
          subTitle={`Have questions or need assistance? Reach out to us anytime, and our team at ${projectName} will respond promptly to support you.`}
        />
      </main>
      <WebSiteFooter projectName={'Test School'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
