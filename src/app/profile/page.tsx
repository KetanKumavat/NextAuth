"use client";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function ProfilePage() {
    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout successful");
            console.log("About to redirect to /login");
            router.push("/login")
        } catch (error:any) {
           console.log(error.message);
           toast.error(error.message)
        }
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl">Profile Page</h1>
        <hr />
        <p>Profile Page.</p>
        <br />
        <button
        onClick={logout}
          className="border hover:bg-white
        duration-1000 hover:text-black text-white font-bold py-3 px-6 text-xl rounded-lg">
          Logout
        </button>
      </div>
    );
};