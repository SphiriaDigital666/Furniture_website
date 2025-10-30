import Image from "next/image";
import Aboutus from "./component/Buttons/aboutus";
import Section03 from "./component/Home/Section03";
import Section05 from "./component/Home/Section05";
import Section06 from "./component/Home/Section06";
import Section07 from "./component/Home/Section07";
import Section08 from "./component/Home/Section08";
import Section04 from "./component/Home/Section04";
import Section01 from "./component/Home/Section01";
import Section02 from "./component/Home/Section02";
import Navbar from "./component/Navbar/Navbar";
import Tooltip from "./component/Tooltip/Tooltip";
import Section09 from "./component/Home/Section09";
import Footer from "./component/Footer/Footer";
export default function Home() {
  return (
    <div>
      <div className="containerpaddin container mx-auto ">
        <Navbar />
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
        <Section08 />
        <Section09 />
      </div>
      <Footer />
    </div>
  );
}
