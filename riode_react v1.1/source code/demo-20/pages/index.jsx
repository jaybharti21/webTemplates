import React from 'react';
import Helmet from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import NewCollection from '~/components/partials/home/new-collection';
import CategorySection from '~/components/partials/home/category-section';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import BlogSection from '~/components/partials/home/blog-section';
import InstagramSection from '~/components/partials/home/instagram-section';
import BrandSection from '~/components/partials/home/brand-section';

function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 8 } } );
    const featured = data && data.specialProducts.featured;
    const latest = data && data.specialProducts.latest;
    const posts = data && data.posts.data;

    return (
        <div className="main home homepage">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content mt-2">
                <IntroSection />

                <NewCollection products={ latest } loading={ loading } />

                <CategorySection />

                <FeaturedCollection products={ featured } loading={ loading } />

                <BlogSection posts={ posts } />

                <InstagramSection />

                <BrandSection />
            </div>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );