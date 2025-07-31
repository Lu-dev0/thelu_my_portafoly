import IconApp from "../ui/icons/icon-app";
import IconDesign from "../ui/icons/icon-design";
import IconDev from "../ui/icons/icon-dev";

export default function About() {
  const services = [
    {
      title: "Web Development",
      description:
        "I'm a skilled web designer with experience in creating visually stunning and user-friendly websites that meet the needs of clients and users.",
      icon: <IconDev />,
    },
    {
      title: "Mobile apps",
      description:
        "I'm a skilled mobile app developer with experience in creating visually stunning and user-friendly websites that meet the needs of clients and users.",
      icon: <IconApp />,
    },
    {
      title: "Web design",
      description:
        "I have a passion for design and I always try to express my creativity in the web. I love how the result is  visually stunning and user-friendly.",
      icon: <IconDesign />,
    },
  ];
  return (
    <article
      className=" sm:w-[520px] md:w-[700px] lg:w-[950px] m-auto  bg-[#1e1e1f] rounded-[20px] border border-[#383838] p-[15px] shadow-[-4px_8px_24px_#00000040] z-10 ease-in-out duration-1000 overflow-hidden xl:w-auto xl:min-h-[calc(100vh-14rem)]"
      
    >
      <header>
        <h2 className="text-2xl relative  text-[#fafafa] font-bold ">
          About me
        </h2>
        <div className="w-[30px] h-[2px] bg-custom-radial "></div>
      </header>
      <section
        className="text-[#d6d6d6] text-sm font-light mb-4 leading-7
 mt-4"
      >
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>
      <section className="mb-[35px] ">
        <h3 className="text-[#fafafa] font-bold text-xl mb-[20px]">
          What I'm doing
        </h3>
        <ul className="grid grid-cols-1 gap-[20px] xl:grid-cols-2 xl:gap-[20px_25px]">
          {services.map((service, index) => (
            <li
              key={index}
              className="relative p-[20px] rounded-2xl z-10 bg-box-linear shadow-[0_16px_30px_hsla(0,0%,0%,0.25)] before:absolute before:inset-[1px] before:rounded-2xl before:z-[-1]
                        sm:flex sm:justify-start sm:items-start sm:gap-[18px] sm:p-[30px]"
            >
              <div className="mb-[10px] sm:mb-0 sm:mt-[5px]">
                {service.icon}
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-[#fafafa] font-bold text-lg mb-[10px]">
                  {service.title}
                </h4>
                <p className="text-[#d6d6d6] text-sm font-light">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
