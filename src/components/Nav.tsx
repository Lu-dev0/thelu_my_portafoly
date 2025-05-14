import { useState } from "react";

export default function Nav({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) {

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };
  const pages = ["about", "resume"];
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#2b2b2cbf] backdrop-blur-md border border-[#383838] max-lg:rounded-t-2xl shadow-[0_16px_30px_#00000040] z-50 lg:absolute lg:bottom-auto lg:top-0 lg:left-auto lg:right-0 lg:w-max lg:rounded-bl-[20px] lg:rounded-tr-[20px] lg:px-[20px] lg:shadow-none">
      <ul className="flex flex-wrap justify-center items-center px-">
        {pages.map((page) => (
          <li>
            <button onClick={() => handlePageChange(page)} className={`text-[#d6d6d6] text-sm py-[20px] px-[8px] hover:text-transparent hover:bg-custom-radial hover:bg-clip-text focus:text-transparent focus:bg-custom-radial focus:bg-clip-text ${activePage === page ? "text-transparent bg-custom-radial bg-clip-text" : ""}`}>
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
