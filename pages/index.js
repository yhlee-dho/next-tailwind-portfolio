import Intro from "@components/Intro";
import Feature from "@components/Feature";
import Image from "next/image";
import Projects from "@components/Projects";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 w-full">
      <Intro/>
      <Feature/>
      <Projects/>
    </div>
  );
}
