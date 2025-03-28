import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";


const Navbar = ({ item1, item2 }) => {
  const pathname = usePathname();
  return (
    <div className="bg-white shadow-md">
      <div className="flex flex-row justify-between items-center px-4 md:px-8 py-2">
        <div className="relative w-32 md:w-40 aspect-video">
          <img
            src="https://codinggita.com/assets/logo-DqYDd8j5.svg"
            alt="Codinggita logo"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
      <div className="bg-[#5d21d1] text-xl w-full h-16 flex items-center justify-center text-white">
        <div className="flex text-white text-lg gap-10">
          <Link
            href="/"
            className={`link ${
              pathname === "/"
                ? "font-bold bg-[#facc15] text-[#5d21d1] px-2 rounded" // Yellow bg, purple text when active
                : "hover:bg-[#facc15] hover:text-[#5d21d1] px-2 rounded cursor-pointer" // Yellow hover
            }`}
          >
            {item1}
          </Link>
          <Link
            href="/scholarships"
            className={`link ${
              pathname === "/scholarships"
                ? "font-bold bg-[#facc15] text-[#5d21d1] px-2 rounded" // Yellow bg, purple text when active
                : "hover:bg-[#facc15] hover:text-[#5d21d1] px-2 rounded cursor-pointer" // Yellow hover
            }`}
          >
            {item2}
          </Link>
        </div>
      </div>
      <div className="bg-white py-2 text-center text-sm text-[#5d21d1]">
        <p>
          Developed by{" "}
          <a
            href="https://devpatel-portfolioandcontacts.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Dev Patel
          </a>{" "}
          | Managed by{" "}
          <a
            href="https://codinggita.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Codinggita Team
          </a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;