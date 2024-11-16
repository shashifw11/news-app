import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NewsList from "../components/NewsList";
import FullArticle from "../components/FullArticle";
import Navbar from "../components/Navbar";
import useFetchNews from "../hooks/useFetchNews";
import "./Home.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const { news, loading } = useFetchNews(selectedCategory);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); 
  };

  return (
    <>
      {" "}
      <Navbar onToggleSidebar={toggleSidebar} />
      <div className="home">
        {sidebarOpen && (
          <Sidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onClose={toggleSidebar} 
          />
        )}
        <div className={`content ${sidebarOpen ? "content-shifted" : ""}`}>
          {loading ? (
            <p>Loading...</p>
          ) : selectedArticle ? (
            <FullArticle
              article={selectedArticle}
              onClose={() => setSelectedArticle(null)}
            />
          ) : (
            <NewsList news={news} onCardClick={setSelectedArticle} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
