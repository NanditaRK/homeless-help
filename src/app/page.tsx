import Image from "next/image";
import Navbar from "./components/Navbar";
import pattern from '../../public/assets/pattern.png'
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Navbar />
      
      <div className="flex h-[80vh]">
        <div className="lg:w-1/3 h-full">
          <Image className="hidden z-0 lg:flex m-24" src={pattern} width={300} height={200} alt="Pattern"/>

        </div>
       <div className="lg:w-1/3 mx-auto h-full flex flex-col items-center justify-center">
       <h1 className="text-center text-main text-6xl m-8 p-4">Homeless Help</h1>
       <p className="m-8 text-lg text-center">Providing essentials and improving lives one at a time.</p>
       <Link href='/getstarted'><button className="bg-black text-white animate-bounce w-fit p-6 md:px-12 m-8 rounded-full">Get Started → </button></Link>

       </div>
        <div className="lg:w-1/3 hidden h-full lg:flex lg:items-end lg:justify-end ">
        <Image className="hidden lg:flex lg:m-24" src={pattern} width={300} height={200} alt="Pattern" />

        </div>
       

      </div>
      
    </main>
  );
}
