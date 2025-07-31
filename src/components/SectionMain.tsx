import { useState } from "react";
import Nav from "./Nav";
import About from "./contents/About";
import Resumen from "./contents/Resume";
import Contact from "./contents/Contact";

export default function SectionMain() {
  const [activePage, setActivePage] = useState("about");
  
  console.log("SectionMain renderizando con activePage:", activePage);
  
  // Mapeo más robusto para producción
  const getActiveComponent = () => {
    switch (activePage) {
      case "about":
        return <About />;
      case "resume":
        return <Resumen />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <section className="pb-20  lg:relative lg:w-max lg:m-auto xl:min-w-[75%] xl:m-0 xl:w-[75%] overflow-hidden">
      <Nav activePage={activePage} setActivePage={setActivePage} />
      {getActiveComponent()}
    </section>
  );
}
