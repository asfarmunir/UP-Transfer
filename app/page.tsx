"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { IoMenu } from "react-icons/io5";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "@/locales/en/translation.json";
import translationES from "@/locales/es/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language from localStorage
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default function Home() {
  const { i18n } = useTranslation();

  const links = [
    { name: "Home", href: "home" },
    { name: "Personal", href: "personal" },
    { name: i18n.t("business"), href: "business" },
    { name: i18n.t("contact"), href: "contact" },
    { name: "FAQs", href: "faqs" },
  ];
  const howItWorks = [
    {
      title: "Sign Up",
      description: "Download the Up Tranfer app and create your account.",
      image: "/signup.svg",
    },
    {
      title: "Verification",
      description: "Verify your identity quickly to unlock full access.",
      image: "/verification2.svg",
    },
    {
      title: "Deposit",
      description: "Add funds securely to your account for transactions.",
      image: "/withdraw.svg",
    },
    {
      title: "Withdraw",
      description: "Easily withdraw your funds anytime with a few clicks.",
      image: "/withdraw.svg",
    },
    {
      title: "Transfer",
      description: "Send money to other users instantly and hassle-free",
      image: "/transfer.svg",
    },
    {
      title: "Convert",
      description: "Convert currencies seamlessly within the app in seconds.",
      image: "/convert.svg",
    },
  ];
  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    console.log(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLanguageChange = (language: string) => {
    localStorage.setItem("i18nextLng", language); // Store the language
    i18n.changeLanguage(language); // Switch language
  };
  return (
    <main className="flex min-h-screen flex-col items-center  pt-4 2xl:pt-6 ">
      <nav className=" w-full px-4 md:px-0 max-w-6xl 2xl:max-w-7xl flex items-center justify-between ">
        <Image
          src="/logo.svg"
          alt="pic"
          width={100}
          height={100}
          className="
        w-[130px]  2xl:w-[175px] "
        />
        <div className=" bg-[#11615CCC] p-2 2xl:p-2.5 gap-14 2xl:gap-20 rounded-full flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4">
            {links.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className={`
                ${
                  index === 0
                    ? "text-[#02282B] bg-white font-semibold"
                    : "text-white"
                }
                    p-2 px-3 2xl:py-2.5 2xl:px-3.5  rounded-full text-xs 2xl:text-sm  `}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="flex items-center pr-3 md:pr-0 gap-4 md:gap-2 ">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`
                  inline-flex items-center justify-center gap-2
                 bg-[#02282B] text-white  p-2 px-3 2xl:py-3 2xl:px-3.5 rounded-full text-xs 2xl:text-sm  `}
              >
                <Image
                  src="/global.svg"
                  alt="pic"
                  width={23}
                  height={23}
                  className=" "
                />
                <span className="uppercase">{i18n.language}</span>
                <Image
                  src="/arrow.svg"
                  alt="pic"
                  width={13}
                  height={13}
                  className=" "
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#02282B] border-none p-2">
                <DropdownMenuItem
                  onClick={() => handleLanguageChange("en")}
                  className="text-white hover:bg-emerald-600 cursor-pointer "
                >
                  English (EN)
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleLanguageChange("es")}
                  className="text-white hover:bg-emerald-600 cursor-pointer "
                >
                  Spanish (SPA)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger className="block md:hidden">
                <IoMenu className="text-white text-2xl 2xl:text-3xl " />
              </SheetTrigger>
              <SheetContent className="p-3 border-none">
                <Image
                  src="/logo.svg"
                  alt="pic"
                  width={100}
                  height={100}
                  className="
        w-[130px]  2xl:w-[175px] "
                />
                <div className=" w-full p-5">
                  <div className="flex flex-col items-center justify-center gap-4">
                    {links.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(link.href)}
                        className={`
                ${
                  index === 10
                    ? "text-white bg-[#02282B] font-bold"
                    : "text-[#02282B] font-bold"
                }
                    p-2 px-3 2xl:py-2.5 2xl:px-3.5  rounded-full text-xs 2xl:text-sm  `}
                      >
                        {link.name}
                      </button>
                    ))}
                    <button
                      className={`
                
                 bg-[#02282B] text-white mx-auto  py-3 px-3 2xl:py-3 2xl:px-3.5 rounded-full text-xs 2xl:text-sm  `}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <button
              className={`
                hidden md:block
                 bg-[#02282B] text-white  p-2.5 px-3 2xl:py-3 2xl:px-3.5 rounded-full text-xs 2xl:text-sm  `}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
      <div
        id="home"
        className=" w-full  flex  items-center justify-center overflow-hidden  relative "
      >
        <Image
          src="/hero-bg2.svg"
          alt="pic"
          width={1000}
          height={1000}
          className=" absolute w-[800px]  right-0 bottom-0 "
        />
        <Image
          src="/hero-bg1.svg"
          alt="pic"
          width={1000}
          height={1000}
          className=" absolute w-[1400px]  left-0 bottom-0 "
        />
        <div className=" max-w-6xl w-full flex-col md:flex-row px-5 md:px-0 pt-12 pb-5  2xl:max-w-7xl flex items-center justify-between">
          <div className="">
            <h2 className=" max-w-[40rem] text-4xl 2xl:text-5xl mb-4 font-ubuntu font-bold leading-snug 2xl:leading-snug ">
              <span className=" relative">
                {i18n.t("secure")}
                <Image
                  src="/line-vector.svg"
                  alt="pic"
                  width={170}
                  height={170}
                  className=" absolute -bottom-2 "
                />
              </span>{" "}
              {i18n.t("hero")}
            </h2>
            <p className=" font-normal max-w-2xl tracking-wide leading-loose mb-8">
              {i18n.t("heroDescription")}
            </p>
            <div className="flex items-center gap-6">
              <button className=" py-4 font-semibold px-12 text-sm 2xl:text-base text-white rounded-full bg-[#02282B]">
                {i18n.t("join")}
              </button>
              <button className=" py-3.5 font-bold px-12 text-sm 2xl:text-base  text-[#02282B] rounded-full border-[3px] border-[#02282B]">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/hero.svg"
              alt="pic"
              width={500}
              height={500}
              className=" w-[430px] 2xl:w-[530px] "
            />
          </div>
        </div>
      </div>
      <div
        id="business"
        className=" w-full max-w-6xl 2xl:max-w-7xl px-5 md:px-0 flex flex-col items-center py-12 2xl:py-16 space-y-4 "
      >
        <div className="flex items-center  bg-[#C7F8ED] rounded-full px-6 py-2 text-sm">
          <Image
            src="/fire.svg"
            alt="pic"
            width={25}
            height={25}
            className=" "
          />
          <p className="font-bold">About Up Transfer</p>
        </div>
        <h2 className=" text-4xl font-bold">What Is Up Transfer?</h2>
        <p className=" max-w-2xl 2xl:max-w-3xl text-[#666666] font-semibold leading-snug text-center">
          Our leading financial technology makes international and local
          transfer simple and secure! Pay suppliers worldwide, send money to
          your own abroad bank account and take advantage of multi fiat and
          cryptocurrency accounts.{" "}
        </p>
        <div className=" py-8 grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
          <div className="border border-slate-200/70 rounded-2xl p-6  gap-6 flex items-center">
            <Image
              src="/verification.svg"
              alt="pic"
              width={60}
              height={60}
              className=" "
            />
            <div className="flex flex-col ">
              <h2 className="text-xl font-bold mb-2">
                Seamless Identity Verification
              </h2>
              <p className=" text-primary text-sm 2xl:text-base font-semibold">
                Verify identities easily with advanced KYC, ensuring compliance
                and reducing fraud.
              </p>
            </div>
          </div>
          <div className="border border-slate-200/70 rounded-2xl p-6  gap-6 flex items-center">
            <Image
              src="/secure.svg"
              alt="pic"
              width={60}
              height={60}
              className=" "
            />
            <div className="flex flex-col ">
              <h2 className="text-xl font-bold mb-2">
                Secure Banking Transfers Solutions
              </h2>
              <p className=" text-primary text-sm 2xl:text-base font-semibold">
                Streamline global transactions with our banking integration and
                multi-currency support.
              </p>
            </div>
          </div>
          <div className="border border-slate-200/70 rounded-2xl p-6  gap-6 flex items-center">
            <Image
              src="/conversion.svg"
              alt="pic"
              width={60}
              height={60}
              className=" "
            />
            <div className="flex flex-col ">
              <h2 className="text-xl font-bold mb-2">
                The Easiest Crypto-Fiat-Crypto Convertions{" "}
              </h2>
              <p className=" text-primary text-sm 2xl:text-base font-semibold">
                Crypto-Fiat-Crypto convertions in real time with low fee
                commissions.
              </p>
            </div>
          </div>
          <div className="border border-slate-200/70 rounded-2xl p-6  gap-6 flex items-center">
            <Image
              src="/compliance.svg"
              alt="pic"
              width={60}
              height={60}
              className=" "
            />
            <div className="flex flex-col ">
              <h2 className="text-xl font-bold mb-2">Compliance Made Easy </h2>
              <p className=" text-primary text-sm 2xl:text-base font-semibold">
                Simplify compliance with integrated KYC, KYT and KYB in one
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="faqs"
        className=" w-full  flex items-center justify-center overflow-hidden bg-[#11615C] relative "
      >
        <Image
          src="/bg_vector.svg"
          alt="pic"
          width={1000}
          height={1000}
          className=" absolute w-[420px]  right-8 -top-16 "
        />
        <Image
          src="/bg_vector2.svg"
          alt="pic"
          width={1000}
          height={1000}
          className=" absolute w-[420px]  left-6 -bottom-10 "
        />
        <div className=" w-full max-w-6xl px-5 md:px-0 2xl:max-w-7xl  flex flex-col items-center py-12 2xl:py-16 space-y-4 ">
          <h2 className=" text-4xl 2xl:text-5xl font-bold text-white">
            {i18n.t("howItWorks")}{" "}
            <span className="relative">
              {i18n.t("howItWork2")}
              <Image
                src="/elipse.svg"
                alt="pic"
                width={50}
                height={50}
                className=" absolute w-[35px] 2xl:w-[50px] -top-1 right-12 2xl:right-[4.2rem] "
              />
            </span>
          </h2>
          <p className=" max-w-lg  text-white font-thin leading-snug text-center">
            Businesses generally promote their brand, products, and services by
            identifying audience.
          </p>
          <div className=" py-8 grid grid-cols-1 gap-8 2xl:gap-12 md:grid-cols-2 lg:grid-cols-3 w-full">
            {howItWorks.map((work, index) => (
              <div key={index} className="  z-50  p-8 rounded-lg bg-[#C7F8ED]">
                <Image
                  src={work.image}
                  alt="pic"
                  width={60}
                  height={60}
                  className=" mb-5 mt-2 "
                />
                <p className="text-lg 2xl:text-xl mb-4 font-semibold">
                  {work.title}
                </p>
                <p className="text-xs 2xl:text-sm mb-4">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full max-w-6xl 2xl:max-w-7xl px-5 md:px-0 flex flex-col items-center py-16 2xl:py-20 space-y-20 2xl:space-y-24 ">
        <div className="flex items-center flex-col-reverse md:flex-row justify-center gap-8  w-full">
          <Image
            src="/feature1.svg"
            alt="pic"
            width={550}
            height={550}
            className="  "
          />
          <div className="space-y-2">
            <Image
              src="/highlight.svg"
              alt="pic"
              width={200}
              height={200}
              className=" "
            />
            <h2 className="text-3xl 2xl:text-4xl font-bold">
              Robust <span className="text-[#11615C]">Identity</span>{" "}
              Verification
            </h2>
            <p className="font-semibold text-primary pb-4">
              Get verified through a secure, multi-step verification process,
              ensuring complete compliance and security
            </p>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-2 w-fit">
              <Image
                src="/check.svg"
                alt="pic"
                width={27}
                height={27}
                className=" "
              />
              <p className=" text-primary">Advanced KYC verification</p>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-2 w-fit">
              <Image
                src="/check.svg"
                alt="pic"
                width={27}
                height={27}
                className=" "
              />
              <p className=" text-primary">Real-time identity checks</p>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-2 w-fit">
              <Image
                src="/check.svg"
                alt="pic"
                width={27}
                height={27}
                className=" "
              />
              <p className=" text-primary">Compliance with global standards</p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row-reverse justify-center gap-8  w-full">
          <Image
            src="/feature2.svg"
            alt="pic"
            width={550}
            height={550}
            className="  "
          />
          <div className="space-y-2">
            <Image
              src="/highlight.svg"
              alt="pic"
              width={200}
              height={200}
              className=" "
            />
            <h2 className="text-3xl 2xl:text-4xl font-bold">
              <span className="text-[#11615C]">Comprehensive</span> Financial
              Operations{" "}
            </h2>
            <p className="font-semibold text-primary pb-4">
              Manage your finances with ease—deposit, withdraw, transfer, and
              convert currencies, including cryptocurrencies, all within the app
            </p>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-2 w-fit">
              <Image
                src="/check.svg"
                alt="pic"
                width={27}
                height={27}
                className=" "
              />
              <p className=" text-primary">
                Support for multiple fiat currencies
              </p>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-2 w-fit">
              <Image
                src="/check.svg"
                alt="pic"
                width={27}
                height={27}
                className=" "
              />
              <p className=" text-primary">Instant deposits and withdrawals</p>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-2 w-fit">
              <Image
                src="/check.svg"
                alt="pic"
                width={27}
                height={27}
                className=" "
              />
              <p className=" text-primary">
                Cryptocurrency trading and management
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row justify-center gap-12  w-full">
          <Image
            src="/feature3.svg"
            alt="pic"
            width={550}
            height={550}
            className="  "
          />
          <div className="space-y-2">
            <Image
              src="/highlight.svg"
              alt="pic"
              width={200}
              height={200}
              className=" "
            />
            <h2 className="text-3xl 2xl:text-4xl font-bold">
              Seamless Local and International Transfers
            </h2>
            <p className="font-semibold text-primary pb-4">
              Transfer to bank accounts effortlessly for streamlined financial
              operations and enhanced convenience
            </p>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-2 w-fit">
              <Image
                src="/check.svg"
                alt="pic"
                width={27}
                height={27}
                className=" "
              />
              <p className=" text-primary">Secure bank transfers</p>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-2 w-fit">
              <Image
                src="/check.svg"
                alt="pic"
                width={27}
                height={27}
                className=" "
              />
              <p className=" text-primary">Multi fiat and cryptocurrency </p>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-2 w-fit">
              <Image
                src="/check.svg"
                alt="pic"
                width={27}
                height={27}
                className=" "
              />
              <p className=" text-primary">
                Easy transfers between app and bank accounts
              </p>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-2 w-fit">
              <Image
                src="/check.svg"
                alt="pic"
                width={27}
                height={27}
                className=" "
              />
              <p className=" text-primary">Low fee commissions</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className=" w-full max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row items-center justify-evenly pb-12 md:py-16 px-5 md:px-0 gap-12 2xl:gap-20  "
      >
        <Image
          src="/contact.svg"
          alt="pic"
          width={550}
          height={550}
          className=" "
        />
        <div className=" space-y-4 w-full max-w-lg">
          <p className="text-primary-50 font-semibold">CONTACT US</p>
          <h1 className="text-3xl 2xl:text-4xl font-semibold pb-4">
            Let’s Collaborate
          </h1>

          <div className="space-y-2">
            <label htmlFor="name" className="2xl:text-lg font-semibold ">
              Full Name
            </label>
            <input
              placeholder="Input Your Name"
              type="text"
              id="name"
              className="w-full border border-[#9295994b] bg-[#F5F6F8] rounded-xl px-4 p-2 2xl:p-3 2xl:px-6"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="2xl:text-lg font-semibold ">
              Email
            </label>
            <input
              placeholder="Input Your Email"
              type="email"
              id="email"
              className="w-full border border-[#9295994b] bg-[#F5F6F8] rounded-xl px-4 p-2 2xl:p-3 2xl:px-6"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="2xl:text-lg font-semibold ">
              Message
            </label>
            <textarea
              placeholder="Share your thoughts..."
              id="name"
              className="w-full h-32 border border-[#9295994b] bg-[#F5F6F8] rounded-xl px-4 p-2 2xl:p-3 2xl:px-6"
            />
          </div>
          <button className=" bg-[#02282B] rounded-full p-4 px-10 text-sm text-white font-semibold">
            Send Message
          </button>
        </div>
      </div>
      <footer className=" bg-[#161010] pt-20 pb-8 px-6 md:px-32 w-full">
        <div className="flex items-start flex-col md:flex-row">
          <div className=" mr-12 2xl:mr-20 mb-5 md:mb-0">
            <h3 className="text-3xl mb-3 2xl:text-4xl font-bold text-white">
              UP TRANSFER
            </h3>
            <p className="text-primary max-w-sm mb-4 ">
              This is a big one and I consider it one of the most important
              things for a business.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/fb.svg"
                alt="pic"
                width={35}
                height={35}
                className=" cursor-pointer "
              />
              <Image
                src="/ig.svg"
                alt="pic"
                width={35}
                height={35}
                className=" cursor-pointer "
              />
              <Image
                src="/x.svg"
                alt="pic"
                width={35}
                height={35}
                className=" cursor-pointer "
              />
              <Image
                src="/in.svg"
                alt="pic"
                width={35}
                height={35}
                className=" cursor-pointer "
              />
            </div>
          </div>
          <div className=" flex flex-col mr-12">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <Link href="home" className="text-primary mb-3 font-semibold">
              Home
            </Link>
            <Link href="home" className="text-primary mb-3 font-semibold">
              Working
            </Link>
            <Link href="home" className="text-primary mb-3 font-semibold">
              Features
            </Link>
          </div>
          <div className=" flex flex-col">
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <Link href="home" className="text-primary mb-3 font-semibold">
              About
            </Link>
            <Link href="home" className="text-primary mb-3 font-semibold">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between mt-16">
          <p className="text-white">Copyright © 2024 DTB</p>
          <p className="text-white">All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}
