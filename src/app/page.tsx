import AboutSection from "@/components/(About)/AboutHome/About";
import ContactSection from "@/components/(contact)/ContactHome/Contact";
import Hero from "@/components/(Home)/Hero/Hero";


export default function Home() {
  return (
    <div>
      
      <Hero />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
