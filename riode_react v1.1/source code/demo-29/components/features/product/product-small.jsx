import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { connect } from 'react-redux';

import ALink from '~/components/features/custom-link';

import { cartActions } from '~/store/cart';
import { modalActions } from '~/store/modal';
import { wishlistActions } from '~/store/wishlist';

import { toDecimal } from '~/utils';

function SmallProduct(props) {
    const { product, adClass, addToCart, isCategory = true } = props;

    const addToCartHandler = (e) => {
        e.preventDefault();
        addToCart({ ...product, qty: 1, price: product.price[0] });
    }

    return (
        <div className={`product product-list-sm ${adClass}`}>
            <figure className="product-media">
                <ALink href={`/product/default/${product.slug}`}>
                    <LazyLoadImage
                        alt="product"
                        src={process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[0].url}
                        threshold={500}
                        effect="opacity"
                        width="300"
                        height="338"
                    />

                    {
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[1].url}
                                threshold={500}
                                width="300"
                                height="338"
                                effect="opacity"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </ALink>
            </figure>

            <div className="product-details">
                {
                    isCategory ?
                        <div className="product-cat">
                            {
                                product.categories ?
                                    product.categories.map((item, index) => (
                                        <React.Fragment key={item.name + '-' + index}>
                                            <ALink href={{ pathname: '/shop', query: { category: item.slug } }}>
                                                {item.name}
                                                {index < product.categories.length - 1 ? ', ' : ""}
                                            </ALink>
                                        </React.Fragment>
                                    )) : ""
                            }
                        </div> : ""
                }
                <h3 className="product-name">
                    <ALink href={`/product/default/${product.slug}`}>{product.name}</ALink>
                </h3>

                <div className="product-price">
                    {
                        product.price[0] !== product.price[1] ?
                            product.variants.length === 0 || (product.variants.length > 0 && !product.variants[0].price) ?
                                <>
                                    <ins className="new-price">${toDecimal(product.price[0])}</ins>
                                    <del className="old-price">${toDecimal(product.price[1])}</del>
                                </>
                                :
                                < del className="new-price">${toDecimal(product.price[0])} – ${toDecimal(product.price[1])}</del>
                            : <ins className="new-price">${toDecimal(product.price[0])}</ins>
                    }
                </div>

                <div className="ratings-container">
                    <div className="ratings-full">
                        <span className="ratings" style={{ width: 20 * product.ratings + '%' }}></span>
                        <span className="tooltiptext tooltip-top">{toDecimal(product.ratings)}</span>
                    </div>
                </div>
                {
                    product.variants.length > 0 ?
                        <ALink href={`/product/default/${product.slug}`} className="btn-product btn-cart" title="Go to product">
                            <span>Select Options</span>
                        </ALink> :
                        <a href="#" className="btn-product btn-cart" title="Add to cart" onClick={addToCartHandler}>
                            <i className="d-icon-bag"></i><span>Add to cart</span>
                        </a>
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        wishlist: state.wishlist.data ? state.wishlist.data : []
    }
}

export default connect(mapStateToProps, { toggleWishlist: wishlistActions.toggleWishlist, addToCart: cartActions.addToCart, ...modalActions })(SmallProduct);