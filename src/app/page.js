import Footer from "@/component/Footer";
import PopularProducts from "@/component/PopularProducts";

export default function Home() {
  return (
   <div className="grid justify-center items-center">
      <PopularProducts/>
      <Footer/>
   </div>
  );
}
