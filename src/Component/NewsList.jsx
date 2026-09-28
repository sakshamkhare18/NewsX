import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";

function NewsList({ category , searchQuery   }) {
  const [News, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getNews() {
    const query = searchQuery || category;
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
    console.log("API KEY EXISTS:", !!API_KEY);
console.log("API KEY LENGTH:", API_KEY?.length);
    const API_URL = `https://newsapi.org/v2/everything?q=${query}&language=hi&apiKey=${API_KEY}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    if (data.status === "ok") {
  setNews(data.articles);
} else {
  console.log("News API Error:", data);
  setNews([]);
}
    setLoading(false);
  }
  useEffect(() => {
    getNews();
  }, [category,searchQuery]);

 return (
  <>
    {loading ? (
      <h1 className="loading">Loading...</h1>
    ) : (
      <>
        <h1 className="news-heading">
  {searchQuery ? `Search results for: ${searchQuery}` : `${category} News`}
</h1>
        <div className="news-list">
          {News.map((article) => {
            return (
              <NewsCard
                key={article.url}
                title={article.title}
                description={article.description}
                image={article.urlToImage}
                source={article.source.name}
                date={article.publishedAt}
                url={article.url}
              />
            );
          })}
        </div>
      </>
    )}
  </>
);
}

export default NewsList;
