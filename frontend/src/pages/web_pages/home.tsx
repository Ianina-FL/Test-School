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
  FeaturesDesigns,
  AboutUsDesigns,
  FaqDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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
      name: 'Course Management',
      description:
        'Easily create and update courses with comprehensive syllabi and resources. Keep your content fresh and engaging for students.',
      icon: 'mdiBookOpenPageVariant',
    },
    {
      name: 'Student Tracking',
      description:
        'Monitor student progress and manage grades efficiently. Ensure every student receives the attention they need to succeed.',
      icon: 'mdiAccountGroup',
    },
    {
      name: 'Instructor Profiles',
      description:
        'Maintain detailed profiles for instructors, showcasing their qualifications and availability. Connect students with the best educators.',
      icon: 'mdiAccountTie',
    },
  ];

  const faqs = [
    {
      question: 'What types of courses can I create?',
      answer:
        'With ${projectName}, you can create a wide range of courses, from single-topic classes to comprehensive study programs. Customize each course with syllabi, resources, and assessments to fit your educational needs.',
    },
    {
      question: 'How do I track student progress?',
      answer:
        "${projectName} offers robust tools to monitor student progress, including grade management and progress tracking features. You can view detailed reports on each student's performance and engagement.",
    },
    {
      question: 'Can instructors update their profiles?',
      answer:
        'Yes, instructors can easily update their profiles with new qualifications and availability. This ensures that students have access to the most current information about their educators.',
    },
    {
      question: 'How does the enrollment process work?',
      answer:
        'Students can enroll in courses through a simple process on ${projectName}. The platform also allows you to manage payment statuses and course assignments efficiently.',
    },
    {
      question: 'Is there a way to facilitate discussions?',
      answer:
        'Yes, ${projectName} includes discussion boards linked to each course. These boards enable students and instructors to interact, share ideas, and engage in meaningful discussions.',
    },
    {
      question: 'What kind of analytics are available?',
      answer:
        '${projectName} provides comprehensive analytics, including reports on student engagement, course completion rates, and instructor performance. These insights help you make informed decisions to enhance the learning experience.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Comprehensive Online Education Platform`}</title>
        <meta
          name='description'
          content={`Manage courses, students, instructors, and more with our all-in-one online education platform.`}
        />
      </Head>
      <WebSiteHeader projectName={'Test School'} pages={pages} />
      <main
        className={`flex-grow   bg-skyBlueTheme-websiteBG   rounded-none  `}
      >
        <HeroSection
          projectName={'Test School'}
          image={['Diverse students in a classroom']}
          mainText={`Transform Your Learning with ${projectName}`}
          subTitle={`Discover a seamless way to manage courses, students, and instructors. Enhance your educational experience with ${projectName}.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'Test School'}
          image={['Icons representing education tools']}
          withBg={0}
          features={features_points}
          mainText={`Explore Key Features of ${projectName}`}
          subTitle={`Unlock the full potential of online education with ${projectName}. Manage courses, students, and instructors effortlessly.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'Test School'}
          image={['Team collaborating on education solutions']}
          mainText={`Empowering Education with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to transforming the online learning experience. Our platform is designed to support educators and students in achieving their goals seamlessly.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <FaqSection
          projectName={'Test School'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions about ${projectName} `}
        />

        <ContactFormSection
          projectName={'Test School'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on a laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`We're here to help! Reach out to us anytime with your questions or feedback. Our team at ${projectName} will respond promptly to assist you.`}
        />
      </main>
      <WebSiteFooter projectName={'Test School'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
