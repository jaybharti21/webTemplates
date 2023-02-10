import React from 'react';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import ToolBox from '~/components/partials/shop/toolbox';
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';
import CategoryMenu from '~/components/partials/home/category-menu';

import filterData from '~/utils/data/shop';

function ShopHorizontalFilter() {
    const router = useRouter();
    const query = router.query;

    const prices = [
        { min: '0', max: '50' },
        { min: '50', max: '100' },
        { min: '100', max: '200' },
        { min: '200', max: '' }
    ]

    const containsAttrInUrl = (type, value) => {
        const currentQueries = query[type] ? query[type].split(',') : [];
        return currentQueries && (currentQueries.includes(value) || (type === 'max_price' && value === '') || (type === 'min_price' && value === ''));
    }

    const getUrlForAttrs = (type, value) => {
        let currentQueries = query[type] ? query[type].split(',') : [];
        currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter(item => item !== value) : (type === 'min_price' || type === 'max_price') ? [value] : [...currentQueries, value];
        return currentQueries.join(',');
    }

    const selectFilterHandler = () => {
        if (document.querySelectorAll('.select-items .select-item').length === 1) {
            document.querySelector('.select-items').removeAttribute('style')
        }
    }

    const cleanAllHandler = () => {
        document.querySelector('.select-items').removeAttribute('style');
    }

    return (
        <main className="main shop pt-1">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Horizontal Filter</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Horizontal Filter</h1>

            <div className="page-content mb-lg-6 mb-0 pb-lg-3 pb-0">
                <div className="container">
                    <ul className="breadcrumb breadcrumb-sm">
                        <li><ALink href="/shop"><i className="d-icon-home"></i></ALink></li>
                        <li>Shop</li>
                    </ul>
                </div>

                <CategoryMenu />

                <div className="container">
                    <ToolBox type="horizontal" />

                    <div className="select-items">
                        {
                            filterData.sizes.map((item, index) =>
                                containsAttrInUrl('sizes', item.slug) ? <ALink className="select-item" href={{ query: { ...query, page: 1, sizes: getUrlForAttrs('sizes', item.slug) } }} key={item + ' - ' + index} onClick={selectFilterHandler} scroll={false}>{item.name}<i className="d-icon-times"></i></ALink> : ''
                            )
                        }
                        {
                            filterData.colors.map((item, index) =>
                                containsAttrInUrl('colors', item.slug) ? <ALink className="select-item" href={{ query: { ...query, page: 1, colors: getUrlForAttrs('colors', item.slug) } }} key={item + ' - ' + index} onClick={selectFilterHandler} scroll={false}>{item.name}<i className="d-icon-times"></i></ALink> : ''
                            )
                        }
                        {
                            filterData.brands.map((item, index) =>
                                containsAttrInUrl('brands', item.slug) ? <ALink className="select-item" href={{ query: { ...query, page: 1, brands: getUrlForAttrs('brands', item.slug) } }} key={item + ' - ' + index} onClick={selectFilterHandler} scroll={false}>{item.name}<i className="d-icon-times"></i></ALink> : ''
                            )
                        }
                        {
                            prices.map((price, index) =>
                                containsAttrInUrl('min_price', price.min) && containsAttrInUrl('max_price', price.max) ?
                                    <ALink className="select-item" href={{ query: { ...query, page: 1, min_price: getUrlForAttrs('min_price', price.min), max_price: getUrlForAttrs('max_price', price.max) } }} key={price + ' - ' + index} onClick={selectFilterHandler} scroll={false}>
                                        {
                                            price.max === '' ? `$${price.min}.00 +`
                                                :
                                                `$${price.min}.00 - $${price.max}.00`

                                        }<i className="d-icon-times"></i>
                                    </ALink> : ''
                            )
                        }
                        <ALink href={{ pathname: router.pathname, query: {} }} className="filter-clean text-primary" onClick={cleanAllHandler} scroll={false}>Clean All</ALink>
                    </div>

                    <ProductListOne isToolbox={false} itemsPerRow={4} />
                </div>
            </div>
        </main >
    )
}

export default React.memo(ShopHorizontalFilter);