import { Krub } from "next/font/google";

const krubItalic = Krub({
  variable: "--font-krub-bold-italic",
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* rythmhacks title with glow */}
        <div className="-mb-4 relative w-fit">
          <h1 className="title-gradient relative inline-block text-transparent bg-clip-text font-title text-[128px]">
            RythmHacks
          </h1>
          <h1 className="title-gradient absolute inset-0 blur-md inline-block text-transparent bg-clip-text font-title text-[128px]">
            RythmHacks
          </h1>
        </div>

        {/* subtitle */}
        <div>
          <h4 className={`${krubItalic.className} text-[40px] text-white`}>
            Experience the magic of tech
          </h4>
        </div>
      </div>

      <div>
  
      </div>
    </>
  );
}
