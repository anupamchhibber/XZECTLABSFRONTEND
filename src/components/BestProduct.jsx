import Image from 'next/image'
import React from 'react'

const BestProduct = () => {
  return (
    <div>
        <section className="best-product-area">
        <div className="container">
          <div className="row g-4 mb-24">
            <div className="col-xxl-6">
              <div className="section-with-button">
                <div
                  className="section-title position-relative wow fadeInUp"
                  data-wow-delay="0.0s"
                >
                  <h4 className="title">
                    Our Best All Products
                    <span className="outline-text">Collections</span>
                  </h4>
                  <div className="shape routedOne">
                    <Image src="/images/icon/title-shape.png" layout="intrinsic" width={20} height={20} alt="img" />
                  </div>
                </div>
                <div className="all-button">
                  <a
                    href="#"
                    className="outline-pill-btn mb-15 wow fadeInUp"
                    data-wow-delay="0.0s"
                  >
                    See All Products
                    <i class="ri-arrow-right-line"></i>
                  </a>
                  <a
                    href="#"
                    className="outline-pill-btn mb-15 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    Side Table
                    <i class="ri-arrow-right-line"></i>
                  </a>
                  <a
                    href="#"
                    className="outline-pill-btn mb-15 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    Wall Light
                    <i class="ri-arrow-right-line"></i>
                  </a>
                  <a
                    href="#"
                    className="outline-pill-btn wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    Sofa Seat
                    <i class="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="row g-4">
                <div className="col-xxl-6 col-xl-4 col-sm-6">
                  <div className="product-card best-product-card">
                    <div className="top-card">
                      <div className="price-section">
                        <h4 className="price text-color-primary">$320</h4>
                      </div>
                      <button className="wishlist-icon">
                        <Image
                          src="/images/icon/wish-icon-2.png"
                          layout="intrinsic" width={20} height={20} alt="img"
                        />
                      </button>
                    </div>
                    <div className="product-img-card best-product-img-card">
                      <a href="#" className="zoomImg">
                        <Image
                          src="/images/product/product-5.png"
                          layout="intrinsic" width={1000} height={1000} alt="img"
                        />
                      </a>
                    </div>
                    <a href="#">
                      <h4 className="product-title line-clamp-1">
                        Rift Gogan Sofa Large
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
                      <p className="count-ratting">(11)</p>
                    </div>
                    <div
                      className="cart-card best-product-cart-card d-none d-md-block"
                    >
                      <a href="#">
                        <h4 className="product-title line-clamp-1">
                          Rift Gogan Sofa Large
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
                        <p className="count-ratting">(11)</p>
                      </div>
                      <div className="button-section">
                        <a href="#" className="cart-btn"
                          >Add to Cart</a
                        >
                        <div className="fill-pill-btn qty-btn">
                          <div className="qty-container best-product-qty-container">
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
                <div className="col-xxl-6 col-xl-4 col-sm-6">
                  <div className="product-card best-product-card">
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
                    <div className="product-img-card best-product-img-card">
                      <a href="#" className="zoomImg">
                        <Image
                          src="/images/product/product-6.png"
                          layout="intrinsic" width={1000} height={1000} alt="img"
                        />
                      </a>
                      <div className="discount-badge">
                        <span className="percentage">- 35%</span>
                      </div>
                    </div>
                    <a href="#">
                      <h4 className="product-title line-clamp-1">
                        Candelaria Fabric Sofa
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
                      <p className="count-ratting">(36)</p>
                    </div>
                    <div
                      className="cart-card best-product-cart-card d-none d-md-block"
                    >
                      <a href="#">
                        <h4 className="product-title line-clamp-1">
                          Candelaria Fabric Sofa
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
                        <p className="count-ratting">(36)</p>
                      </div>
                      <div className="button-section">
                        <a href="#" className="cart-btn"
                          >Add to Cart</a
                        >
                        <div className="fill-pill-btn qty-btn">
                          <div className="qty-container best-product-qty-container">
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
          <div className="row g-4">
            <div className="col-xxl-3 col-xl-4 col-sm-6">
              <div className="product-card best-product-card">
                <div className="top-card">
                  <div className="price-section">
                    <h4 className="price text-color-primary">$110</h4>
                  </div>
                  <button className="wishlist-icon">
                    <Image src="/images/icon/wish-icon-2.png" layout="intrinsic" width={20} height={20} alt="img" />
                  </button>
                </div>
                <div className="product-img-card best-product-img-card">
                  <a href="#" className="zoomImg">
                    <Image src="/images/product/product-7.png" layout="intrinsic" width={1000} height={1000} alt="img" />
                  </a>
                </div>
                <a href="#">
                  <h4 className="product-title line-clamp-1">
                    Envole Pendant Light
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
                  <p className="count-ratting">(20)</p>
                </div>
                <div className="cart-card best-product-cart-card d-none d-md-block">
                  <a href="#">
                    <h4 className="product-title line-clamp-1">
                      Envole Pendant Light
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
                    <p className="count-ratting">(20)</p>
                  </div>
                  <div className="button-section">
                    <a href="#" className="cart-btn"
                      >Add to Cart</a
                    >
                    <div className="fill-pill-btn qty-btn">
                      <div className="qty-container best-product-qty-container">
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
                  <a href="#" className="cart-btn">Add to Cart</a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-sm-6">
              <div className="product-card best-product-card">
                <div className="top-card">
                  <div className="price-section">
                    <h4 className="price discounted">$500</h4>
                    <h4 className="price text-color-primary">$460</h4>
                  </div>
                  <button className="wishlist-icon">
                    <Image src="/images/icon/wish-icon-2.png" layout="intrinsic" width={20} height={20} alt="img" />
                  </button>
                </div>
                <div className="product-img-card best-product-img-card">
                  <a href="#" className="zoomImg">
                    <Image src="/images/product/product-8.png" layout="intrinsic" width={1000} height={1000} alt="img" />
                  </a>
                  <div className="discount-badge">
                    <span className="percentage">- 45%</span>
                  </div>
                </div>
                <a href="#">
                  <h4 className="product-title line-clamp-1">
                    Otello Armchair Ghini
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
                <div className="cart-card best-product-cart-card d-none d-md-block">
                  <a href="#">
                    <h4 className="product-title line-clamp-1">
                      Otello Armchair Ghini
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
                      <div className="qty-container best-product-qty-container">
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
                  <a href="#" className="cart-btn">Add to Cart</a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-sm-6">
              <div className="product-card best-product-card">
                <div className="top-card">
                  <div className="price-section">
                    <h4 className="price text-color-primary">$300</h4>
                  </div>
                  <button className="wishlist-icon">
                    <Image src="/images/icon/wish-icon-2.png" layout="intrinsic" width={20} height={20} alt="img" />
                  </button>
                </div>
                <div className="product-img-card best-product-img-card">
                  <a href="#" className="zoomImg">
                    <Image src="/images/product/product-9.png" layout="intrinsic" width={1000} height={1000} alt="img" />
                  </a>
                </div>
                <a href="#">
                  <h4 className="product-title line-clamp-1">
                    Orca is an Armchair
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
                  <p className="count-ratting">(25)</p>
                </div>
                <div className="cart-card best-product-cart-card d-none d-md-block">
                  <a href="#">
                    <h4 className="product-title line-clamp-1">
                      Orca is an Armchair
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
                    <p className="count-ratting">(25)</p>
                  </div>
                  <div className="button-section">
                    <a href="#" className="cart-btn"
                      >Add to Cart</a
                    >
                    <div className="fill-pill-btn qty-btn">
                      <div className="qty-container best-product-qty-container">
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
                  <a href="#" className="cart-btn">Add to Cart</a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-sm-6">
              <div className="product-card best-product-card">
                <div className="top-card">
                  <div className="price-section">
                    <h4 className="price text-color-primary">$500</h4>
                  </div>
                  <button className="wishlist-icon">
                    <Image src="/images/icon/wish-icon-2.png" layout="intrinsic" width={20} height={20} alt="img" />
                  </button>
                </div>
                <div className="product-img-card best-product-img-card">
                  <a href="#" className="zoomImg">
                    <Image src="/images/product/product-10.png" layout="intrinsic" width={1000} height={1000} alt="img" />
                  </a>
                </div>
                <a href="#">
                  <h4 className="product-title line-clamp-1">
                    Kelly Bracelet Amchair
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
                <div className="cart-card best-product-cart-card d-none d-md-block">
                  <a href="#">
                    <h4 className="product-title line-clamp-1">
                      Kelly Bracelet Amchair
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
                      <div className="qty-container best-product-qty-container">
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
                  <a href="#" className="cart-btn">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BestProduct