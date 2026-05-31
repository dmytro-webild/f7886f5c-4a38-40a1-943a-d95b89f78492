"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Building, Facebook, Instagram, Linkedin, Smile } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About Us",          id: "about"},
        {
          name: "Services",          id: "services"},
        {
          name: "Products",          id: "products"},
        {
          name: "Projects",          id: "metrics"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "FAQ",          id: "faq"},
        {
          name: "Contact",          id: "contact"},
      ]}
      button={{
        text: "Request A Quote",        href: "#contact"}}
      topBarButton={{
        text: "اللغات / زمان"}}
      brandName="Daroj PVC"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "plain"}}
      title="Premium Doors, Windows, Complete Renovations"
      description="Daroj PVC transforms homes and buildings with custom aluminum and PVC solutions, expertly installed by Erbil's trusted renovation specialists. From concept to completion, we deliver quality that lasts."
      tag="Erbil's Trusted Partner"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Request Your Free Quote",          href: "#contact"},
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-boxer-wrapping-his-hands-before-training-ring_23-2148759638.jpg",          imageAlt: "Modern PVC window installation in a home interior"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-people-working-together_23-2149366697.jpg",          imageAlt: "Skilled construction team installing a new door"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by hundreds of clients"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Daroj PVC"
      tagAnimation="slide-up"
      title="Your Vision, Our Expertise"
      description="Daroj PVC is a leading renovation and construction company in Erbil, specializing in high-quality PVC and aluminum doors, windows, and professional installation services. We are dedicated to transforming residential and commercial properties with precision and superior craftsmanship."
      subdescription="With years of experience in the Erbil construction market, our team ensures transparent communication, competitive pricing, and results that exceed expectations. We build trust through lasting quality."
      icon={Building}
      imageSrc="http://img.b2bpic.net/free-photo/facade-building-construction_23-2147785500.jpg"
      imageAlt="Construction team collaborating on a site plan"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "custom-fabrication",          title: "Custom Fabrication",          subtitle: "Tailored PVC & Aluminum solutions to match your unique architectural style and functional needs.",          category: "Design & Build",          value: "Precision"},
        {
          id: "expert-installation",          title: "Expert Installation",          subtitle: "Our certified technicians ensure flawless and secure installation, guaranteeing durability and performance.",          category: "Service",          value: "Reliability"},
        {
          id: "energy-efficiency",          title: "Energy Efficiency",          subtitle: "Upgrade to high-performance doors and windows that enhance insulation and reduce energy costs.",          category: "Innovation",          value: "Savings"},
      ]}
      title="Comprehensive Renovation & Installation"
      description="Daroj PVC offers a full spectrum of services from custom fabrication to expert installation, ensuring seamless project execution and exceptional results."
      tag="Our Services"
      tagAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "pvc-door-modern",          name: "Modern PVC Door",          price: "Custom Quote",          imageSrc: "http://img.b2bpic.net/free-photo/interior-modern-building-with-glass-windows-white-atmosphere_181624-8808.jpg",          imageAlt: "Modern white PVC door"},
        {
          id: "aluminum-sliding",          name: "Aluminum Sliding Door",          price: "Custom Quote",          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-daughter-is-engaged-gymnastics_1157-31635.jpg",          imageAlt: "Large aluminum sliding door"},
        {
          id: "pvc-window-double",          name: "PVC Double Glazed Window",          price: "Custom Quote",          imageSrc: "http://img.b2bpic.net/free-photo/white-door-with-rhythmic-square-panels-minimalist-facade-bright-geometric-doorway_169016-71058.jpg",          imageAlt: "Double glazed PVC window"},
        {
          id: "aluminum-panoramic",          name: "Aluminum Panoramic Window",          price: "Custom Quote",          imageSrc: "http://img.b2bpic.net/free-photo/glass-window-overlooking-green-garden_1232-2979.jpg",          imageAlt: "Large panoramic aluminum window"},
        {
          id: "pvc-door-custom",          name: "Custom Design PVC Door",          price: "Custom Quote",          imageSrc: "http://img.b2bpic.net/free-photo/light-doors-with-green-accents-soft-arched-panels-cream-classic-doors_169016-70925.jpg",          imageAlt: "Custom colored PVC door"},
        {
          id: "aluminum-security",          name: "Security Aluminum Window",          price: "Custom Quote",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-city-building-shadows_23-2149283302.jpg",          imageAlt: "Security reinforced aluminum window"},
      ]}
      title="Custom Doors & Windows"
      description="Explore our diverse selection of high-quality PVC and aluminum products, designed for durability, energy efficiency, and aesthetic appeal."
      tag="Our Product Range"
      tagAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "projects",          icon: Building,
          title: "Projects Completed",          value: "250+"},
        {
          id: "satisfaction",          icon: Smile,
          title: "Client Satisfaction",          value: "98%"},
        {
          id: "experience",          icon: Award,
          title: "Years of Experience",          value: "15+"},
      ]}
      title="Proven Excellence in Construction"
      description="Our commitment to quality and client satisfaction is reflected in every project we undertake, building a legacy of trust and reliability in Erbil."
      tag="Our Achievements"
      tagAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Ahmed Karim",          handle: "@AhmedKarimErbil",          testimonial: "Daroj PVC did an outstanding job on our home windows. The quality is exceptional and the installation was quick and professional. Highly recommend!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-girl-sitting-restaurant_8353-7822.jpg",          imageAlt: "Portrait of Ahmed Karim"},
        {
          id: "2",          name: "Lana Ali",          handle: "@LanaAliProperties",          testimonial: "As a property manager, I need reliability. Daroj PVC delivered on time and within budget for a commercial project. Their aluminum doors are top-notch.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-standing-outside-office-building-talking-speaker-mobile-phone_23-2147972815.jpg",          imageAlt: "Portrait of Lana Ali"},
        {
          id: "3",          name: "Omar Hassan",          handle: "@OmarHassanConst",          testimonial: "Their custom PVC solutions are a game-changer. Excellent craftsmanship and the team was very communicative throughout the entire process.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-short-curly-hair-making-frame-with-fingers-looking-through-this-frame-smiling-cheerfully-standing-pink-wall_141793-29278.jpg",          imageAlt: "Portrait of Omar Hassan"},
        {
          id: "4",          name: "Sarah Jafar",          handle: "@SarahJafarHomes",          testimonial: "From consultation to final installation, Daroj PVC was a pleasure to work with. Our new windows look fantastic and are so energy-efficient!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-businessman-happy-expression_1194-3548.jpg",          imageAlt: "Portrait of Sarah Jafar"},
        {
          id: "5",          name: "Faris Murad",          handle: "@FarisMuradDev",          testimonial: "We've used Daroj PVC for several development projects. Their consistency in quality and commitment to deadlines makes them our go-to partner.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-smiling-with-top-hat-thumbs-up_1187-1549.jpg",          imageAlt: "Portrait of Faris Murad"},
      ]}
      showRating={true}
      title="What Our Clients Say"
      description="Hear directly from homeowners and commercial partners who have experienced the Daroj PVC difference – quality craftsmanship and reliable service."
      tag="Client Feedback"
      tagAnimation="slide-up"
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Erbil Developers Group",        "Kurdish Homes Ltd.",        "Al-Amal Construction",        "Superior Building Materials",        "Modern Architectural Designs",        "Cityscape Real Estate",        "Green Build Solutions"]}
      title="Trusted by Industry Leaders"
      description="We're proud to partner with leading suppliers and developers, a testament to our quality and reliability in the Erbil construction sector."
      tag="Our Collaborators"
      tagAnimation="slide-up"
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "What types of materials do you specialize in?",          content: "Daroj PVC specializes in custom PVC and aluminum doors, windows, and related installation services. We ensure high-quality, durable materials for all our projects."},
        {
          id: "q2",          title: "Do you offer custom designs for doors and windows?",          content: "Yes, we offer bespoke design services to create custom PVC and aluminum doors and windows that perfectly match your aesthetic and functional requirements."},
        {
          id: "q3",          title: "What is your service area?",          content: "We primarily serve the greater Erbil region, including residential and commercial properties within the city and surrounding areas."},
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common inquiries about our services, products, and renovation process. Your clarity is our priority."
      tag="Common Questions"
      tagAnimation="slide-up"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get Your Free Quote"
      description="Ready to transform your property? Contact Daroj PVC today for a personalized consultation and a no-obligation quote. Let's build together."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your project...",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/vertical-shot-transparent-doors-commercial-building_181624-21940.jpg"
      imageAlt="Modern building exterior with large windows"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Daroj PVC"
      copyrightText="© 2024 Daroj PVC. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"},
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
        {
          icon: Linkedin,
          href: "#",          ariaLabel: "LinkedIn"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
