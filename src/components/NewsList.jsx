import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ news, onCardClick }) => (
    <div className="news-list">
        {news.map((article, index) => (
            <NewsCard key={index} article={article} onClick={onCardClick} />
        ))}
    </div>
);

export default NewsList;
