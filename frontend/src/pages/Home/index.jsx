import HeroBooking from "./HeroBooking/";
import HeroCard from "./HeroCards";
import HeroSecurity from "./HeroSecurity";
import HeroSteps from "./HeroSteps";

export default function Home() {
  return (
    <>
      <HeroBooking />
      <HeroCard />
      <HeroSecurity />
      <HeroSteps/>
    </>
  );
}
