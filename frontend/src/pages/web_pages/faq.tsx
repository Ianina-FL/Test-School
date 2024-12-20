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
  FaqDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

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

  const faqs = [
    {
      question: 'How do I sign up for ${projectName}?',
      answer:
        "To sign up, visit our website and click on the 'Sign Up' button. Follow the instructions to create your account and start exploring our features.",
    },
    {
      question: 'What features are included in the Standard plan?',
      answer:
        "The Standard plan includes dynamic course management, basic student analytics, and access to discussion boards. It's perfect for individual educators.",
    },
    {
      question: 'Can I upgrade my plan later?',
      answer:
        'Yes, you can upgrade your plan at any time. Simply log into your account, go to the billing section, and choose the plan that best suits your needs.',
    },
    {
      question: 'How secure is my data on ${projectName}?',
      answer:
        'We prioritize your data security with advanced encryption and security protocols. Your information is safe with us, and we continuously update our systems to ensure protection.',
    },
    {
      question: 'Is there a mobile app available?',
      answer:
        'Currently, ${projectName} is accessible via web browsers on both desktop and mobile devices. We are working on a dedicated mobile app to enhance your experience.',
    },
    {
      question: 'How can I contact support?',
      answer:
        'You can contact our support team via the contact form on our website or by emailing support@projectname.com. We are here to assist you with any inquiries.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. If you need further assistance, feel free to contact us.`}
        />
      </Head>
      <WebSiteHeader projectName={'Test School'} pages={pages} />
      <main
        className={`flex-grow   bg-skyBlueTheme-websiteBG   rounded-none  `}
      >
        <HeroSection
          projectName={'Test School'}
          image={['Person reading a FAQ document']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. We're here to help you get the most out of our platform.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'Test School'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Test School'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person sending an email']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`Have more questions? Contact us anytime, and our team at ${projectName} will respond promptly to assist you with your inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'Test School'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
