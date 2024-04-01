import Image from "next/image";
import styles from "./page.module.css";

import {WelcomeBlock} from "../src/components/WelcomeBlock/WelcomeBlock";
import {Advantage} from "../src/components/Advantage/Advantage";
import { FeedBack } from "../src/components/Feedback/FeedBack";
import {Faq} from "../src/components/Faq/Faq";

export default function Home() {
  return (
    <main>
      <WelcomeBlock/>
      <Advantage/>
      <FeedBack />
      <Faq />
    </main>
  );
}
