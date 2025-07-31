import { useState } from "react";
import Nav from "./Nav";
import About from "./contents/About";
import Resumen from "./contents/Resume";
import Contact from "./contents/Contact";

export default function SectionMain() {
  const [activePage, setActivePage] = useState("about");
    const pages =[ <About/>, <Resumen/>, <Contact/>]
    return (
        <section className="pb-20  lg:relative lg:w-max lg:m-auto xl:min-w-[75%] xl:m-0 xl:w-[75%] overflow-hidden">
            <Nav activePage={activePage} setActivePage={setActivePage} />

            {pages.find(page => {
                return page.type.name.toLowerCase() === activePage
            })}
        </section>
    )
}
