"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className = "Home">
      <main className="flex min-h-screen flex-col items-center overflow-hidden justify-between">
      <nav className="p-6 mt-10 rounded-3xl shadow-sm backdrop-blur-sm bg-white/5">
        <div className="flex justify-between items-center w-f">
          <div className="flex gap-8 justify-center items-center">
            <button
              className="bg-black hover:bg-white
        duration-1000 hover:text-black text-white font-bold py-3 px-6 text-xl rounded-lg"
              onClick={() => {
                router.push("/login");
              }}>
              Login
            </button>
            <button
              className=" bg-black  hover:bg-white
        duration-1000 hover:text-black text-white font-bold py-3 px-6 text-xl rounded-lg"
              onClick={() => {
                router.push("/signup");
              }}>
              Signup
            </button>
            <button
              className=" bg-black  hover:bg-white
        duration-1000 hover:text-black text-white font-bold py-3 px-6 text-xl rounded-lg"
              onClick={() => {
                router.push("/profile");
              }}>
              Visit Your Profile
            </button>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center h-screen w-full mx-auto -mt-24">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="flex justify-center items-center text-8xl font-extrabold w-full text-center">
            Home
          </h1>
        </div>
      </div>
    </main>
    </div> 
    
  );
}
