import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Login from "../components/login";
import AdminDashboard from "../components/adminDashboard";

import "../app/globals.css";
import SignInWall from "../components/signInWall";

export default function Admin() {
  const [user, setUser] = useState();
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-[100vh]">
      <Header />
      <div className="w-full flex justify-center">
        {!user ? <AdminDashboard /> : <Login isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>}
      </div>
      <Footer />
    </div>
  );
}
