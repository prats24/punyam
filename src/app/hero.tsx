"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import {CardDefault} from "./mandir"

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8" style={{backgroundImage: 'url("/image/coverphoto.png")', backgroundSize: 'cover'}}>
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h2" color="white" className="mb-4">
              Discover popular <br /> temples around you <br />
              and offer digital prayers
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Our app is here to empower you on your quest for knowledge,
              anytime and anywhere.
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                COMING SOON
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                DOWNLOAD
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/androidONE.png"
            alt="team work"
            style={{backgroundColor:'transparent'}}
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-6 lg:w-12/12 mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div style={{width:'100%'}}>
          <Typography variant="h4" color="blue-gray" className="mb-3 justify-center items-center">
            Onboarded Temples
          </Typography>
          <div className="flex flex-col gap-4 md:mb-2 md:w-12/12 lg:w-12/12 md:flex-row" style={{maxWidth:'100%'}}>
            <div className="lg:w-3/12">
              <CardDefault/>
            </div>
            <div className="lg:w-3/12">
              <CardDefault/>
            </div>
            <div className="lg:w-3/12">
              <CardDefault/>
            </div>
            <div className="lg:w-3/12">
              <CardDefault/>
            </div>
          </div>
          {/* <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond
          </Typography> */}
        </div>
        
      </div>
      
    </div>
  );
}
export default Hero;
