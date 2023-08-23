import NewsFeed from "./components/NewsFeed";

export default function Home() {
  return <div className="home bg-gray-100">
    <div className="bg-gray-100 mt-16">
  <NewsFeed/>
  <NewsFeed/>
  <NewsFeed/>
  <NewsFeed/>
  <NewsFeed/>
  <NewsFeed/>
    </div>
  <div className="flex items-center justify-center">
  <button className="bg-green-600 text-white px-5 py-2 rounded-lg mb-20 cursor-pointer font-semibold text-xl shadow-xl hover:scale-105">Upload</button>
  </div>
  </div>;
}
