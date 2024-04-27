import Image from "next/image";
import '../css/global.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import HeroButton from "@/ui/HeroButton";

export default function Home() {
  return (
    <main>
      <h1>Разработка</h1>
      <HeroButton />
    </main>
  );
}
