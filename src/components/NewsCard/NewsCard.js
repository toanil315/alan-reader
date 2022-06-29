import React from 'react'
import style from './NewsCard.module.css'

export default function NewsCard({urlToImage, publishedAt, source, title, url, description, index}) {
  return (
    <div className={style['news-card']}>
        <img src={urlToImage} alt="news image" />
        <div style={{padding: '0 10px'}}>
            <h3>{title?.length > 50 ? title?.slice(0, 50) + "..." : title}</h3>
            <p>{description?.length > 100 ? description?.slice(0, 100) + "..." : description}</p>
            <div className={style["footer"]}>
                <a href={url}>VIEW MORE</a>
                <span>{index}</span>
            </div>
        </div>
    </div>
  )
}
