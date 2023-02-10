import OwlCarousel from '~/components/features/owl-carousel';

import ProductOne from '~/components/features/product/product-one';

import { mainSlider17 } from '~/utils/data/carousel';

export default function RelatedProducts ( props ) {
    const { products, adClass = "pt-3 mt-10" } = props;

    return (
        products.length > 0 ?
            <section className={ `${ adClass }` }>
                <h2 className="title justify-content-center">Related Products</h2>

                <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ mainSlider17 }>
                    {
                        products && products.slice( 0, 5 ).map( ( item, index ) =>
                            <ProductOne product={ item } key={ 'product-two-' + index } adClass='' isCat={ false } isRating={ false } />
                        )
                    }
                </OwlCarousel>
            </section> : ''
    )
}