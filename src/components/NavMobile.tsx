import { navigation } from "../data";
import { IoMdClose } from "react-icons/io";

type NavMobileProps = {
  navMobile: boolean;
  setNavMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMobile = ({ setNavMobile, navMobile }: NavMobileProps) => {
  return (
    <nav
      className={` bg-yellow absolute top-full left-0 w-full flex justify-center items-center lg:hidden transition-all duration-500 overflow-hidden  ${
        navMobile ? "h-[224px]" : "h-[0px]"
      }`}
    >
      <ul className="py-10 space-y-4">
        {navigation.map((item, idx) => {
          return (
            <li
              className=" text-center uppercase font-semibold hover:font-bold"
              key={idx}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => setNavMobile(false)}
        className="absolute top-5 right-5"
      >
        <IoMdClose size={26} />
      </button>
    </nav>
  );
};

export default NavMobile;
