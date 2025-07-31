import { useState } from "react";

export default function Aside() {
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <aside
      className={`mb-4 rounded-[20px] bg-[#1e1e1f] overflow-hidden border border-[#383838] p-4 box-shadow-[-4px_8px_24px] sm:w-[520px] sm:me-auto sm:p-7 sm:mx-auto sm:mb-7 md:w-[700px] lg:w-[950px] shadow-[#00000040] xl:shadow-[0_24px_80px] 
        xl:w-[350px] xl:sticky xl:top-16 xl:self-start xl:h-[calc(100vh-14rem)] xl:overflow-y-auto xl:mb-0 xl:pt-16 z-10 ${
          sidebarActive
            ? "h-[400px] sm:h-[500px] ease-in-out duration-1000"
            : "h-[112px] sm:h-[180px] ease-in-out duration-1000"
        }`}
    >
      <div className="relative flex justify-start items-center gap-4 sm:gap-[25px] xl:flex-col">
        <figure className="rounded-full bg-gradient-to-br from-[hsl(240,1%,25%)] from-3% to-[hsl(0,0%,19%)] to-97% sm:rounded-full overflow-auto ">
          <img
            src="image/avatar.jpg"
            className="sm:w-[200px] xl:w-[200px] rounded-full h-[200px] xl:h-[200px] object-cover"
            alt="avatar"
            width="200"
            height="200"
          />
        </figure>

        <div className="flex flex-col  sm:justify-center items-start md:items-center">
          <h1
            className="text-[#fafafa] font-bold text-xl tracking-tight mb-[10px]"
            title="Luisangel Tapia"
          >
            Luisangel Tapia (Lú)
          </h1>

          <p className="text-white bg-[#2b2b2c] text-sm font-light px-[12px] py-[3px] rounded-lg">
            Full Stack Developer
          </p>
        </div>

        <button
          className={`absolute top-[-16px] right-[-16px] rounded-bl-[15px] rounded-tr-[20px] p-[10px] 
          text-white shadow-[0_16px_30px_rgba(0,0,0,0.25)] transition-all 
          ease-in-out duration-[1500ms] z-20 sm:top-[-28px] sm:right-[-28px] xl:hidden
          ${
            sidebarActive
              ? "bg-[radial-gradient(100%_300%_at_0%_-50%,#db0414_10%,#c60842_50%,#7c1773_90%)]"
              : "bg-[radial-gradient(100%_300%_at_0%_-50%,#7c1773_10%,#c60842_50%,#db0414_90%)]"
          }`}
          onClick={() => setSidebarActive(!sidebarActive)}
        >
          <span className="hidden sm:flex">Show Contacts</span>

          {/* <ion-icon name="chevron-down"></ion-icon> */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#fff"
            className="sm:hidden"
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
          >
            <path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path>
          </svg>
        </button>
      </div>

      <div
        className={` xl:opacity-100 xl:visible ${
          sidebarActive
            ? "opacity-100 transition-opacity visible duration-1000 ease-in-out"
            : "transition-opacity  duration-1000 ease-in-out opacity-0"
        }`}
      >
        <div className="w-full h-[2px] bg-custom-radial  my-4 sm:my-8 "></div>

        <ul className="grid grid-cols-1 gap-4 sm:gap-[20px] md:grid-cols-2 md:gap-[30px_15px] xl:grid-cols-1  xl:mb-6">
          <li className="min-w-full flex items-center gap-4">
            <div className="relative bg-box-linear w-[30px] h-[30px] rounded-lg flex justify-center items-center text-[16px] z-10 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <radialGradient
                    id="customRadial"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop offset="10%" stopColor="#db0414" stopOpacity="1" />
                    <stop offset="50%" stopColor="#c60842" stopOpacity="1" />
                    <stop offset="90%" stopColor="#7c1773" stopOpacity="1" />
                  </radialGradient>
                </defs>
                <path
                  fill="url(#customRadial)"
                  d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
                ></path>
              </svg>
            </div>

            <div className="max-w-[calc(100%-46px)]">
              <p className="text-[#d6d6d6b3] font-semibold text-sm ">Email</p>

              <a
                href="mailto:luiseducol13@gmail.com"
                className="text-[#fafafa] text-base "
              >
                luiseducol13@gmail.com
              </a>
            </div>
          </li>

          <li className="min-w-full flex items-center gap-4">
            <div className="relative bg-box-linear w-[30px] h-[30px] rounded-lg flex justify-center items-center text-[16px] z-10 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <radialGradient
                    id="customRadial"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop offset="10%" stopColor="#db0414" stopOpacity="1" />
                    <stop offset="50%" stopColor="#c60842" stopOpacity="1" />
                    <stop offset="90%" stopColor="#7c1773" stopOpacity="1" />
                  </radialGradient>
                </defs>
                <path
                  fill="url(#customRadial)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                />
              </svg>
            </div>

            <div className="max-w-[calc(100%-46px)]">
              <p className="text-[#d6d6d6b3] font-semibold text-sm ">Phone</p>

              <a href="tel:+584243540689" className="text-[#fafafa] text-base ">
                +58 424 354 0689
              </a>
            </div>
          </li>

          <li className="min-w-full flex items-center gap-4">
            <div className="relative bg-box-linear w-[30px] h-[30px] rounded-lg flex justify-center items-center text-[16px] z-10 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <radialGradient
                    id="customRadial"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop offset="10%" stopColor="#db0414" stopOpacity="1" />
                    <stop offset="50%" stopColor="#c60842" stopOpacity="1" />
                    <stop offset="90%" stopColor="#7c1773" stopOpacity="1" />
                  </radialGradient>
                </defs>
                <path
                  fill="url(#customRadial)"
                  d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z"
                />
                <path
                  fill="url(#customRadial)"
                  d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"
                />
              </svg>
            </div>

            <div className="max-w-[calc(100%-46px)]">
              <p className="text-[#d6d6d6b3] font-semibold text-sm ">
                Location
              </p>

              <address className="text-[#fafafa] text-base">
                Maracay, Venezuela
              </address>
            </div>
          </li>
        </ul>

        <div className="w-full h-[2px] bg-custom-radial  my-4 sm:my-8 xl:hidden xl:opacity-0"></div>

        <ul className="flex justify-start items-center gap-4 pb-1 pl-2 xl:justify-center xl:mt-32">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/luisangel-tapia" target="_blank" className="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <radialGradient
                    id="customRadial"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop offset="10%" stopColor="#db0414" stopOpacity="1" />
                    <stop offset="50%" stopColor="#c60842" stopOpacity="1" />
                    <stop offset="90%" stopColor="#7c1773" stopOpacity="1" />
                  </radialGradient>
                </defs>
                <circle
                  cx="4.983"
                  cy="5.009"
                  r="2.188"
                  fill="url(#customRadial)"
                />
                <path
                  fill="url(#customRadial)"
                  d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                />
              </svg>
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/Lu-dev0" target="_blank" className="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <radialGradient
                    id="customRadial"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop offset="10%" stopColor="#db0414" stopOpacity="1" />
                    <stop offset="50%" stopColor="#c60842" stopOpacity="1" />
                    <stop offset="90%" stopColor="#7c1773" stopOpacity="1" />
                  </radialGradient>
                </defs>
                <path
                  fill="url(#customRadial)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
