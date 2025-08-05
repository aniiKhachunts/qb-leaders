import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CtaSection.jsx";

function Home() {
    return (
        <>
            <Hero/>
            <ServicesSection/>
            <WhyChooseUs/>
            <StatsSection/>
            <Testimonials/>
            <CTASection/>
        </>
    );
}

export default Home;
