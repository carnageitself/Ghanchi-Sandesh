
import Hero from "./components/Hero";
import NewsFeed from "./components/NewsFeed";

export default function Home() {
  return <div className="home bg-gray-100">
  <Hero/>
  <NewsFeed/>
  <NewsFeed/>
  <NewsFeed/>
  </div>;
}