import Image from 'next/image';
import { IoLogoInstagram } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center sm:flex-row">
      <div className="w-[50%] flex justify-center items-center">
        <Image
          className="md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]"
          src="/Growxth_logo.png"
          width={500}
          height={500}
          alt="Growxth_logo"
        />
      </div>
      <div className="py-4 sm:py-16 lg:py-12 md:w-[50%]">
        <div className="container px-4 text-left lg:px-4 lg:pr-28">
          <div className="space-y-1 lg:max-w-[450px] md:max-w-[350px]">
            <h3 className="text-sm tracking-wide text-black md:text-base lg:text-xl/relaxed dark:text-white">
              Get ready for
            </h3>
            <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl md:text-4xl lg:text-6xl">
              something thrilling!
            </h1>
            <h2 className="pt-2 text-sm tracking-tight text-black sm:text-xl md:text-lg lg:text-xl ">
              We&apos;re Sri Lanka&apos;s 1st Revenue-Based Marketing Firm, once
              known as IDES, but now sporting a snazzy new identity - GROWXTH!
            </h2>
            <h2 className="pt-2 text-sm tracking-tight text-black sm:text-xl md:text-lg lg:text-xl ">
              While under our old alias IDES, we are going to be the masterminds
              behind launching fresh brands in the realms of tech, real estate,
              e-commerce, and finance & investments.
            </h2>
            <h2 className="pt-2 text-sm tracking-tight text-black sm:text-xl md:text-lg lg:text-xl ">
              This calls for more web launches and a heap of elbow grease. Keep
              that excitement alive!
            </h2>
            {/* <p className="text-[8px] mx-auto font-bold text-black md:text-[10px]/relaxed lg:text-[14px]/relaxed dark:text-black">
              Peek at our spiffy new website transformation! Brace yourself for
              the grand reopening - it&apos;s going to be legendary!
            </p> */}
            <div className="flex pt-5">
              <Link
                href="https://www.instagram.com/grow.xth?igsh=MWY3ZTBiMDlia2hkbg=="
                target="_blank"
                className="flex items-center justify-center"
              >
                <IoLogoInstagram size={25} color="black" />
              </Link>
              <Link
                href="https://www.facebook.com/growxth1/"
                target="_blank"
                className="flex items-center justify-center ml-2"
              >
                <FaFacebookF size={20} color="black" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/growxth"
                target="_blank"
                className="flex items-center justify-center ml-2"
              >
                <FaLinkedin size={22} color="black" />
              </Link>
              {/* <div className="flex items-center justify-center ml-2 target='_blank'">
                <MdEmail size={20} color='white' />
              </div> */}
              <p className="flex ml-6 text-black ju">www.growxth.com</p>
            </div>
            <p className="flex pt-5 text-sm text-black ju">
              14 Sir Baron Jayathilake Mawatha, Colombo 00100
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
