"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useLazyLogoutQuery } from "@/lib/redux/api/authApi";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Layout children={children} />
      <Footer />
    </>
  );
}

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [triggerLogout] = useLazyLogoutQuery();
  const router = useRouter()

  const menuItems = [
    {
      title: "dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-inherit"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
          <path d="M12 5.432l8.159 8.159v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625A1.875 1.875 0 013.75 19.79v-6.198L12 5.43z"></path>
        </svg>
      ),
      href: "/dashboard",
      isActive: true,
    },
    {
      title: "Kids",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-inherit"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: "/dashboard/pagetest",
    },
    {
      title: "tables",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-inherit"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375h-7.5v1.5H21v-1.5zm0 3.75h-7.5v1.5H21v-1.5zm0 3.75h-7.5v1.5H21v-1.5zM10.875 18.75v-1.5h-7.5v1.5h7.5zM3.375 15h7.5v-1.5h-7.5v1.5zm0-3.75h7.5v-1.5h-7.5v1.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: "/dashboard/pagetest3",
    },
    {
      title: "notifications",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-inherit"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206A24.448 24.448 0 0112 18.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: "/dashboard/pagetest2",
    },
  ];

  async function handleSignOut(e: any) {
    e.preventDefault();
   const res : any = await triggerLogout({})

   if(res.isSuccess){
    console.log(res)
    alert(res?.data?.message)
    router.push("/")
   }else{
     alert(res?.error?.data?.message)
   }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50/50 ">
        <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
          <div className="relative border-b border-white/20">
            <a className="flex items-center gap-4 py-6 px-8" href="#/">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                Dashboard
              </h6>
            </a>
            <button
              className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Side menu */}
          <div className="m-4">
            <ul className="mb-4 flex flex-col gap-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <button
                      className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg w-full flex items-center gap-4 px-4 capitalize ${
                        item.href === pathname
                          ? "bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]"
                          : "text-white hover:bg-white/10 active:bg-white/30"
                      }`}
                      type="button"
                    >
                      {item.icon}
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        {item.title}
                      </p>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Auth Pages Section */}
            <ul className="mb-4 flex flex-col gap-1">
              <li className="mx-3.5 mt-4 mb-2">
                <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
                  auth pages
                </p>
              </li>

              {["sign in", "sign up"].map((title, i) => (
                <li key={i}>
                  <a href="#">
                    <button
                      className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                      type="button"
                    >
                      {/* You can add individual icons here for each */}
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        {title}
                      </p>
                    </button>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={(e) => handleSignOut(e)}
                  className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                >
                  {/* You can add individual icons here for each */}
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    sing Out
                  </p>
                </button>
              </li>
            </ul>
          </div>
        </aside>

        <div className="min-h-screen bg-gray-50/50 ">
          <div className="p-4 xl:ml-80">{children}</div>
        </div>
      </div>
    </>
  );
}
