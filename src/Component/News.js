import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import './News.css'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    pageSize: 8,
    country : 'in',
    category : 'genaral'
  }; 
  
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  };
  
  constructor(){
    super()
    this.state = {
      articles : [],
      loading: false,
      page:1
    }
  }

    async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=736e0c1674334a459c0f897d31de608e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      page: this.state.page,
      articles : parsedata.articles, 
      totalResults : parsedata.totalResults,
      loading: false})
  }


  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick = async () =>{
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  handleNextClick = async () =>{
    this.setState({page: this.state.page + 1});
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <h4>Flash News - For Fast & Free News</h4>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.articles.map((elements) => {
            return <div className="col-md-3" key={elements.url}>
              <NewsItem author={elements.author?elements.author:"\u2718"} date={elements.publishedAt?elements.publishedAt:"-"} 
              title={elements.title?elements.title:""} 
              description={elements.description?elements.description.slice(0,77):"Description Not Available \u2718 \u2718 \u2718"}
              newsUrl={elements.url} imageUrl={elements.urlToImage} source={elements.source.name?elements.source.name:"\u2718"}/>
            </div>
          })} 
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
