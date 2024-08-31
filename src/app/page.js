import Header from "@/components/Header";
import 'bootstrap/dist/css/bootstrap.css'
import 'remixicon/fonts/remixicon.css'
import Hero from "@/components/Hero";
import Brand from "@/components/Brand";
import Goal from "@/components/Goal";
import Feature from "@/components/Feature";
import Categories from "@/components/Categories";
import Deal from "@/components/Deal";
import BestProduct from "@/components/BestProduct";
import NewsArea from "@/components/NewsArea";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Brand/>
      <Goal/>
      <Feature/>
      <Categories/>
      <Deal/>
      <BestProduct/>
      <NewsArea/>
      <Subscription/>
      <Footer/>
    </>  
    );
}
