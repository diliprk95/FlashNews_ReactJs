import React, { Component } from "react";
import PropTypes from "prop-types";
import './NewsItem.css'
export class NewsItem extends Component {
  static propTypes = {};

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <div className="position-absolute top-0 translate-middle badge toolbadge rounded-pill bg-danger" style={{left: '85%', zIndex:1}}>
          {source.slice(0,10  )}...
          <span className="tooltiptext">{source}</span>
          </div>
          <img src={imageUrl ? imageUrl : "/noimage.jpg"} className="card-img-top" alt="image"/>
          <div className="card-body">
          <p className="card-text"><small className="text-muted">By {author} at {new Date(date).toGMTString()}</small></p>
            {/* <h5 className="card-title">{title.slice(0,35)}... <span className="tooltiptext">{title}</span></h5> */}
            <h5 className="card-title toolbe">{title.slice(0,35)}...<span className="tooltiptext">{title}</span></h5>
            {/* <h5 className="card-title toolbadge">{title.slice(0,35)}...</h5> */}
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
