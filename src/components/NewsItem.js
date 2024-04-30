import React from 'react'

const NewsItem = (props) => {
  
        let { title, description, imgurl, newsUrl, author, pdate, source } = props
        return (
            <div>
                <span class="badge badge-pill badge-primary">Ayush is the good boy</span>
                <div className="card">
                    <img src={imgurl} className="card-img-top" alt="#" />
                    <div className="card-body">

                        <h5 className="card-title">{title}
                            <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:'90%'}}>{source}</span></h5>


                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark" rel='noreferrer'>Read more</a>
                    </div>
                    <div className="card-footer text-muted">
                        By {author} on {new Date(pdate).toGMTString()}
                    </div>
                </div>
            </div>
        )
    }
export default NewsItem;
