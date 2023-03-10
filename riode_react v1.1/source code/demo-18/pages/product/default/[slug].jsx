import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import withApollo from '~/server/apollo';
import { GET_PRODUCT } from '~/server/queries';

import OwlCarousel from '~/components/features/owl-carousel';

import HomeSidebar from '~/components/partials/home/home-sidebar';

import MediaFive from '~/components/partials/product/media/media-five';
import DetailThree from '~/components/partials/product/detail/detail-three';
import DescOne from '~/components/partials/product/desc/desc-one';
import RelatedProducts from '~/components/partials/product/related-products';

import { mainSlider17 } from '~/utils/data/carousel';

function ProductDefault () {
    const slug = useRouter().query.slug;

    if ( !slug ) return '';

    const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );
    const [ loaded, setLoadingState ] = useState( false );
    const product = data && data.product.data;
    const related = data && data.product.related;

    useEffect( () => {
        if ( !loading && product )
            imagesLoaded( 'main' ).on( 'done', function () {
                setLoadingState( true );
            } ).on( 'progress', function () {
                setLoadingState( false );
            } );
        if ( loading )
            setLoadingState( false )
    }, [ loading, product ] )

    return (
        <main className="main mt-6 pb-10 mb-6 single-product">
            <Helmet>
                <title>Riode React eCommerce Template | Product Default</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Default</h1>

            {
                product !== undefined ?
                    <div className={ `page-content ${ loaded ? '' : 'd-none' }` } >
                        <div className="container">
                            <div className="row">
                                <HomeSidebar adClass="col-xl-3 col-lg-4" />

                                <div className="col-xl-9 col-lg-8">
                                    <div className="product product-single row">
                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                            <MediaFive product={ product } adClass="pb-0" />
                                        </div>

                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                            <DetailThree data={ data } />
                                        </div>
                                    </div>

                                    <DescOne product={ product } isDivider={ false } isGuide={ false } />

                                    <RelatedProducts products={ related } adClass='' />
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    :
                    <div className="skeleton-body container mb-10">
                        <div className="row mb-7">
                            <div className="col-xl-3 col-lg-4 sidebar sidebar-fixed sticky-sidebar-wrapper">
                                <div className="sidebar-content">
                                    <div className="widget-2"></div>
                                </div>
                            </div>

                            <div className="col-xl-9 col-lg-8">
                                <div className="product product-single row">
                                    <div className="col-xl-6 col-lg-12 col-md-6">
                                        <div className="skel-pro-gallery"></div>
                                    </div>

                                    <div className="col-xl-6 col-lg-12 col-md-6">
                                        <div className="skel-pro-summary"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="skel-pro-tabs"></div>

                        <section className="pt-3 mt-4">
                            <h2 className="title justify-content-center">Related Products</h2>

                            <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ mainSlider17 }>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'popup-skel-' + item }></div>
                                    )
                                }
                            </OwlCarousel>
                        </section>
                    </div>
            }
        </main>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductDefault );