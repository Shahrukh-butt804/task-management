import { IMAGE_URL } from "@/constants/constant";
import { useGetMyKidsQuery } from "@/lib/redux/api/kidApi";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

interface Person {
  id: string;
  name: string;
  email: string;
  role: string;
  imageUrl: string;
  lastSeen?: string;
  isOnline?: boolean;
}

const people: Person[] = [
  {
    id: "1",
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=XXXXXXXXXXXXXXXXXXXX&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "2023-01-23T13:23Z",
  },
  {
    id: "2",
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=XXXXXXXXXXXXXXXXXXXX&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "2023-01-23T13:23Z",
  },
  {
    id: "3",
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=XXXXXXXXXXXXXXXXXXXX&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    isOnline: true,
  },
  // Add other people...
];

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
              {!kid.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime={kid.lastSeen}>3h ago</time>
                </p>
              ) : kid.isOnline ? (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              ) : null}
            </div>
          </li>
        ))
      ) : (
        <>No Kids Found</>
      )}
    </ul>
  );
}
