"use client";
import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();
    const [data,setData] = React.useState("Nothing Here");
    const [username, setUsername] = React.useState("Username");
    const [email,setEmail] = React.useState("User's Email");
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout successful");
            router.push("/login")
        } catch (error:any) {
           console.log(error.message);
           toast.error(error.message)
        }
    }
    const getUserDetails = async () => {
      const res = await axios.get('/api/users/me');
      console.log(res.data);
      setData(res.data.data._id);
      setUsername(res.data.data.username)
      setEmail(res.data.data.email);
    }
    useEffect(() => {
      getUserDetails();
    });

    return (
      <div className="Home">
        <main className="flex min-h-screen flex-col items-center overflow-hidden justify-between">
          <nav className="p-6 mt-10 rounded-3xl shadow-sm backdrop-blur-sm bg-white/5">
            <div className="flex justify-between items-center w-f">
              <div className="flex gap-8 justify-center items-center">
                <button
                  onClick={logout}
                  className="border hover:bg-white
        duration-1000 hover:text-black text-white font-bold py-3 px-6 text-xl rounded-lg">
                  Logout
                </button>
                <button
                  className="border hover:bg-white
        duration-1000 hover:text-black text-white font-bold py-3 px-6 text-xl rounded-lg"
                  onClick={() => {
                    router.push("/");
                  }}>
                  Home
                </button>
                <button
                  className="border hover:bg-white
        duration-1000 hover:text-black text-white font-bold py-3 px-6 text-xl rounded-lg"
                  onClick={getUserDetails}>
                  Get User Details
                </button>
              </div>
            </div>
          </nav>
          <div className="flex justify-center flex-col items-center h-screen w-full mx-auto -mt-24">
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
              <div>
                <h1 className="text-6xl md:text-8xl font-bold text-center">Profile Page</h1>
                <br />
                <h2 className="text-3xl text-left p-4 py-0">
                  <div className="leading-relaxed border-2 w-full max-h-screen mx-auto px-auto rounded-lg p-16">
                    <Link href={`/profile/${data}`}>User Id: {data}</Link>
                    <br />
                    <Link href={`/profile/${data}`}>Username: {username}</Link>
                    <br />
                    <Link href={`/profile/${data}`}>
                      User Email: {email}
                    </Link>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    );

};