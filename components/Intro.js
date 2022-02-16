import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Intro() {
  return (
    <div className="relative bg-background w-full rounded-md border-backgroundShade border">
      <div className="mx-auto pt-16 pb-20 text-center lg:py-24 lg:text-left">
        <div className="px-2 lg:w-1/2 sm:px-4 xl:pr-8">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-primary">
            <span className="block xl:inline">Hello! my name is</span>{" "}
            <span className="block text-secondary xl:inline">Yong</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-primaryLight sm:text-xl md:mt-5 md:max-w-3xl">
            I am a full stack web developer capable of creating MERN
            applications.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-x-2">
            {/* mongo */}
            <div className="flex flex-col text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-primaryShade items-center">
              <Image
                className="h-12 object-cover"
                src="https://res.cloudinary.com/yongstalee/image/upload/v1644973772/portfolio/MongoDB_kijpbf.png"
                alt=""
              />
              <span>M</span>
            </div>

            {/* express */}
            <div className="flex flex-col text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-primaryShade items-center">
              <Image
                className="h-12 object-cover"
                src="https://res.cloudinary.com/yongstalee/image/upload/v1644973772/portfolio/Express_wujrfp.png"
                alt=""
              />
              <span>E</span>
            </div>

            {/* react */}
            <div className="flex flex-col text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-primaryShade items-center">
              <Image
                className="h-12 object-cover"
                src="https://res.cloudinary.com/yongstalee/image/upload/v1644973772/portfolio/React_d4ohvz.png"
                alt=""
              />
              <span>R</span>
            </div>

            {/* node */}
            <div className="flex flex-col text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-primaryShade items-center">
              <Image
                className="h-12 object-cover"
                src="https://res.cloudinary.com/yongstalee/image/upload/v1644973772/portfolio/Node_rvzgam.png"
                alt=""
              />
              <span>N</span>
            </div>
          </div>
          {/* <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-5"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-5"
              >
                Live demo
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="relative w-full h-64 mt-2 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <Image
          className="absolute inset-0 w-full h-full object-cover rounded-xl border border-secondary"
          src="https://res.cloudinary.com/yongstalee/image/upload/v1644951720/portfolio/KakaoTalk_20210717_152946259_01_jh7uwy.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
