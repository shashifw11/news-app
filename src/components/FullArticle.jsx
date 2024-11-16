import React from "react";

const FullArticle = ({ article, onClose }) => (
    <div className="full-article">
        <button onClick={onClose}>Close</button>
        <h2>{article.title}</h2>
        <img src={article.urlToImage} alt={article.title} />
        <p>{article.content}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read Full Article
        </a>
    </div>
);

export default FullArticle;
