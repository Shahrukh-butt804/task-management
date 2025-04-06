import { IMAGE_URL } from "@/constants/constant";
import { useGetMyKidsQuery } from "@/lib/redux/api/kidApi";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function GetMyKids() {
  const pathname = usePathname();
  const { data, refetch } = useGetMyKidsQuery({}, { skip: !pathname });

  useEffect(() => {
    if (pathname) {
      refetch();
    }
  }, [pathname, refetch]);

  //   console.log("🚀 ~ GetMyKids ~ data:", data);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data?.kids?.length > 0 ? (
        data?.kids?.map((kid: any) => (
          <li key={kid.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={` ${
                  kid?.image
                    ? `${IMAGE_URL}/${kid.image} `
                    : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=XXXXXXXXXXXXXXXXXXXX&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                }  `}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {kid.fullName}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {kid.username}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{kid.role}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime={kid.lastSeen}>3h ago</time>
                </p>
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
            </div>
          </li>
        ))
      ) : (
        <>No Kids Found</>
      )}
    </ul>
  );
}
