import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';

function CategorySection() {
    return (
        <Reveal keyframes={ fadeIn } triggerOnce>
            <section className="pt-md-2 pb-md-6 category-section">
                <h2 className="title title-simple ls-m">Top Categories</h2>
                <div className="row grid">
                    <div className="grid-item col-md-6 height-x2">
                        <div className="banner banner-fixed content-middle content-center overlay-dark">
                            <ALink href="/shop">
                                <figure>
                                    <LazyLoadImage threshold={ 300 } src="./images/home/category/1.jpg" alt="category" width="585"
                                        height="397" style={ { backgroundColor: "#eef0f1" } } effect="opacity" />
                                </figure>
                            </ALink>
                            <div className="banner-content text-center w-100 h-100 d-flex flex-column">
                                <h3 className="banner-title text-uppercase ls-s mb-0">Padded Clothes</h3>
                                <h4
                                    className="banner-subtitle flex-1 font-weight-normal text-capitalize text-body ls-md lh-1 mb-0">
                                    Collection</h4>
                                <div className="btn-group">
                                    <ALink href={ { pathname: "/shop", query: { category: 'women-s' } } } className="btn btn-white btn-rounded font-weight-semi-bold">Women’s</ALink>
                                    &nbsp;<ALink href={ { pathname: "/shop", query: { category: 'men-s' } } } className="btn btn-white btn-rounded font-weight-semi-bold">Men's</ALink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col-md-6 height-x1 d-sm-flex d-md-block d-block">
                        <div className="category category-light category-absolute overlay-dark mb-4 mb-sm-0 mb-md-4 mr-0 mr-sm-4 mr-md-0">
                            <ALink href={ { pathname: "/shop", query: { category: 'women-s-t-shirt' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage threshold={ 500 } src="./images/home/category/2.jpg" alt="category" width="585"
                                        height="205" style={ { backgroundColor: "#c8ced4" } } effect="opacity" />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name"><ALink href={ { pathname: "/shop", query: { category: 'women-s-t-shirt' } } }>Women’s T-Shirt</ALink></h4>
                            </div>
                        </div>

                        <div className="category category-light category-absolute overlay-dark">
                            <ALink href={ { pathname: "/shop", query: { category: 'sports-and-outdoors' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage threshold={ 300 } src="./images/home/category/3.jpg" alt="category" width="585"
                                        height="397" style={ { backgroundColor: "#ebedef" } } effect="opacity" />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name"><ALink href={ { pathname: "/shop", query: { category: 'sports-and-outdoors' } } }>Sports & Outdoors</ALink></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( CategorySection );