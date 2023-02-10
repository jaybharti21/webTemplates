import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';

import BrandSection from './brand-section';

import { fadeInRightShorter } from '~/utils/data/keyframes';

function BigBannerSection ( props ) {
    return (
        <section className="banner-big-section" style={ { backgroundImage: "url(images/home/bg.jpg)", backgroundColor: "#333" } }>
            <div className="shape-divider">
                <div className="shape shape2">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 41.624 100 3.792" enableBackground="new 0 41.624 100 3.792">
                        <path fill="#fff" d="M100,55.783L0,55.746V45.017c10.703-1.928,29.146-3.2,50.104-3.2c20.822,0,39.164,1.257,49.896,3.163V55.783z">
                        </path>
                    </svg>
                </div>
            </div>
            <BrandSection />
            <div className="container">
                <div className="banner-content">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="banner-subtitle mt-2 mb-0">Flash Sale</h4>
                            <h3 className="banner-title font-weight-bold text-uppercase mb-5"> Light Sneaker</h3>
                            <p className="text-uppercase mb-6">
                                <span className="d-block text-normal mb-1">2021 Fashion Style Collection</span> Start At $99.00
                            </p>
                            <ALink href="/shop" className="btn btn-rounded btn-outline btn-white mb-1">Shop now<i className="d-icon-arrow-right"></i></ALink>
                            <div className="banner-info">
                                <h6 className="text-white font-weight-bold mb-0">Hot <br /> Deal</h6>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                <LazyLoadImage
                                    src="images/home/shoes.png"
                                    className="banner-image mt-2"
                                    alt="Shoes"
                                    width="698"
                                    height="401"
                                />
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( BigBannerSection );