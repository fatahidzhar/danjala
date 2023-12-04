
import FooterComponents from "@/components/FooterComponents";
import HeroComponents from "@/components/HeroComponents";
import NavigationComponents from "@/components/NavigationComponents";
import ServiceComponents from "@/components/ServiceComponents";
import Provider from "./Provider";

export default function Home() {
  return (
    <Provider>
      <NavigationComponents />
      <HeroComponents />
      <ServiceComponents />
      <FooterComponents />
    </Provider>
  )
}
