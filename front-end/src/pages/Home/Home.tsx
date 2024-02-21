import Activity from "../../components/activity/Activity";
import Brands from "../../components/brands/Brands";
import Hero from "../../components/hero/Hero";
import SecondaryHero from "../../components/hero/SecondaryHero";
import JoinUs from "../../components/join-us/JoinUs";
import OurTeam from "../../components/our-team/OurTeam";
import Testimonials from "../../components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Activity />
      <SecondaryHero />
      <Testimonials />
      <OurTeam />
      {/* <JoinUs /> */}
    </>
  );
}
