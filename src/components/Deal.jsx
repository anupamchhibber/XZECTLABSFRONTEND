import Image from 'next/image'
import React from 'react'

const Deal = () => {
  return (
    <div>
      <section className="deals-area section-bg">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-12">
              <div className="deals-card">
                <div className="row align-items-center g-4">
                  <div className="col-xl-6">
                    <div className="deals-banner">
                      <Image src="/images/gallery/deals-1.png" layout="intrinsic" width={500} height={500} alt="img" />
                      <div className="shape-container">
                        <div className="shape">
                          <h4 className="title">Up to</h4>
                          <h4 className="highlight-title">40%</h4>
                          <h4 className="title">Off</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="deals-content">
                      <p className="deal-subtitle">Deal of the Week</p>
                      <div className="section-title">
                        <h4 className="title">
                          Deal of the Week Let's
                          <span className="outline-text"> Shopping</span> Today
                        </h4>
                      </div>
                      <div className="bottom-content">
                        <a
                          href="#"
                          className="fill-pill-btn shop-btn"
                        >Shop Now</a
                        >
                        <div className="price-section">
                          <h4 className="price discounted">$450</h4>
                          <h4 className="price text-color-primary">$350</h4>
                        </div>
                      </div>
                      <div className="progress-section">
                        <div className="progress-content">
                          <h4 className="title">Availavle: 15</h4>
                          <p className="title">Already Sold: 85</p>
                        </div>
                        <div className="progress custom-progress-two">
                          <div className="progress-bar" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                      <div className="deals-footer">
                        <div className="section-title">
                          <h4 className="title">Hurry Up:</h4>
                          <p className="pera">Offer ends in</p>
                        </div>
                        <div className="count-down">
                          <div className="circle">
                            <h4 className="number">20</h4>
                            <p className="pera">Days</p>
                          </div>
                          <div className="circle">
                            <h4 className="number">12</h4>
                            <p className="pera">Hours</p>
                          </div>
                          <div className="circle">
                            <h4 className="number">42</h4>
                            <p className="pera">Min</p>
                          </div>
                          <div className="circle">
                            <h4 className="number">23</h4>
                            <p className="pera">Sec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shape-one heartbeat2">
                  <Image src="/images/gallery/deal-shape-3.svg" layout="intrinsic" width={50} height={50} alt="img" />
                </div>
                <div className="shape-two routedOne">
                  <Image src="/images/gallery/deal-shape-4.png" layout="intrinsic" width={50} height={50} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Deal