import { useState } from "react";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import RegistrationForm from "@/components/RegistrationForm";
import { HeroSection, ProblemSection, NichesSection } from "@/components/sections/HeroAndProblem";
import { BenefitsSection, ComparisonSection } from "@/components/sections/BenefitsAndComparison";
import { HybridSection, ExpertiseSection } from "@/components/sections/HybridAndExpertise";
import { TestDriveSection, TestimonialsSection, FAQSection, FinalCTASection } from "@/components/sections/TestDriveAndFAQ";

export default function Index() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <HeroSection />
      <ProblemSection />
      <NichesSection setIsFormOpen={setIsFormOpen} />
      <BenefitsSection />
      <ComparisonSection />
      <HybridSection />
      <ExpertiseSection />
      <TestDriveSection setIsFormOpen={setIsFormOpen} />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection setIsFormOpen={setIsFormOpen} />
      <WhatsAppWidget 
        phoneNumber="+996500113974" 
        message="Здравствуйте, хотел(а) бы узнать подробнее о чат-боте." 
      />
      <RegistrationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
}