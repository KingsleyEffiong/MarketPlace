import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import MarketPlaceCategory from "@/components/MarketPlaceCategory";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarketPlaceCategory />
      <FeaturedProducts />
      <Footer />
    </>
  );
}
