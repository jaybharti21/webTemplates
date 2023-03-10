import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import withApollo from '~/server/apollo';
import { GET_PRODUCT } from '~/server/queries';

import OwlCarousel from '~/components/features/owl-carousel';

import MediaOne from '~/components/partials/product/media/media-one';
import DetailThree from '~/components/partials/product/detail/detail-three';
import RelatedProducts from '~/components/partials/product/related-products';

import { mainSlider21 } from '~/utils/data/carousel';

function ProductDefault() {
    const slug = useRouter().query.slug;
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
        <main className="main mt-6 single-product product-default">
            <Helmet>
                <title>Riode React eCommerce Template | Product Default</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Default</h1>

            {
                product !== undefined ?
                    <div className={ `page-content mb-10 ${ loaded ? '' : 'd-none' }` } >
                        <div className="container-fluid vertical">
                            <div className="product product-single row pb-4 mb-md-10">
                                <div className="col-md-6 sticky-sidebar-wrapper mb-4 mb-md-0">
                                    <MediaOne product={ product } />
                                </div>

                                <div className="col-md-6">
                                    <DetailThree data={ data } isDesc={ true } />
                                </div>
                            </div>
                            <RelatedProducts products={ related } adClass="" type="fullwidth" />
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    :
                    <div className="skeleton-body container-fluid mb-10">
                        <div className="row pb-4 mb-md-10">
                            <div className="col-md-6 pg-vertical">
                                <div className="skel-pro-gallery"></div>
                            </div>

                            <div className="col-md-6">
                                <div className="skel-pro-summary"></div>

                                <div className="skel-pro-tabs"></div>
                            </div>
                        </div>

                        <section className="pt-3 mt-4">
                            <h2 className="title justify-content-center">Related Products</h2>

                            <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ mainSlider21 }>
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