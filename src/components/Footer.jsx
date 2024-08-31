import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
      <div className="footer-wrapper footer-bg-one">
        <div className="container">
          <div className="footer-area position-relative">
            <div className="row g-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="single-footer-caption">
                  <div className="footer-tittle">
                    <h4 className="title">About Us</h4>
                    <p className="pera">
                      Etoshi is an exciting contemporary brand which focuses on
                      high-quality products graphics with a British style
                    </p>
                    <ul className="info-listing">
                      <li className="footer-info-list">
                        <a href="#" className="single">
                          <i className="ri-mail-fill"></i>
                          <p className="pera">info@mydomain.com</p>
                        </a>
                      </li>
                      <li className="footer-info-list">
                        <a href="#" className="single">
                          <div className="d-flex gap-6">
                            <i className="ri-phone-fill"></i>
                            <p className="pera">+777 2345 7885</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="footer-menu-section">
                  <div className="logo logo-large light-logo">
                    <a href="#"
                      ><Image src="/images/logo/logo-dark.png" layout="intrinsic" width={300} height={300} alt="logo"
                    /></a>
                  </div>
                  <div className="footer-social-section">
                    <h4 className="title">Follow Us</h4>
                    <ul className="footer-social-lists">
                      <li className="list-icon">
                        <a href="#" className="list">
                          <i className="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li className="list-icon">
                        <a href="#" className="list">
                          <i className="ri-whatsapp-fill"></i>
                        </a>
                      </li>
                      <li className="list-icon">
                        <a href="#" className="list">
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li className="list-icon">
                        <a href="#" className="list">
                          <i className="ri-instagram-fill"></i>
                        </a>
                      </li>
                      <li className="list-icon">
                        <a href="#" className="list">
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li className="list-icon">
                        <a href="#" className="list">
                          <i className="ri-pinterest-fill"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-menu">
                    <ul className="menu-lists">
                      <li className="list">
                        <a href="#" className="menu-list">Home</a>
                      </li>
                      <li className="list">
                        <a href="#" className="menu-list">About</a>
                      </li>
                      <li className="list">
                        <a href="#" className="menu-list">Shop</a>
                      </li>
                      <li className="list">
                        <a href="#" className="menu-list">Blog</a>
                      </li>
                      <li className="list">
                        <a href="#" className="menu-list">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-4 col-sm-6">
                <div className="single-footer-caption">
                  <div className="footer-tittle">
                    <h4 className="title">My Accounts</h4>
                    <ul className="listing">
                      <li className="single-list">
                        <a href="#" className="single"
                          >My Orders</a
                        >
                      </li>
                      <li className="single-list">
                        <a href="#" className="single"
                          >My Credit Slips</a
                        >
                      </li>
                      <li className="single-list">
                        <a href="#" className="single"
                          >My Addresses</a
                        >
                      </li>
                      <li className="single-list">
                        <a href="#" className="single"
                          >My Personal Info</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area position-relative">
          <div className="container">
            <div className="d-flex justify-content-between gap-14 flex-wrap">
              <div className="privacy-section d-flex">
                <a href="#">
                  <p className="pera mr-25">Privacy Policy</p>
                </a>
                <span>|</span>
                <a href="#">
                  <p className="pera ml-25">Terms & Conditions</p>
                </a>
              </div>
              <div className="#">
                <Image src="/images/logo/payment-list.png" layout="intrinsic" width={100} height={100} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer