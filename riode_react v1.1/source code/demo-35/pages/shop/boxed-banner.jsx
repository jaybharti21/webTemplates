import React from 'react';
import { Helmet } from 'react-helmet';

import ALink from '~/components/features/custom-link';

import ShopBanner from '~/components/partials/shop/shop-banner';
import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function ShopBoxedBanner() {
    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Boxed Banner Page</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Boxed Banner Page</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>Shop</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content mb-10 pb-3">
                <div className="container">
                    <ShopBanner />

                    <div className="row gutter-lg">
                        <SidebarFilterOne type="boxed" padding={true} />

                        <div className="col-lg-9">
                            <ProductListOne type="boxed" />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo(ShopBoxedBanner);