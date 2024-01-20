import Logo from "../assets/img/logo.svg";
import Phone from "../assets/img/phone.svg";

import { HiMenuAlt3 } from "react-icons/hi";

import { navigation } from "../data";
import NavMobile from "./NavMobile";
import { useState, useEffect } from "react";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 0 ? setScrollActive(true) : setScrollActive(false);
    });
  });

  return (
    <header
      className={`${
        scrollActive ? "bg-white shadow-primary" : "bg-transparent "
      }  fixed w-screen  z-10 transition-all`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-5">
          <div>
            <img src={Logo} alt="" />
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-start gap-6 capitalize ">
              {navigation.map((item, idx) => {
                return (
                  <li className="text-sm " key={idx}>
                    <a
                      className="p-2 hover:text-orange transition-all"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="">
            <div className="flex items-center gap-4 justify-center lg:justify-end md:mb-2">
              <img src={Phone} alt="" />
              <p className="text-lg font-bold">+ 1 000 10 84 000</p>
            </div>
            <div className="text-sm hidden md:block">
              Opening Hours: Mon - Sun: 10am - 6pm
            </div>
          </div>
          <button onClick={() => setNavMobile(true)} className="lg:hidden">
            <HiMenuAlt3 size={30} />
          </button>
        </div>
      </div>

      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
    </header>
  );
};

export default Header;
