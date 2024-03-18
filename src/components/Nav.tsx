import Link from "next/link";
import Image from "next/image";
import Logo from "/public/hilink-logo.svg";
import { NAV_LINKS } from "@/constant";
import Button from "./button";
import User from "/public/user.svg";
import Menu from "/public/menu.svg";

const Nav = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={Logo} alt="logo" width={68} height={58} />
      </Link>

      <ul className="hidden h-full gap-12 md:flex">
        {NAV_LINKS.map((item) => (
          <li key={item.key}>
            <Link
              className="regular-16 pb-1.5 transition-all hover:text-xl flexCenter"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon={User}
          variant="btn_dark_green"
        />
      </div>
      {/* MOBILE devices Menu */}

      <Image
        src={Menu}
        alt="Menu"
        width={35}
        height={35}
        className="inline-block cursor-pointer md:hidden lg:hidden"
      />
    </nav>
  );
};

export default Nav;
