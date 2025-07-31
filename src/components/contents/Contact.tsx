import { useState } from "react";
import IconPaper from "../ui/icons/icon-paper";

export default function Contact() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [emailSending, setEmailSending] = useState(false);
  async function sendMail(params: any) {
    try {
      setEmailSending(true);
      params.preventDefault();
      const res = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        console.log("Email enviado correctamente");
        setData({ fullName: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error al llamar al endpoint:", error);
    } finally {
      setEmailSending(false);
    }
  }

  return (
    <article className=" sm:w-[520px] md:w-[700px] lg:w-[950px] m-auto  bg-[#1e1e1f] rounded-[20px] border border-[#383838] p-[15px] shadow-[-4px_8px_24px_#00000040] z-10 ease-in-out duration-1000 overflow-hidden xl:w-auto xl:min-h-[calc(100vh-14rem)]">
      <header>
        <h2 className="text-2xl relative  text-[#fafafa] font-bold ">
          Contact
        </h2>
        <div className="w-[30px] h-[2px] bg-custom-radial "></div>
      </header>
      <section
        className="text-[#d6d6d6] text-sm font-light mb-4 leading-7
   mt-4"
      >
        <section className="mb-[10px]">
          <h3 className="h3 mb-[20px]">Contact Form</h3>

          <form onSubmit={sendMail} className="form">
            <div className="grid grid-cols-[1fr] gap-[25px] mb-[25px] sm:gap-[30px] sm:mb-[30px] md:grid-cols-[1fr_1fr]">
              <input
                type="text"
                name="fullname"
                className="text-[#fafafa] text-sm font-normal p-[13px_20px] border-[#383838] border rounded-md  outline-none placeholder:font-medium focus:border-[#7c1773] bg-transparent focus:invalid:border-[#db0414] sm:p-[15px_20px] "
                placeholder="Full name or Company"
                required
                onChange={(e) => setData({ ...data, fullName: e.target.value })}
              />

              <input
                type="email"
                name="email"
                className="text-[#fafafa] text-sm font-normal p-[13px_20px] border-[#383838] border rounded-md  outline-none placeholder:font-medium focus:border-[#7c1773] bg-transparent focus:invalid:border-[#db0414] sm:p-[15px_20px]"
                placeholder="Email address"
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>

            <textarea
              name="message"
              className="min-h-[100px] h-[120px] max-h-[200px] text-[#fafafa] text-sm block w-full  resize-y mb-[25px] font-normal p-[13px_20px] border-[#383838] border rounded-md  outline-none placeholder:font-medium focus:border-[#7c1773] bg-transparent focus:invalid:border-[#db0414] sm:p-[15px
            _20px]"
              placeholder="Your Message"
              required
              onChange={(e) => setData({ ...data, message: e.target.value })}
            ></textarea>

            <button
              className="relative w-full bg-custom-radial text-white flex justify-center items-center gap-[10px] p-[13px_20px] rounded-md font-semibold capitalize shadow-sm transition-all hover:cursor-pointer hover:opacity-80 "
              type="submit"
              disabled={emailSending}
            >
              <IconPaper />
              <span>Send Mail</span>
            </button>
          </form>
        </section>
      </section>
    </article>
  );
}
