"use client";
import { useState, useEffect } from "react";
import { getCookie, deleteCookie } from 'cookies-next';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookiesStore, setCookiesStore] = useState<string | null>(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCookiesStore(null);
  };

  useEffect(()=>{
    const accessToken = getCookie('Authorization') as string ;
    if(accessToken != null){
      setIsLoggedIn(true);
      setCookiesStore(accessToken);
    }
  });

  return (
    <nav className="bg-white sticky top-0 z-50">
      ini header
    </nav>
  );
};

export default Navbar;
