import Intro from "@components/Intro";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 w-full">
      <Intro/>
    </div>
  );
}
