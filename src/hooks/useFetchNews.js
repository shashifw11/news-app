import { useState, useEffect } from "react";
import axios from "axios";

const useFetchNews = (category) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6196aca3b7d54a0d8cb4c3a899fd28f6`
                );
                setNews(response.data.articles);
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category]);

    return { news, loading };
};

export default useFetchNews;
