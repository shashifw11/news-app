import React from "react";
// import "./NewsCard.css";

const NewsCard = ({ article, onClick }) => (
    <div className="news-card" onClick={() => onClick(article)}>
        <img src={article.urlToImage} alt={article.title} />
        <h3>{article.title}</h3>
        <p>{article.description}</p>
    </div>
);

export default NewsCard;
