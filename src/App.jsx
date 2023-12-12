import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import { Routes, Route } from "react-router-dom";
import AllArticles from "./components/AllArticles";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/all-articles" element={<AllArticles />} />
      </Routes>
    </>
  );
}

export default App;
