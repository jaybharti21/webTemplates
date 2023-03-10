import ALink from '~/components/features/custom-link';

export default function ShopBanner ( props ) {
    const { adClass = "mb-8 mb-lg-7" } = props;

    return (
        <div className={ `shop-banner-default banner ${ adClass }` } style={ { backgroundImage: "url(images/shop/page-header-back.jpg)", backgroundColor: "#ECEDEF" } }>
            <div className="banner-content">
                <h4 className="banner-subtitle font-weight-semi-bold ls-m text-uppercase text-secondary mb-3">Winter Season's</h4>
                <h1 className="banner-title font-weight-bold ls-m mb-6">Discover Our Ski Equipment</h1>
                <ALink href="/shop" className="btn btn-dark btn-outline btn-rounded">Shop Now<i className="d-icon-arrow-right"></i></ALink>
            </div>
        </div>
    )
}