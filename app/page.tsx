import Image from "next/image";
import Header from "./components/header/Header";
import Countdown from "./components/countdown/Countdown";
import Party from "./components/party/Party";
import Location from "./components/location/Location";
import Gifts from "./components/gifts/Gifts";
import AssistanceBtn from "./components/assistanceBtn/AssistanceBtn";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-[700px] min-h-screen">
      <Header />
      <Countdown />
      <Location />
      <Party />
      <Gifts />
      <AssistanceBtn />
      <Footer />
    </main>
  );
}
