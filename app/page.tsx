import NewsFeed from "./components/NewsFeed";

export default function Home() {
  return (
    <div className="home bg-gray-100 pt-2 justify-center  flex flex-col  ">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mt-5 ml-10">
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 text-white bg-[hsl(344,96%,37%)] rounded-full active"
            aria-current="page"
          >
            टॉप न्यूज़
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
          >
            सामाजिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
          >
            धार्मिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
          >
            शेक्शनिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
          >
            अन्य
          </a>
        </li>
      </ul>
      <div className="bg-gray-100 mt-16 ">
        <NewsFeed />
        <NewsFeed />
        <NewsFeed />
        <NewsFeed />
        <NewsFeed />
        <NewsFeed />
      </div>
      <div className="flex items-center  justify-center">
        <button className="bg-[#B80433] text-white px-5 py-2 rounded-lg mb-20 cursor-pointer font-semibold text-xl shadow-xl hover:scale-105">
          Upload
        </button>
      </div>
    </div>
  );
}
