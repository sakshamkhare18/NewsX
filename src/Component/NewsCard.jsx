import React from 'react'
function NewsCard({ title , description,image ,source ,date, url}) {
  return (
    <article className="news-card" onClick={()=> window.open(url, "_blank")}>

      <img
        src={image}
        alt="News"
      />

      <div className="news-content">

        <span className="news-category">
          {source}
        </span>

       <h2 className="news-title">
          {title}
        </h2>

        <p className="news-description">
          {description}
        </p>

        <div className="news-footer">
          <span>NewsX</span>
          <span>{date}</span>
        </div>

      </div>

    </article>
  );
}

export default NewsCard;