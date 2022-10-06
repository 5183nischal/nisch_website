import React, { useContext } from "react";
import { ResponsiveCtx } from "../contexts/responsiveCtx";
import { Link } from "gatsby";

const Menus = [
  {
    value: "△",
    title: "Home",
    link: "/",
  },
  {
    value: "Essays",
    title: "Longfrom articles",
    link: "/dev-posts",
  },
  {
    value: "Works",
    title: "Research works",
    link: "/fragments",
  },
  // {
  //   value: "Art",
  //   title: "Art",
  //   link: "/photos",
  // },
  // {
  //   value: "Links",
  //   title: "What I'm doing now",
  //   link: "/now",
  // },
  {
    value: "About",
    title: "About me &amp; this site",
    link: "/about",
  },
  {
    value: "☰",
    title: "Sitemap",
    link: "/sitemap",
  },
];

export default function Nav() {
  // const { isResponsive, bgColorWhite } = useContext(ResponsiveCtx);
  const { isResponsive } = useContext(ResponsiveCtx);


  return (
    <nav
      className={`inline-block font-helvetica text-nav font-bold text-right uppercase ${
        isResponsive ? "md:block md:text-block" : ""
      }`}
    >
      <ul
        className={`list-none leading-navul mx-auto ${
          isResponsive ? "md:mx-0" : ""
        }`}
      >
        {Menus.map((menu, index) => {
          return (
            <li
              key={menu.title}
              className={`float-left leading-navli mx-px5 ${
                isResponsive
                  ? `md:mb-px8 md:mx-px0 md:float-none md:leading-none ${
                      index > 1 ? "md:mt-px8" : ""
                    }`
                  : ""
              }`}
            >
              <p
                id="title"
                // className="font-helvetica font-bold my-px10 leading-title md:text-title"
                className={`font-helvetica font-medium my-px10 leading-title ${
                  !isResponsive ? "md:text-title md:mr-px40" : ""
                }`}
              >
                <Link
                  to={menu.link}
                  title={menu.title}
                  // className={`hvr-underline-from-center ${
                  //   bgColorWhite ? "underline-black" : ""
                  // }`}
                >
                  {index == Menus.length - 1 ? (
                    <span title={menu.title}>{menu.value}</span>
                  ) : (
                    menu.value
                  )}
                </Link>
              </p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
