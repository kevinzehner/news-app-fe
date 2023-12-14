import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import { Routes, Route } from "react-router-dom";
import FullArticle from "./components/FullArticle";
import { UserProvider } from "./components/contexts/User-context";

function App() {
  return (
    <UserProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/full-article/:article_id" element={<FullArticle />} />
        </Routes>
      </>
    </UserProvider>
  );
}

export default App;
