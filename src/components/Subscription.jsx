import Image from 'next/image'
import React from 'react'

const Subscription = () => {
  return (
    <div>
        <section className="subscription-area subscription-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscription-wrapper">
                <div className="left-wrapper">
                  <div className="subscription-content">
                    <h4 className="title">Get a surprise discount</h4>
                    <p className="pera">Join our email subscription now</p>
                  </div>
                  <div className="subscription-input-section">
                    <input
                      type="text"
                      className="subscription-input"
                      placeholder="Enter your email address"
                    />
                    <button type="submit" className="subscribe-btn">
                      <span className="btn-text">Subscribe</span
                      ><span className="icon"
                        ><i className="ri-arrow-right-line"></i
                      ></span>
                    </button>
                  </div>
                </div>
                <div className="right-wrapper">
                  <div className="subscription-content">
                    <h4 className="title">Download App</h4>
                    <p className="pera">Save $3 With App & New User only</p>
                  </div>
                  <div className="download-app">
                    <a
                      href="#"
                      target="_blank"
                      className="wow fadeInUp"
                      data-wow-delay="0.0s"
                    >
                      <Image src="/images/icon/google-play.png" layout="intrinsic" width={150} height={150} alt="img" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <Image src="/images/icon/app-store.png" layout="intrinsic" width={150} height={150} alt="img" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Subscription