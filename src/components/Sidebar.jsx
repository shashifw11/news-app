import React from "react";
// import "./Sidebar.css";

const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

const Sidebar = ({ selectedCategory, onSelectCategory }) => (
    <div className="sidebar">
        {categories.map((category) => (
            <button
                key={category}
                className={category === selectedCategory ? "active" : ""}
                onClick={() => onSelectCategory(category)}
            >
                {category}
            </button>
        ))}
    </div>
);

export default Sidebar;
