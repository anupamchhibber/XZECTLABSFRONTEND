import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <div>
        <section className="category-area section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-with-button wow fadeInLeft"
                data-wow-delay="0.0s"
              >
                <div className="section-title position-relative">
                  <h4 className="title">
                    Choose The <span className="outline-text">Categories</span> That
                    You Want
                  </h4>
                  <div className="shape routedOne">
                    <Image src="/images/icon/title-shape.png" layout="intrinsic" width={50} height={50} alt="img" />
                  </div>
                </div>
                <div className="text-center d-block">
                  <a href="#" className="outline-pill-btn">
                    See All Categories
                    <i class="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mb-24">
            <div className="col-xl-6">
              <div
                className="category-card h-calc gallery-one wow fadeInUp"
                data-wow-delay="0.0s"
              >
                <a href="#" className="zoomImg">
                  <Image src="/images/category/category-1.png" layout="intrinsic" width={1000} height={500} alt="img" />
                </a>
                <div className="collection-card lg">
                  <a href="#">
                    <h4 className="title text-color-primary line-clamp-1">
                      Exclusive Papillon XL Beds
                    </h4>
                    <p className="pera text-color-tertiary">35 Categories</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row g-4">
                <div className="col-xl-12 col-lg-6">
                  <div
                    className="category-card h-calc gallery-two wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <a href="#" className="zoomImg">
                      <Image
                        src="/images/category/category-2.png"
                        layout="intrinsic" width={500} height={500} alt="img"
                      />
                    </a>
                    <div className="collection-card">
                      <a href="#">
                        <h4 className="title text-color-primary">
                          Contemporary Sofa
                        </h4>
                        <p className="pera text-color-tertiary">48 Categories</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-6">
                  <div
                    className="category-card h-calc gallery-two wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <a href="#" className="zoomImg">
                      <Image
                        src="/images/category/category-3.png"
                        layout="intrinsic" width={500} height={500} alt="img"
                      />
                    </a>
                    <div className="collection-card">
                      <a href="#">
                        <h4 className="title text-color-primary">
                          Vocan Center Table
                        </h4>
                        <p className="pera text-color-tertiary">24 Categories</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <div
                className="category-card h-calc gallery-three wow fadeInUp"
                data-wow-delay="0.0s"
              >
                <a href="#" className="zoomImg">
                  <Image src="/images/category/category-4.png" layout="intrinsic" width={500} height={500} alt="img" />
                </a>
                <div className="collection-card sm">
                  <a href="#">
                    <h4 className="title text-color-primary line-clamp-1">
                      Glass Coffee Table
                    </h4>
                    <p className="pera text-color-tertiary">15 Categories</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="category-card h-calc gallery-three wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a href="#" className="zoomImg">
                  <Image src="/images/category/category-5.png" layout="intrinsic" width={500} height={500} alt="img" />
                </a>
                <div className="collection-card sm">
                  <a href="#">
                    <h4 className="title text-color-primary line-clamp-1">
                      Mambo Lamp Light
                    </h4>
                    <p className="pera text-color-tertiary">22 Categories</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="category-card h-calc gallery-three wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <a href="#" className="zoomImg">
                  <Image src="/images/category/category-6.png" layout="intrinsic" width={500} height={500} alt="img" />
                </a>
                <div className="collection-card sm">
                  <a href="#">
                    <h4 className="title text-color-primary line-clamp-1">
                      Luxury Chat Chair
                    </h4>
                    <p className="pera text-color-tertiary">32 Categories</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Categories