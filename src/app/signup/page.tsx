"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";


  const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
     email : "",
     username: "",
     password: "",
  });
  const [buttonDisabled,setbuttonDisabled] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const onSignup = async () =>{
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup",user);
      console.log("Signup successful",response.data);
      router.push("/login");
      toast.success("Signup successful");
    } catch (error:any) {
      console.log("Signup failed",error.message);
      toast.error(error.message);
    }finally {
      setLoading (false);
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0 ){
      setbuttonDisabled(false);
    }
    else {
      setbuttonDisabled(true);
    }
  }, [user]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-5xl font-bold flex flex-col justify-center items-center">
          {loading ? "Processing..." : "Signup"}
        </h1>
        <br />
        <label htmlFor="username">Username</label>
        <input
          className="border-2 border-gray-700 p-2 rounded-md text-black"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder=" Username"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          className="text-black border-2 border-gray-700 p-2 rounded-md"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder=" email"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          className="text-black border-2 border-gray-700 p-2 rounded-md"
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
          {buttonDisabled ? "Please fill all the fields" : "Signup"}
        </button>
        <br />
        <Link href="/login">
          <h1 className="text-2xl">Login Instead</h1>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
