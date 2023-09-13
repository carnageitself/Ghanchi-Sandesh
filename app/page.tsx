"use client";
import Link from "next/link";
import NewsFeed from "./components/NewsFeed";
import { useAuth } from "./hooks/useAuth";
import { useState } from "react";
export default function Home() {
  const { authenticated, loading } = useAuth();
  console.log("isAuthenticated", authenticated);

  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="home bg-gray-100 justify-center  flex flex-col  items-center">
      {/* <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mt-5 ml-10">
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 text-white bg-[hsl(344,96%,37%)] rounded-full active"
            aria-current="page"
            onClick={() => setOpenTab(1)}

          >
            टॉप न्यूज़
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(2)}
            >
            सामाजिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(3)}
            >
            धार्मिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(4)}
            >
            शेक्शनिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(5)}
            >
            अन्य
          </a>
        </li>
      </ul> */}
      <div className="bg-gray-100 mt-16 ">
        <NewsFeed />
    
      </div>
      <div className="flex items-center  justify-center">
        <div className="flex justify-center items-center mb-5">
          <Link href="/newslist">
            <button className="bg-[#B80433] p-4 text-center text-white rounded-md">
              Upload
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
