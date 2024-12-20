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
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const faqs = [
    {
      question: 'How do I create a new course?',
      answer:
        'To create a new course, log into your ${projectName} account and navigate to the course management section. Follow the step-by-step guide to add course details, syllabi, and resources.',
    },
    {
      question: 'Can I track student progress?',
      answer:
        'Yes, ${projectName} provides comprehensive tools to monitor student progress. You can view detailed reports on grades, engagement, and course completion rates.',
    },
    {
      question: 'What support options are available?',
      answer:
        '${projectName} offers various support options, including email support and a detailed help center. Our team is ready to assist you with any questions or issues.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a free trial for new users to explore the features of ${projectName}. Sign up on our website to start your trial today.',
    },
    {
      question: 'How secure is my data?',
      answer:
        'We prioritize your data security at ${projectName}. Our platform uses advanced encryption and security protocols to protect your information.',
    },
    {
      question: 'Can I customize the platform for my needs?',
      answer:
        'Absolutely! ${projectName} is designed to be flexible and customizable. You can tailor the platform to fit your specific educational requirements.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - Get in Touch with ${projectName}`}</title>
        <meta
          name='description'
          content={`Reach out to ${projectName} for any inquiries or support. Find answers to common questions in our FAQ section.`}
        />
      </Head>
      <WebSiteHeader projectName={'Test School'} pages={pages} />
      <main
        className={`flex-grow   bg-skyBlueTheme-websiteBG   rounded-none  `}
      >
        <HeroSection
          projectName={'Test School'}
          image={['Person holding a phone']}
          mainText={`Connect with ${projectName} Today`}
          subTitle={`We're here to help! Reach out to ${projectName} for any questions or support. Our team is ready to assist you.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Contact Us Now`}
        />

        <FaqSection
          projectName={'Test School'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions about ${projectName} `}
        />

        <ContactFormSection
          projectName={'Test School'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Person typing on a laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Have a question or need support? Contact us anytime, and our team at ${projectName} will respond promptly to assist you.`}
        />
      </main>
      <WebSiteFooter projectName={'Test School'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
