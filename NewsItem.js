import React, { Component } from 'react'

export class NewsItem extends Component {
  // constructor(){
  //   super();
  //   console.log("hello, i'm constructor i run for every news item.");
  // }
  render() {
    let {title, description , imageUrl, newsUrl} = this.props;
    return (
      <div className=' my-3'><div className="card" style={{width: "18rem", height:"22rem"}}>
      <img src={!imageUrl?"https://c.ndtvimg.com/2022-09/3ii7ccro_chennai-auto-sexual-assault_625x300_27_September_22.jpg":imageUrl} className="card-img-top" style={{width: "18rem", height:"10rem"}} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
       
        <p className="card-text">{description}</p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
      </div>
    </div></div>
    )
  }
}

export default NewsItem