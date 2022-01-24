import React, { Component } from "react";
import './NewsItem.css'
const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div className="badge rounded-pill bg-danger" style={{display:'flex',justifyContent:'end',position:'absolute'}}>
            <span>{source}</span>
          </div>
          <img src={imageUrl ? imageUrl : "/noimage.jpg"} className="card-img-top"/>
          <div className="card-body">
          <p className="card-text"><small className="text-muted">By {author} at {new Date(date).toGMTString()}</small></p>
            {/* <h5 className="card-title">{title.slice(0,35)}... <span className="tooltiptext">{title}</span></h5> */}
            <h5 className="card-title toolbe">{title.slice(0,35)}...<span className="tooltiptext">{title}</span></h5>
            {/* <h5 className="card-title toolbadge">{title.slice(0,35)}...</h5> */}
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read more</a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
