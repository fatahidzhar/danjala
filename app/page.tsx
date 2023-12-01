
import FooterComponents from "@/components/FooterComponents";
import HeroComponents from "@/components/HeroComponents";
import NavigationComponents from "@/components/NavigationComponents";
import ServiceComponents from "@/components/ServiceComponents";

export default function Home() {
  return (
    <section>
      <NavigationComponents />
      <HeroComponents />
      <ServiceComponents />
      <FooterComponents />
    </section>
  )
}
