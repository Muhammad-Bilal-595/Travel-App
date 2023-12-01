import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flexCenter mb-24">
        <div className="padding-container max-container flex w-full flex-col gap-14">
          <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
            <Link href={"/"} className="mb-10">
              <Image
                src={"/hilink-logo.svg"}
                alt="logo"
                width={74}
                height={29}
              />
            </Link>

            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
              {FOOTER_LINKS.map((col) => (
                <FooterCol title={col.title}>
                  <ul className="flex flex-col gap-4 text-gray-30 regular-14">
                    {col.links.map((link) => (
                      <Link href={"/"} key={link}>
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterCol>
              ))}
              <div className="flex flex-col gap-5">
                <FooterCol title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link
                      href={"/"}
                      key={link.label}
                      className="flex gap-4 md:flex-col jg:flex-row"
                    >
                      <p className=" whitespace-nowrap">{link.label}:</p>
                      <p className="medium-14 text-blue-70 whitespace-nowrap">
                        {link.value}
                      </p>
                    </Link>
                  ))}
                </FooterCol>
              </div>
              <div className="flex felx-col gap-5 ">
                <FooterCol title={SOCIALS.title}>
                  <ul className="regular-14 flex gap-4 test-gry-30">
                    {SOCIALS.links.map((link) => (
                      <Link href={"/"} key={link}>
                        <Image src={link} alt="social" width={25} height={25} />
                      </Link>
                    ))}
                  </ul>
                </FooterCol>
              </div>
            </div>
          </div>

          <div className="border bg-gray-20" />
          <p className="regular-14 w-full text-center text-gray-30">
            2023 Hilink | ALL Rights resreved
          </p>
        </div>
      </footer>
    </>
  );
};

type props = {
  title: string;
  children: React.ReactNode;
};

const FooterCol = ({ title, children }: props) => {
  return (
    <div className="flex flex-col gap-4" key={title}>
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
export default Footer;
