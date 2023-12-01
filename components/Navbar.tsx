import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <nav className="  bg-gray-10 shadow-lg rounded-lg flexBetween max-cotainer padding-container relative z-30 py-5 ">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/hilink-logo.svg"
            width={74}
            height={29}
            alt="HiLink logo"
          />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-green-400 text-[20px] hover:text-black transition-all"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            varient="btn_dark_green"
          />
        </div>
        <Image
          src="/menu.svg"
          width={30}
          height={30}
          alt="Menu"
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
    </>
  );
};

export default Navbar;
