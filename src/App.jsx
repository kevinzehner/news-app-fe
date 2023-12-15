import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import { Routes, Route } from "react-router-dom";
import FullArticle from "./components/FullArticle";
import { UserProvider } from "./components/contexts/User-context";
import Topics from "./components/Topics";
import SingleTopic from "./components/SingleTopic";

function App() {
  return (
    <UserProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/full-article/:article_id" element={<FullArticle />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topicSlug" element={<SingleTopic />} />
        </Routes>
      </>
    </UserProvider>
  );
}

export default App;
