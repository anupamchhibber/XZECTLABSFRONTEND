import React from 'react'
import Image from 'next/image'

const Brand = () => {
  return (
    <div>
        <section className="brand-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h4 className="title">Brands</h4>
            </div>
            <div className="swiper brandSwiper-active">
              <div className="swiper-wrapper d-flex flex-wrap justify-content-between">
                <div className="swiper-slide">
                  <Image src="/images/brand/1.svg" layout="intrinsic" width={80} height={80} alt="img" />
                </div>
                <div className="swiper-slide">
                  <Image src="/images/brand/2.svg" layout="intrinsic" width={80} height={80} alt="img" />
                </div>
                <div className="swiper-slide">
                  <Image src="/images/brand/3.svg" layout="intrinsic" width={80} height={80} alt="img" />
                </div>
                <div className="swiper-slide">
                  <Image src="/images/brand/4.svg" layout="intrinsic" width={80} height={80} alt="img" />
                </div>
                <div className="swiper-slide">
                  <Image src="/images/brand/5.svg" layout="intrinsic" width={80} height={80} alt="img" />
                </div>
                <div className="swiper-slide">
                  <Image src="/images/brand/6.svg" layout="intrinsic" width={80} height={80} alt="img" />
                </div>
                <div className="swiper-slide">
                  <Image src="/images/brand/7.svg" layout="intrinsic" width={80} height={80} alt="img" />
                </div>
                <div className="swiper-slide">
                  <Image src="/images/brand/8.svg" layout="intrinsic" width={80} height={80} alt="img" />
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

export default Brand