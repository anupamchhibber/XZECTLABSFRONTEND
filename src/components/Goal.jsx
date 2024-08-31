import Image from 'next/image'
import React from 'react'

const Goal = () => {
  return (
    <div>
        <section className="goal-area position-relative">
        <div className="container">
          <div className="row g-4">
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="goal-card wow fadeInUp" data-wow-delay="0.0s">
                <div className="circle-icon">
                  <Image src="/images/goal/icon-1.png" layout="intrinsic" width={75} height={75} alt="img" />
                </div>
                <a href="#">
                  <h4 className="title line-clamp-1 text-color-primary">
                    Original Product
                  </h4>
                  <p className="pera text-color-tertiary line-clamp-2">
                    There are many variations of passages of our Lorem Ipsum
                    available but the.
                  </p>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="goal-card wow fadeInUp" data-wow-delay="0.0s">
                <div className="circle-icon">
                  <Image src="/images/goal/icon-2.png" layout="intrinsic" width={75} height={75} alt="img" />
                </div>
                <a href="#">
                  <h4 className="title line-clamp-1 text-color-primary">
                    Satisfaction Guarantee
                  </h4>
                  <p className="pera text-color-tertiary line-clamp-2">
                    There are many variations of passages of our Lorem Ipsum
                    available but the.
                  </p>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="goal-card wow fadeInUp" data-wow-delay="0.1s">
                <div className="circle-icon">
                  <Image src="/images/goal/icon-3.png" layout="intrinsic" width={75} height={75} alt="img" />
                </div>
                <a href="#">
                  <h4 className="title line-clamp-1 text-color-primary">
                    New Arrival Everyday
                  </h4>
                  <p className="pera text-color-tertiary line-clamp-2">
                    There are many variations of passages of our Lorem Ipsum
                    available but the.
                  </p>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="goal-card wow fadeInUp" data-wow-delay="0.2s">
                <div className="circle-icon">
                  <Image src="/images/goal/icon-4.png" layout="intrinsic" width={75} height={75} alt="img" />
                </div>
                <a href="#">
                  <h4 className="title line-clamp-1 text-color-primary">
                    Fast & Free Shipping
                  </h4>
                  <p className="pera text-color-tertiary line-clamp-2">
                    There are many variations of passages of our Lorem Ipsum
                    available but the.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="shape routedOne">
          <Image src="/images/goal/shape.png" layout="intrinsic" width={75} height={75} alt="img" />
        </div>
      </section>
    </div>
  )
}

export default Goal