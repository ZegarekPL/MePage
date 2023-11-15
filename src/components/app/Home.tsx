import Image from "next/image";
import Mountain from "@/assets/app/mountain.jpg";
import Navbar from "@/components/common/navbar/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <div className="h-[100vh] z-10">
        <Image
          src={Mountain}
          alt="Mountain"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <Navbar />
        <div className="px-20 text-white">
          <h1>Welcome</h1>
        </div>
      </div>
    </main>
  );
}
