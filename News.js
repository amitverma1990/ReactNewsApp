import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps={
    country:'in',
    pagesize:5,
    category:'general',
  }

  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,

  }
  listArticles = [
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Greg Kumparak",
      "title": "GTA 6 footage leaks, Revolut gets hacked, and Wipro fires 300 for \"moonlighting\"",
      "description": "What happened this week in tech? GTA 6 gameplay footage leaked, Google announced a new Chromecast, Wipro fired hundreds, and more",
      "url": "https://techcrunch.com/2022/09/24/gta-6-footage-leaks-revolut-gets-hacked-and-wipro-fires-300-for-moonlighting/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/12/Revolut-cards.jpg",
      "publishedAt": "2022-09-23T21:23:54Z",
      "content": "Hi, friends! Welcome back to Week in Review, the newsletter where we very quickly sum up the most read TechCrunch stories from the past week.\r\nWant it in your inbox every Saturday morning? Get it her… [+2981 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CleanTechnica"
      },
      "author": "Zachary Shahan",
      "title": "Tesla Passes 10,000 Model Ys Produced At Texas Gigafactory",
      "description": "Elon Musk has an ambitious goal for 2030 for Tesla. He wants the US automaker to be producing 20 million vehicles a year by the end of 2030. For some context, Tesla’s current production and delivery rate is just above a million cars a year. Zooming out and lo…",
      "url": "https://cleantechnica.com/2022/09/25/tesla-passes-10000-model-ys-produced-at-texas-gigafactory/",
      "urlToImage": "https://cleantechnica.com/files/2022/09/Tesla-Gigafactory-Texas-10000-vehicles-produced.jpeg",
      "publishedAt": "2022-09-25T15:04:19Z",
      "content": "Elon Musk has an ambitious goal for 2030 for Tesla. He wants the US automaker to be producing 20 million vehicles a year by the end of 2030.\r\nFor some context, Tesla’s current production and delivery… [+3441 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Autoblog"
      },
      "author": "Jonathon Ramsey",
      "title": "Faraday Future FF 91 rated at 381 miles on a charge by the EPA",
      "description": "\"Faraday also confirmed to Green Car Reports that the rating is for models with a 142-kwh battery pack.\" We haven't heard of a pack that size in the Faraday arsenal.",
      "url": "https://www.autoblog.com/2022/09/25/faraday-future-epa-range-381-miles/",
      "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/09/25020657/faraday_future_ff91_production1.jpg",
      "publishedAt": "2022-09-25T14:47:00Z",
      "content": "You know how phenomenal but ultimately failed crowdfunding projects like the Coolest Cooler or Skully AR-1 helmet went? A tantalizing product derailed by internal drama, management ineptitude, or ove… [+2877 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BGR"
      },
      "author": "Andy Meek",
      "title": "Prime Video’s The Rings of Power is boring me out of my mind",
      "description": "So far, the owners of more than 293,000 Twitter accounts have “liked” a tweet from Tesla CEO Elon Musk that he posted earlier this month, wherein he shared a brutal, 6-word takedown of Prime Video’s staggeringly expensive The Lord of the Rings: The Rings of P…",
      "url": "https://bgr.com/entertainment/prime-videos-the-rings-of-power-is-boring-me-out-of-my-mind/",
      "urlToImage": "https://bgr.com/wp-content/uploads/2022/09/rsz_rpaz_s1_fg_105_00233511_still331_r1_3000.jpg?quality=82&strip=all",
      "publishedAt": "2022-09-25T14:23:00Z",
      "content": "So far, the owners of more than 293,000 Twitter accounts have “liked” a tweet from Tesla CEO Elon Musk that he posted earlier this month, wherein he shared a brutal, 6-word takedown of Prime Video’s … [+3954 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CleanTechnica"
      },
      "author": "Matt Pressman",
      "title": "Tesla Community To Convene For 1st-Ever “TeslaCon” Event In Sunny Florida",
      "description": "Tesla Owners Florida, in partnership with Tesla and The Electrified Garage, invites the Tesla community to attend TeslaCon Florida 2022. A weekend of fun on the Florida Space Coast with celebrity guests, education sessions, exhibitors (including EVANNEX), gre…",
      "url": "https://cleantechnica.com/2022/09/25/tesla-community-to-convene-for-1st-ever-teslacon-event-in-sunny-florida/",
      "urlToImage": "https://cleantechnica.com/files/2021/12/Tesla-Model-3-White-Tesla-Model-S-Psychadelic-Supercharging-2-CleanTechnica-watermark.jpeg",
      "publishedAt": "2022-09-25T13:57:34Z",
      "content": "Tesla Owners Florida, in partnership with Tesla and The Electrified Garage, invites the Tesla community to attend TeslaCon Florida 2022. A weekend of fun on the Florida Space Coast with celebrity gue… [+3784 chars]"
    },
   
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Aisha Malik",
      "title": "Instagram Stories under 60 seconds are no longer broken up into clips",
      "description": "Instagram is rolling out the ability for users to upload longer uninterrupted Stories, the social network confirmed to TechCrunch on Friday.",
      "url": "https://techcrunch.com/2022/09/23/instagram-stories-under-60-seconds-no-longer-broken-up/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1228781108.jpg?resize=1200,798",
      "publishedAt": "2022-09-23T19:29:16Z",
      "content": "Instagram is rolling out the ability for users to upload longer uninterrupted Stories, the social network confirmed to TechCrunch on Friday. Now, when you post a Story that’s under 60 seconds in leng… [+2260 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Ann-marie Alcántara",
      "title": "How to Be Internet Famous and Anonymous at the Same Time",
      "description": "Cartoons, anime characters and digital pets are taking over Twitch as virtual streamers grow their followings—without revealing their faces or names.",
      "url": "https://www.wsj.com/articles/how-to-be-internet-famous-and-anonymous-at-the-same-time-11664048343",
      "urlToImage": "https://images.wsj.net/im-630156/social",
      "publishedAt": "2022-09-25T12:11:52Z",
      "content": "Several times a week, hundreds of people log onto Amazons Twitch service to watch a Betty Boop-like cartoon character named \r\nPumpkin Potion. Wearing a spider-web-pattern dress, she plays piano and c… [+311 chars]"
    }
  ]
  constructor() {
    super();
    //console.log("hello, i'm constructor i run for every news item.");
    this.state = {
      articles: [],
      loading:false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1a0525485f334f9cbe0e295fb2849fcb&page=1&pageSize=${this.props.pagesize}`;
    this.setState ({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles , totalArticles :parseData.totalResults, loading:false
    })
  }

  handlePrevClick = async () => {
    console.log("p c");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1a0525485f334f9cbe0e295fb2849fcb&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    this.setState ({loading:true});
    let data = await fetch(url);
   
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
     articles: parseData.articles,
     loading:false
    })
  }

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pagesize)) {
    }
    else {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        this.setState ({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false
        })
    }
}


  render() {
    return (
      <div className='container my-3'><h2 className='text-center'>News Monkey - Top Headlines</h2>
      {this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>


          })}




        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Prev</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pagesize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News