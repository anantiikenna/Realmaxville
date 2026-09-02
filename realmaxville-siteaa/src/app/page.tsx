"use client";

import React from "react";
import Hero from "@/components/Hero";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ServicesShowcase from "@/components/ServicesShowcase";
import FeaturedProjects from "@/components/FeaturedProjects";
import CostEstimator from "@/components/CostEstimator";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import LeadershipTeam from "@/components/LeadershipTeam";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <BeforeAfterSlider />
      <ServicesShowcase />
      <FeaturedProjects />
      <CostEstimator />
      <ProcessTimeline />
      <Testimonials />
      <LeadershipTeam />
      <ContactForm />
    </>
  );
}
