import Image from "next/image";
import Link from "next/link";

export default function Kewl() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-primary text-white gap-5">
      {/* 
      Write something unique about you here! 
      It could be a club you're part of, a weird skill you have, or something special that happened to you.
      Feel free to put links, images, whatever! 
      Don't worry about styling- we aren't grading you on this- it's just to get to know you better! :) 
      */}
    

      <div className="min-h-screen flex flex-col justify-center items-center bg-primary text-white gap-5 w-96">
        <b>I built a website to host my friend&apos;s secret santa game on! The main issue it was trying to solve 
          was blind draws so that everyone would be able to play. Then I added features such as video upload
          and play back and automatic assignments.</b>
        <Image
          src="/sample.png"
          alt="homepage"
          width={400}
          height={400}
        />  
        <a href="https://www.ascsecretsanta.xyz/" target="_blank" className="text-white-500 underline">click here if you want to check it out!</a>
        <Link href="/" className="bg-white text-black px-4 py-2 rounded">Back home</Link>
      </div>
    </div>
  );
}
