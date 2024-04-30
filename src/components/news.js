import React from 'react'
import { useState } from 'react';
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from 'react';
const  News = (props) =>{
        
        
    
    const [articles,setArticles] = useState([])
   
    const [loading,setloading] = useState(true)
    
    const [page,setPage] = useState(1)
    const [totalResults,settotalResults] = useState(0)
    const captilize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title = `News-${captilize(props.category)}`;
    const updateNews = async () => {
      console.log("Component did mount occurred");
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ede1f808881541e1b228726c505a4f97&page=${page}&pageSize=${props.pageSize}`;
      //this.setState({loading:true});
      let data = await fetch(url);
      let parseddata = await data.json();
      setArticles(parseddata.articles);
      setloading(false);
      settotalResults(parseddata.totalResults);
      
    }
  
  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  },[])
  /*const handlePrevious = async () => {
        setPage(page-1);
      
        updateNews();
        
    }
  const handleNext = async () => {
        setPage(page+1);
        updateNews();
  }*/
  
  const fetchMoreData = async () => {
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ede1f808881541e1b228726c505a4f97&page=${page}&pageSize=${props.pageSize}`;
      
      let data = await fetch(url);
      let parseddata = await data.json();
      
        setArticles(articles.concat(parseddata.articles));
      
      
      settotalResults(parseddata.totalResults);
     

  }

    console.log("This is the render function"); 
    console.log("Render function should completed!!!")
    return ( 
       <> 
      <div className='my-4'>
        <h2 className='text-center' style={{marginTop : '90px'}}>News App - Top Headlines from {captilize(props.category)}</h2>
       
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          
       <div className="container">

     
        <div className="row">
           
            {articles.map((element) => {
           
            return <div className="col-md-6 my-3" key={element.url}>
                        <NewsItem title = {element.title===null ? "" : element.title} description = {element.description!=="[REMOVED]"?element.description:""} imgurl = {element.urlToImage?element.urlToImage:""} newsUrl = {element.url} author = {element.author?element.author:"Unknown"} pdate = {element.publishedAt} source={element.source.name}/>
                   </div>

            })}

        {console.log("Hadd hai itna workload hai kya kare!!")}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-4">
            <button disabled = {this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous
            </button>
            <button disabled = {this.state.page >= Math.ceil(this.state.totalResults/props.pageSize)}  className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
      </div>
        </>
    )
  }

News.defaultProps = {
  country : 'in',
  pageSize : 6,
  category : 'general'
}
News.propTypes = {
  country : PropTypes.string.isRequired,
  pageSize : PropTypes.number.isRequired,
  category : PropTypes.string.isRequired,
}
export default News