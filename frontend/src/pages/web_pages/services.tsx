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
  PricingDesigns,
  ContactFormDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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

  const pricing_features = {
    standard: {
      features: [
        'Dynamic Course Management',
        'Student Analytics',
        'Discussion Boards',
      ],
      limited_features: [
        'Limited Resource Integration',
        'Basic Instructor Profiles',
      ],
    },
    premium: {
      features: [
        'Dynamic Course Management',
        'Comprehensive Student Analytics',
        'Interactive Discussion Boards',
      ],
      also_included: [
        'Advanced Resource Integration',
        'Enhanced Instructor Profiles',
        'Priority Support',
      ],
    },
    business: {
      features: [
        'Dynamic Course Management',
        'Comprehensive Student Analytics',
        'Interactive Discussion Boards',
        'Full Resource Integration',
        'Detailed Instructor Profiles',
        'Dedicated Account Manager',
      ],
    },
  };

  const description = {
    standard:
      'The Standard plan is perfect for individual educators or small teams looking to manage courses and track student progress with essential features.',
    premium:
      'The Premium plan is ideal for small startups or agencies that require advanced analytics, enhanced resource integration, and priority support to elevate their educational offerings.',
    business:
      'The Business plan is designed for enterprises seeking a comprehensive solution with full feature access, dedicated support, and personalized account management.',
  };

  const features_points = [
    {
      name: 'Dynamic Course Management',
      description:
        'Easily create, update, and manage courses with our intuitive tools. Customize syllabi and integrate resources to enhance learning.',
      icon: 'mdiBookOpenVariant',
    },
    {
      name: 'Comprehensive Student Analytics',
      description:
        'Gain valuable insights into student performance and engagement. Use data-driven reports to improve educational outcomes.',
      icon: 'mdiChartBar',
    },
    {
      name: 'Seamless Enrollment Process',
      description:
        'Streamline student enrollments with our efficient system. Manage payment statuses and course assignments effortlessly.',
      icon: 'mdiAccountCheck',
    },
    {
      name: 'Interactive Discussion Boards',
      description:
        'Facilitate meaningful interactions between students and instructors. Encourage collaboration and enhance the learning experience.',
      icon: 'mdiForumOutline',
    },
    {
      name: 'Instructor Profile Management',
      description:
        'Maintain detailed profiles for instructors, showcasing their qualifications and availability. Connect students with the best educators.',
      icon: 'mdiAccountTieOutline',
    },
    {
      name: 'Robust Resource Integration',
      description:
        'Integrate a variety of educational resources into your courses. Enhance learning with multimedia content and interactive tools.',
      icon: 'mdiFileMultiple',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has revolutionized our course management. The intuitive interface and powerful features have made our operations seamless.',
      company: 'EduPro Solutions',
      user_name: 'Jessica Thompson, Operations Manager',
    },
    {
      text: 'The analytics provided by ${projectName} are invaluable. We can now make data-driven decisions to enhance our educational offerings.',
      company: 'Learning Hub Inc.',
      user_name: 'Mark Peterson, Data Analyst',
    },
    {
      text: 'Our instructors love the flexibility of ${projectName}. It allows them to focus on teaching while the platform handles the rest.',
      company: 'TeachSmart Academy',
      user_name: 'Laura Kim, Lead Instructor',
    },
    {
      text: 'The discussion boards have greatly improved student engagement. ${projectName} fosters a collaborative learning environment.',
      company: 'Bright Future University',
      user_name: 'Tom Harris, Student Engagement Coordinator',
    },
    {
      text: 'The enrollment process is now a breeze thanks to ${projectName}. It has streamlined our administrative tasks significantly.',
      company: 'Global Education Network',
      user_name: 'Emily White, Enrollment Manager',
    },
    {
      text: 'The support team at ${projectName} is exceptional. They are always ready to assist and ensure we get the most out of the platform.',
      company: 'Innovative Learning Group',
      user_name: 'David Lee, IT Support Specialist',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - Explore What ${projectName} Offers`}</title>
        <meta
          name='description'
          content={`Discover the comprehensive services offered by ${projectName}, including course management, analytics, and more. Learn about our pricing and hear from satisfied users.`}
        />
      </Head>
      <WebSiteHeader projectName={'Test School'} pages={pages} />
      <main
        className={`flex-grow   bg-skyBlueTheme-websiteBG   rounded-none  `}
      >
        <HeroSection
          projectName={'Test School'}
          image={['Team discussing service offerings']}
          mainText={`Unlock the Power of ${projectName} Services`}
          subTitle={`Explore the diverse services offered by ${projectName} to enhance your educational experience. From course management to advanced analytics, we have you covered.`}
          design={HeroDesigns.IMAGE_LEFT || ''}
          buttonText={`Discover Our Services`}
        />

        <PricingSection
          projectName={'Test School'}
          withBg={0}
          features={pricing_features}
          description={description}
        />

        <FeaturesSection
          projectName={'Test School'}
          image={['Icons representing key features']}
          withBg={0}
          features={features_points}
          mainText={`Explore ${projectName} Features`}
          subTitle={`Discover how ${projectName} can transform your educational experience with our innovative features designed to meet your needs.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'Test School'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied ${projectName} Users `}
        />

        <ContactFormSection
          projectName={'Test School'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person using a contact form']}
          mainText={`Reach Out to ${projectName} `}
          subTitle={`Have questions or need more information? Contact us anytime, and our team at ${projectName} will respond promptly to assist you.`}
        />
      </main>
      <WebSiteFooter projectName={'Test School'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
