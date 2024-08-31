import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <div>
      <section className="feature-area feature-bg position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h4 className="title">Featured Products</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="swiper featureSwiper-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product-card feature-card h-calc">
                      <div className="top-card">
                        <div className="price-section">
                          <h4 className="price discounted">$250</h4>
                          <h4 className="price text-color-primary">$200</h4>
                        </div>
                        <button className="wishlist-icon">
                          <Image
                            src="/images/icon/wish-icon-2.png"
                            layout="intrinsic" width={20} height={20} alt="img"
                          />
                        </button>
                      </div>
                      <div className="product-img-card feature-img-card">
                        <a href="#" className="zoomImg">
                          <Image
                            src="/images/product/product-1.png"
                            layout="intrinsic" width={500} height={500} alt="img"
                          />
                        </a>
                        <div className="discount-badge">
                          <span className="percentage">- 25%</span>
                        </div>
                      </div>
                      <a href="#">
                        <h4 className="product-title line-clamp-1">
                          Barrel Chair Avenue
                        </h4>
                      </a>
                      <div className="product-review">
                        <div className="product-ratting">
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                        </div>
                        <p className="count-ratting">(52)</p>
                      </div>
                      <div
                        className="cart-card feature-cart-card d-none d-md-block"
                      >
                        <a href="#">
                          <h4 className="product-title line-clamp-1">
                            Barrel Chair Avenue
                          </h4>
                        </a>
                        <div className="product-review">
                          <div className="product-ratting">
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                          </div>
                          <p className="count-ratting">(31)</p>
                        </div>
                        <div className="button-section">
                          <a href="#" className="cart-btn"
                          >Add to Cart</a
                          >
                          <div className="fill-pill-btn qty-btn">
                            <div className="qty-container featury-qty-container">
                              <div className="qty-btn-minus qty-btn mr-1">
                                <i className="ri-subtract-fill"></i>
                              </div>
                              <input
                                type="text"
                                name="qty"
                                value="0"
                                className="input-qty input-rounded"
                              />
                              <div className="qty-btn-plus qty-btn ml-1">
                                <i className="ri-add-fill"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-section d-block d-md-none">
                        <a href="#" className="cart-btn"
                        >Add to Cart</a
                        >
                      </div>
                    </div>
                  </div> </div></div></div>
            <div className="col-lg-3">
              <div className="swiper featureSwiper-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product-card feature-card h-calc">
                      <div className="top-card">
                        <div className="price-section">
                          <h4 className="price discounted">$250</h4>
                          <h4 className="price text-color-primary">$200</h4>
                        </div>
                        <button className="wishlist-icon">
                          <Image
                            src="/images/icon/wish-icon-2.png"
                            layout="intrinsic" width={20} height={20} alt="img"
                          />
                        </button>
                      </div>
                      <div className="product-img-card feature-img-card">
                        <a href="#" className="zoomImg">
                          <Image
                            src="/images/product/product-2.png"
                            layout="intrinsic" width={500} height={500} alt="img"
                          />
                        </a>
                      </div>
                      <a href="#">
                        <h4 className="product-title line-clamp-1">
                          Barrel Chair Avenue
                        </h4>
                      </a>
                      <div className="product-review">
                        <div className="product-ratting">
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                        </div>
                        <p className="count-ratting">(31)</p>
                      </div>
                      <div
                        className="cart-card feature-cart-card d-none d-md-block"
                      >
                        <a href="#">
                          <h4 className="product-title line-clamp-1">
                            Barrel Chair Avenue
                          </h4>
                        </a>
                        <div className="product-review">
                          <div className="product-ratting">
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                          </div>
                          <p className="count-ratting">(31)</p>
                        </div>
                        <div className="button-section">
                          <a href="#" className="cart-btn"
                          >Add to Cart</a
                          >
                          <div className="fill-pill-btn qty-btn">
                            <div className="qty-container featury-qty-container">
                              <div className="qty-btn-minus qty-btn mr-1">
                                <i className="ri-subtract-fill"></i>
                              </div>
                              <input
                                type="text"
                                name="qty"
                                value="0"
                                className="input-qty input-rounded"
                              />
                              <div className="qty-btn-plus qty-btn ml-1">
                                <i className="ri-add-fill"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-section d-block d-md-none">
                        <a href="#" className="cart-btn"
                        >Add to Cart</a
                        >
                      </div>
                    </div>
                  </div> </div></div></div>
            <div className="col-lg-3">
              <div className="swiper featureSwiper-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product-card feature-card h-calc">
                      <div className="top-card">
                        <div className="price-section">
                          <h4 className="price text-color-primary">$450</h4>
                        </div>
                        <button className="wishlist-icon">
                          <Image
                            src="/images/icon/wish-icon-2.png"
                            layout="intrinsic" width={20} height={20} alt="img"
                          />
                        </button>
                      </div>
                      <div className="product-img-card feature-img-card">
                        <a href="#" className="zoomImg">
                          <Image
                            src="/images/product/product-3.png"
                            layout="intrinsic" width={500} height={500} alt="img"
                          />
                        </a>
                      </div>
                      <a href="#">
                        <h4 className="product-title line-clamp-1">
                          Regency Side Table
                        </h4>
                      </a>
                      <div className="product-review">
                        <div className="product-ratting">
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                        </div>
                        <p className="count-ratting">(22)</p>
                      </div>
                      <div
                        className="cart-card feature-cart-card d-none d-md-block"
                      >
                        <a href="#">
                          <h4 className="product-title line-clamp-1">
                            Regency Side Table
                          </h4>
                        </a>
                        <div className="product-review">
                          <div className="product-ratting">
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                          </div>
                          <p className="count-ratting">(22)</p>
                        </div>
                        <div className="button-section">
                          <a href="#" className="cart-btn"
                          >Add to Cart</a
                          >
                          <div className="fill-pill-btn qty-btn">
                            <div className="qty-container featury-qty-container">
                              <div className="qty-btn-minus qty-btn mr-1">
                                <i className="ri-subtract-fill"></i>
                              </div>
                              <input
                                type="text"
                                name="qty"
                                value="0"
                                className="input-qty input-rounded"
                              />
                              <div className="qty-btn-plus qty-btn ml-1">
                                <i className="ri-add-fill"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-section d-block d-md-none">
                        <a href="#" className="cart-btn"
                        >Add to Cart</a
                        >
                      </div>
                    </div>
                  </div></div></div></div>
            <div className="col-lg-3">
              <div className="swiper featureSwiper-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product-card feature-card h-calc">
                      <div className="top-card">
                        <div className="price-section">
                          <h4 className="price discounted">$700</h4>
                          <h4 className="price text-color-primary">$600</h4>
                        </div>
                        <button className="wishlist-icon">
                          <Image
                            src="/images/icon/wish-icon-2.png"
                            layout="intrinsic" width={20} height={20} alt="img"
                          />
                        </button>
                      </div>
                      <div className="product-img-card feature-img-card">
                        <a href="#" className="zoomImg">
                          <Image
                            src="/images/product/product-4.png"
                            layout="intrinsic" width={500} height={500} alt="img"
                          />
                        </a>
                        <div className="discount-badge">
                          <span className="percentage">- 35%</span>
                        </div>
                      </div>
                      <a href="#">
                        <h4 className="product-title line-clamp-1">
                          Green Velvet Armchair
                        </h4>
                      </a>
                      <div className="product-review">
                        <div className="product-ratting">
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                          <i className="ri-star-s-fill"></i>
                        </div>
                        <p className="count-ratting">(41)</p>
                      </div>
                      <div
                        className="cart-card feature-cart-card d-none d-md-block"
                      >
                        <a href="#">
                          <h4 className="product-title line-clamp-1">
                            Green Velvet Armchair
                          </h4>
                        </a>
                        <div className="product-review">
                          <div className="product-ratting">
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                          </div>
                          <p className="count-ratting">(41)</p>
                        </div>
                        <div className="button-section">
                          <a href="#" className="cart-btn"
                          >Add to Cart</a
                          >
                          <div className="fill-pill-btn qty-btn">
                            <div className="qty-container featury-qty-container">
                              <div className="qty-btn-minus qty-btn mr-1">
                                <i className="ri-subtract-fill"></i>
                              </div>
                              <input
                                type="text"
                                name="qty"
                                value="0"
                                className="input-qty input-rounded"
                              />
                              <div className="qty-btn-plus qty-btn ml-1">
                                <i className="ri-add-fill"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-section d-block d-md-none">
                        <a href="#" className="cart-btn"
                        >Add to Cart</a
                        >
                      </div>
                    </div>
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

export default Feature