import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="header-area">
        <div className="main-header">
          <div className="top-menu-wrapper d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div className="top-header-left d-flex align-items-center">
                      <div className="top-menu">
                        <i class="ri-map-pin-line"></i>
                        <a href="#">
                          <p className="pera text-color-primary">
                            Track Your Order
                          </p>
                        </a>
                      </div>
                      <div className="top-menu">
                        <i class="ri-mail-line"></i>
                        <a href="#">
                          <p className="pera text-color-secondary">
                            infoyour@gmail.com
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="top-header-right">
                      <div className="dropdown-side-divider ml-40">
                        <select className="select" name="country">
                          <option value="India">India</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Kanglu">Bangladesh</option>
                          <option value="Bhikari">Pakistan</option>
                        </select>
                      </div>
                      <div className="dropdown-side-divider ml-40">
                        <select className="select2" name="currency">
                          <option value="usd">USD</option>
                          <option value="bdt">BDT</option>
                          <option value="cad">CAD</option>
                        </select>
                      </div>
                      <div className="login-wrapper ml-48">
                        <i class="ri-user-3-line"></i>
                        <a href="#">
                          <p className="pera text-color-primary">
                            Login/ Regeister
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom header-sticky">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu-wrapper">
                    <div className="main-menu">
                      <nav>
                        <div
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div className="logo logo-large light-logo">
                            <a href="index.html"
                            ><Image
                                src="/images/logo/logo.png"
                                layout="intrinsic" width={150} height={150} alt="logo"
                              /></a>
                          </div>
                          <div className="search-header-position d-block d-lg-none">
                            <div className="d-flex gap-15">
                              <div className="search-bar">
                                <a
                                  href="javascript:void(0)"
                                  className="rounded-btn"
                                >
                                  <i className="ri-search-line"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <ul className="listing d-none d-lg-block" id="navigation">
                            <li className="single-list">
                              <a href="#" className="single active"
                              >Home <i className="ri-arrow-down-s-line"></i
                              ></a>
                            </li>
                            <li className="single-list">
                              <a href="#" className="single">About</a>
                            </li>
                            <li className="single-list">
                              <a href="#" className="single">Shop</a>
                            </li>
                            <li className="single-list">
                              <a href="#" className="single">Blog</a>
                            </li>
                            <li className="single-list">
                              <a href="#" className="single"
                              >Pages <i className="ri-arrow-down-s-line"></i
                              ></a>
                            </li>
                            <li className="single-list">
                              <a href="#" className="single">Contact</a>
                            </li>
                            <li className="d-block d-lg-none">
                              <div className="login-wrapper">
                                <a href="#">
                                  <p className="pera text-color-primary">
                                    Login/ Regeister
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li className="d-block d-lg-none">
                              <div className="login-wrapper">
                                <a href="#">
                                  <p className="pera text-color-primary">Cart</p>
                                </a>
                              </div>
                            </li>
                            <li className="d-block d-lg-none">
                              <div className="login-wrapper">
                                <a href="#">
                                  <p className="pera text-color-primary">
                                    Wishlist
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li className="d-block d-lg-none">
                              <div className="login-wrapper">
                                <a href="#">
                                  <p className="pera text-color-primary">
                                    Track Order
                                  </p>
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="d-none d-lg-block">
                            <div className="header-right">
                              <div className="header-icon search-bar">
                                <i class="ri-search-line"></i>
                              </div>
                              <div className="header-icon">
                                <a href="#">
                                  <i class="ri-user-3-line"></i>
                                </a>
                              </div>
                              <div className="header-icon">
                                <a href="#">
                                  <i class="ri-heart-line"></i>
                                  <div className="count">
                                    <span className="count-num">4</span>
                                  </div>
                                </a>
                              </div>
                              <div className="header-icon">
                                <a href="#">
                                <i class="ri-handbag-line"></i>
                                  <div className="count">
                                    <span className="count-num">3</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                    <div className="div">
                      <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header