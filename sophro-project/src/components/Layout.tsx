import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-purpleBackground">
      <header className="text-white">
        <nav className="container mx-auto flex justify-center space-x-8 pt-20 pb-8">
          <Link
            to="/"
            className={` relative ${activePath === "/" ? "text-white" : "text-transparentWhite"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            {activePath === "/" && (
              <div className="pb-16 absolute top-[-16px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-transparent border-b-white"></div>
            )}
          </Link>
          <Link
            to="/sophrologie"
            className={` relative ${activePath === "/sophrologie" ? "text-white" : "text-transparentWhite"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
              <path
                fill-rule="evenodd"
                d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                clip-rule="evenodd"
              />
            </svg>
            {activePath === "/sophrologie" && (
              <div className="pb-16 absolute top-[-16px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-transparent border-b-white"></div>
            )}
          </Link>
          <Link
            to="/public"
            className={` relative ${activePath === "/public" ? "text-white" : "text-transparentWhite"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fill-rule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                clip-rule="evenodd"
              />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>

            {activePath === "/public" && (
              <div className="pb-16 absolute top-[-16px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-transparent border-b-white"></div>
            )}
          </Link>
          <Link
            to="/moi"
            className={` relative ${activePath === "/moi" ? "text-white" : "text-transparentWhite"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
            {activePath === "/moi" && (
              <div className="pb-16 absolute top-[-16px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-transparent border-b-white"></div>
            )}
          </Link>
          <Link
            to="/tarifs"
            className={` relative ${activePath === "/tarifs" ? "text-white" : "text-transparentWhite"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
              <path
                fill-rule="evenodd"
                d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clip-rule="evenodd"
              />
            </svg>
            {activePath === "/tarifs" && (
              <div className="pb-16 absolute top-[-16px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-transparent border-b-white"></div>
            )}
          </Link>
          <Link
            to="/contact"
            className={` relative ${activePath === "/contact" ? "text-white" : "text-transparentWhite"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            {activePath === "/contact" && (
              <div className="pb-16 absolute top-[-16px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-transparent border-b-white"></div>
            )}
          </Link>
        </nav>
      </header>

      <main className="flex-grow container mx-auto m-10 mt-0">{children}</main>

      <footer className="text-white p-4 text-center text-sm opacity-50">
        <p>&copy; Rosy sophrologie | Website created by: Clara Prioux</p>
      </footer>
    </div>
  );
};

export default Layout;
