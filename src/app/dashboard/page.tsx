import React from "react";

export default function page() {
  const projectData = [
    {
      company: "Material XD Version",
      budget: "$14,000",
      completion: 60,
    },
    {
      company: "Add Progress Track",
      budget: "$3,000",
      completion: 10,
    },
    {
      company: "Fix Platform Errors",
      budget: "Not set",
      completion: 100,
    },
    {
      company: "Launch our Mobile App",
      budget: "$20,500",
      completion: 100,
    },
    {
      company: "Add the New Pricing Page",
      budget: "$500",
      completion: 25,
    },
  ];
  const data = [
    {
      title: "Today's Money",
      value: "$53k",
      change: "+55%",
      changeType: "positive",
      iconColor: "from-blue-600 to-blue-400",
      iconPath: "M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z",
    },
    {
      title: "Today's Users",
      value: "2,300",
      change: "+3%",
      changeType: "positive",
      iconColor: "from-pink-600 to-pink-400",
      iconPath:
        "M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",
    },
    {
      title: "New Clients",
      value: "3,462",
      change: "-2%",
      changeType: "negative",
      iconColor: "from-green-600 to-green-400",
      iconPath:
        "M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122z",
    },
    {
      title: "Sales",
      value: "$103,430",
      change: "+5%",
      changeType: "positive",
      iconColor: "from-orange-600 to-orange-400",
      iconPath:
        "M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z",
    },
  ];

  return (
    <>
      <div className="mt-12">
        {/* Grid 1 */}
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
          {data.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
            >
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr ${card.iconColor} text-white shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                >
                  <path d={card.iconPath}></path>
                </svg>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  {card.title}
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {card.value}
                </h4>
              </div>
              <div className="border-t border-blue-gray-50 p-4">
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                  <strong
                    className={
                      card.changeType === "positive"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {card.change}
                  </strong>
                  &nbsp;than last week
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
              <div>
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                  Projects
                </h6>
                <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 text-blue-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <strong>30 done</strong> this month
                </p>
              </div>
              <button
                aria-expanded="false"
                aria-haspopup="menu"
                id=":r5:"
                className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                type="button"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currenColor"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            {/* Table */}
            <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                        companies
                      </p>
                    </th>
                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                        budget
                      </p>
                    </th>
                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                        completion
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projectData.map((project, index) => (
                    <tr key={index}>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="flex items-center gap-4">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                            {project.company}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                          {project.budget}
                        </p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="w-10/12">
                          <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                            {project.completion}%
                          </p>
                          <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                            <div
                              className="flex justify-center items-center h-full text-white"
                              style={{
                                width: `${project.completion}%`,
                                background:
                                  project.completion === 100
                                    ? "linear-gradient(to top right, #2e8b57, #6dbd56)"
                                    : "linear-gradient(to top right, #1e3a8a, #3b82f6)",
                              }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
