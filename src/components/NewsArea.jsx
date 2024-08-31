import Image from 'next/image'
import React from 'react'

const NewsArea = () => {
  return (
    <div>
    <section className="news-area bottom-padding1">
      <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12">
          <div className="section-title">
            <h4 className="title">Latest Blog & News</h4>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4">
                <div className="news-card">
                  <a href="#">
                    <div className="news-img zoomImg">
                      <Image src="/images/news/news-1.png" layout="intrinsic" width={1000} height={1000} alt="img" />
                      <div className="news-badge">
                        <span className="date"> 04 April 2024 </span>
                      </div>
                    </div>
                  </a>
                  <div className="author-info">
                    <div className="icon-with-title">
                      <i className="ri-user-line"></i>
                      <p className="pera">By Admin</p>
                    </div>
                    <div className="icon-with-title">
                      <i className="ri-message-2-line"></i>
                      <p className="pera">12 Comments</p>
                    </div>
                  </div>
                  <div className="news-content">
                    <a href="#">
                      <h4 className="news-title line-clamp-2">
                        Modern studio apartment design bedroom and living space
                      </h4>
                    </a>
                  </div>
                  <a href="#" className="read-more-text">
                    Read More
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
        </div>
        <div className="col-lg-4">
                <div className="news-card">
                  <a href="#">
                    <div className="news-img zoomImg">
                      <Image src="/images/news/news-2.png" layout="intrinsic" width={1000} height={1000} alt="img" />
                      <div className="news-badge">
                        <span className="date"> 04 April 2024 </span>
                      </div>
                    </div>
                  </a>
                  <div className="author-info">
                    <div className="icon-with-title">
                      <i className="ri-user-line"></i>
                      <p className="pera">By Admin</p>
                    </div>
                    <div className="icon-with-title">
                      <i className="ri-message-2-line"></i>
                      <p className="pera">12 Comments</p>
                    </div>
                  </div>
                  <div className="news-content">
                    <a href="#">
                      <h4 className="news-title line-clamp-2">
                        Comfortable armchair in a room decorated
                      </h4>
                    </a>
                  </div>
                  <a href="#" className="read-more-text">
                    Read More
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
        </div>
        <div className="col-lg-4">
                <div className="news-card">
                  <a href="#">
                    <div className="news-img zoomImg">
                      <Image src="/images/news/news-3.png" layout="intrinsic" width={1000} height={1000} alt="img" />
                      <div className="news-badge">
                        <span className="date"> 04 April 2024 </span>
                      </div>
                    </div>
                  </a>
                  <div className="author-info">
                    <div className="icon-with-title">
                      <i className="ri-user-line"></i>
                      <p className="pera">By Admin</p>
                    </div>
                    <div className="icon-with-title">
                      <i className="ri-message-2-line"></i>
                      <p className="pera">12 Comments</p>
                    </div>
                  </div>
                  <div className="news-content">
                    <a href="#">
                      <h4 className="news-title line-clamp-2">
                        Cafe with coffee tables as sofas plants and shelves
                      </h4>
                    </a>
                  </div>
                  <a href="#" className="read-more-text">
                    Read More
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
        </div>
        </div>
    </div>
    </section>
    </div>
  )
}

export default NewsArea