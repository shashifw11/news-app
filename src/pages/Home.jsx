import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NewsList from "../components/NewsList";
import FullArticle from "../components/FullArticle";
import useFetchNews from "../hooks/useFetchNews";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import "./Home.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const { news, loading } = useFetchNews(selectedCategory);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="home">
      {/* Navbar */}
      <div className="navbar">
        <button className="hamburger" onClick={toggleSidebar}>
          <FiMenu size={24} />
        </button>
        <h1>News App</h1>
        {/* Cross Button (to close sidebar) */}
        {isSidebarOpen && (
          <button className="close-sidebar" onClick={toggleSidebar}>
            <FiX size={24} />
          </button>
        )}
      </div>

      {/* Sidebar */}
      <div className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            toggleSidebar(); // Close sidebar after selecting a category
          }}
        />
      </div>

      {/* Content */}
      <div className={`content ${isSidebarOpen ? "shifted" : ""}`}>
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
  );
};

export default Home;
