import {
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { features } from "../lib/websiteData";
import Image from "next/image";

// const features = [
//   {
//     name: "Mongo DB",
//     description:
//       "Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.",
//     icon: GlobeAltIcon,
//   },
//   {
//     name: "Express",
//     description:
//       "Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.",
//     icon: ScaleIcon,
//   },
//   {
//     name: "React",
//     description:
//       "Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.",
//     icon: LightningBoltIcon,
//   },
//   {
//     name: "Node",
//     description:
//       "Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.",
//     icon: MailIcon,
//   },
// ];

export default function Feature() {
  return (
    <div className="bg-background overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-backgroundComplement"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Tech Stack
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-20 rounded-md bg-backgroundShade">
                    {/* <div className="flex items-center justify-center"> */}
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                    <img
                      className="h-12 object-cover mx-4"
                      src={feature.src}
                      alt=""
                    />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-secondary">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-primaryLight">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
