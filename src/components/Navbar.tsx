"use client"

import Link from "next/link";
import Logo from "./Logo";
import { navLinks } from "@/constants/nav-links";
import MobileNav from "./MobileNav";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const headerRef:any = useRef();
  useEffect(()=>{
window.addEventListener("scroll", ()=>{
if(window.scrollY > 100){
  headerRef.current.style.background ="#0c1524";
  headerRef.current.style.padding ="10px 0";
}else{
  headerRef.current.style.background ="";
  headerRef.current.style.padding = "";

}
})
  }, []);
  return (
    <header  ref={headerRef} className=" fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30 transition-all duration-200">
      <div className="relative container py-6 flex justify-between transition-all">
        <Logo />

        <nav className="hidden md:flex gap-8 capitalize">
          {navLinks.map((el, index) => (
            <Link
              key={index}
              href={`#${el}`}
              className="text-sm font-semibold tracking-wide text-slate-200"
            >
              {el}
            </Link>
          ))}
        </nav>
      
      <MobileNav />
      </div>
    </header>
  );
}
