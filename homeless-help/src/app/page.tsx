import Image from "next/image";
import Navbar from "./components/Navbar";
import pattern from '../../public/assets/pattern.png'
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Navbar />
      
      <div className="flex h-[80vh]">
        <div className="w-1/3 h-full">
        <Image className=" m-24" src={pattern} width={300} height={200} alt="Pattern"/>

        </div>
       <div className="w-1/3 h-full flex flex-col items-center justify-center">
       <h1 className="text-center text-main text-6xl m-8">Homeless Help</h1>
       <p className="m-8 text-lg text-center">Some description goes here or a catchy catchphrase goes here.</p>
       <Link href='/getstarted'><button className="bg-black text-white animate-bounce p-6 px-12 m-8 rounded-full">Get Started → </button></Link>

       </div>
        <div className="w-1/3 h-full flex items-end justify-end ">
        <Image className=" m-24" src={pattern} width={300} height={200} alt="Pattern" />

        </div>
       

      </div>
      
    </main>
  );
}
