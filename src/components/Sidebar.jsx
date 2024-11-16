import React, { useState } from "react";
import "./Sidebar.css";

const categories = {
  english: {
    business: "Business",
    entertainment: "Entertainment",
    general: "General",
    health: "Health",
    science: "Science",
    sports: "Sports",
    technology: "Technology",
  },
  hindi: {
    business: "व्यवसाय",
    entertainment: "मनोरंजन",
    general: "सामान्य",
    health: "स्वास्थ्य",
    science: "विज्ञान",
    sports: "खेल",
    technology: "प्रौद्योगिकी",
  },
};

const Sidebar = ({ selectedCategory, onSelectCategory, onClose }) => {
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="sidebar">
      <button className="sidebar-close-btn" onClick={onClose}>
        &times;
      </button>
      <div className="language-toggle">
        <button
          onClick={() => handleLanguageChange("english")}
          className={language === "english" ? "active" : ""}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange("hindi")}
          className={language === "hindi" ? "active" : ""}
        >
          Hindi
        </button>
      </div>

      {Object.keys(categories[language]).map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "active" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {categories[language][category]}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
