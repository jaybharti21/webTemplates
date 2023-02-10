import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import ServiceBox from '~/components/partials/home/service-section';
import CategorySection from '~/components/partials/home/category-section';
import ProductSingle from '~/components/partials/home/product-single';
import BestCollection from '~/components/partials/home/best-collection';
import BannerSection from '~/components/partials/home/banner-section';
import TestimonialSection from '~/components/partials/home/testimonial-section';
import BlogSection from '~/components/partials/home/blog-section';

function HomePage() {
    const { data, loading, error } = useQuery(GET_HOME_DATA, { variables: { productsCount: 7 } });
    const bestSelling = data && data.specialProducts.bestSelling;
    const posts = data && data.posts.data;

    return (
        <div className="main home">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>


            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">

                <IntroSection />

                <ServiceBox />

                <BestCollection products={bestSelling} loading={loading} />

                <CategorySection />

                <ProductSingle product={bestSelling} />

                <BannerSection />

                <TestimonialSection />

                <BlogSection posts={posts} />

            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(HomePage);