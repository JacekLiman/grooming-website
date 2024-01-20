import Logo from "../assets/img/logo-white.svg";
import Dog from "../assets/img/dogs/dog-contact.png";
import { social } from "../data";

const Footer = () => {
  return (
    <footer>
      <div className="relative container mx-auto bg-orange">
        <div className="py-10 flex justify-around items-center text-white">
          <div>
            <img src={Logo} alt="" />
          </div>
          <p className="text-sm">&copy; Copyright 2024. All rights reserved</p>
          <ul className="sm:flex items-start justify-center gap-3 hidden">
            {social.map((item, idx) => {
              return (
                <li
                  className="bg-orange-800 rounded-full p-2 hover:bg-orange-900"
                  key={idx}
                >
                  <a className="text-2xl" href={item.href}>
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <img className="lg:block hidden  absolute left-1/4 top-0 -translate-x-1/2 -translate-y-[250px]" src={Dog} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
