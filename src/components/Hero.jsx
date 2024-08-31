import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div><section class="hero-area-bg hero-padding1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="swiper heroSwiperOne-active">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div
                  class="hero-caption-one position-relative mx-auto wow fadeInUp"
                  data-wow-delay="0.0s"
                >
                  <h4 class="title">
                    Discover The Premium
                    <span class="outline-text"> Furniture</span> in Our
                    Partroll Store
                  </h4>
                </div>
                <div
                  class="text-center d-block wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <a href="#" class="outline-pill-btn">
                    Explore Products
                    <i class="ri-arrow-right-line"></i>
                  </a>
                </div>
                <div
                  class="hero-image mx-auto wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <Image
                    src="/images/hero/hero-banner-1.png"
                    layout="intrinsic" width={1000} height={1000} alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-one heartbeat2">
      <Image src="/images/hero/hero-shape.png" layout="intrinsic" width={20} height={20} alt="img" />
    </div>
    <div class="shape-two routedOne">
      <Image src="/images/hero/hero-shape.png" layout="intrinsic" width={20} height={20} alt="img" />
    </div>
  </section></div>
  )
}

export default Hero