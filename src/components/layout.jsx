import Navbar from "./navbar";
import HeroContent from "./heroContent";

export default function Layout() {
  return (
    <>
      <Navbar />
      <HeroContent src="/logo.png" name="Kristanto Wibowo" balance="150000" />
    </>
  );
}
