import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import NavbarComponent from './Navbar'
import bgpika from "../asset/bgpika.jpg";
import Navbar from "./Navbar";

import Footer from "./footer";

function Home() {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const navigate = useNavigate();

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username !== "admin" || password !== "password") {
      alert("Login Failed");
    }
    if (username === "admin" && password === "password") {
      localStorage.setItem("token", "authenticated");
      alert("Login Success");
      navigate("/dashboard");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgpika})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
        <div>
          <Navbar />
        </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-5xl font-mono mt-80">FIND YOUR POKEMON !</h1>
        
        <div className="flex justify-center items-center max-w-64 flex-col h-full  mb-64">
          <h1 className="">LOGIN</h1>
          <input
            type="text"
            placeholder="username"
            className="border border-slate-600 rounded-md px-4 py-2 mb-2"
            onChange={onChangeUsername}
          />
          <input
            type="password"
            placeholder="password"
            className="border border-slate-600 rounded-md px-4 py-2 mb-2"
            onChange={onChangePassword}
          />
          <button
            className="bg-black font-semibold px-4 py-2 text-white rounded-md w-full"
            onClick={() => handleLogin()}
          >
            LOGIN
          </button>
        </div>
      </div>
      <div>
          <Footer/>
        </div>
      
    </div>
  );
}

export default Home;
