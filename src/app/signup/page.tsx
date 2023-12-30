"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const SignUp = () => {
  const [user, setUser] = React.useState({
     email : "",
     username: "",
     password: "",
  });

  const onSignup = async () =>{
    
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-5xl font-bold flex flex-col justify-center items-center">
          Signup
        </h1>
        <br />
        <label htmlFor="username">Username</label>
        <input
          className="border-2 border-gray-700 p-2 rounded-md"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder=" Username"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-gray-700 p-2 rounded-md"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder=" email"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          className="border-2 border-gray-700 p-2 rounded-md"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder=" password"
        />
        <br />
        <button
          className="border hover:bg-white
        duration-1000 hover:text-black text-white font-bold py-3 px-6 text-xl rounded-lg"
          onClick={onSignup}>
          Signup
        </button>
        <br />
        <Link href="/login" >
          <h1 className="text-2xl">Login Instead</h1>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
