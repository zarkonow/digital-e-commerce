import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="bg-gray-400 p-10 px-28 lg:px=36" >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20">
        <div>
          <h2 className="text-5xl">Speed Up your Creative workflow</h2>
          <p className="text-gray-200 mt-5">
            Join a growing family of 43,433 designers, creators and makers from
            around the World
          </p>
          <div className="flex gap-5 mt-8">
          <Button>Explore</Button>
          <Button className='bg-red-400 hover:bg-red-500 text-black'>Sell</Button>
          </div>
        </div>
        <div className="justify-center items-center ">
            <Image src={'/PC-img.avif'} alt='pc' width={300} height={300}
            className="scale-x-[1]"
            />
        </div>
      </div>
    </div>
  );
}

export default Hero;
