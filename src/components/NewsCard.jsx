import React from "react";
import "./NewsCard.css";

const NewsCard = ({ article, onClick }) => (
    <>
        <div className="news-card" onClick={() => onClick(article)}>
            <div>
        <img src={article.urlToImage} alt={article.title} />
        </div>
        <div>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
        </div>
    </div>
    </>
);

export default NewsCard;
