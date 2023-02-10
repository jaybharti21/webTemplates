import OwlCarousel from '~/components/features/owl-carousel';

import ProductNine from '~/components/features/product/product-nine';

import { mainSlider17 } from '~/utils/data/carousel';

export default function RelatedProducts ( props ) {
    const { products, adClass = "pt-3 mt-10" } = props;

    return (
        products.length > 0 ?
            <section className={ `${ adClass }` }>
                <h2 className="title mb-0 d-block text-center">Related Products</h2>

                <OwlCarousel adClass="owl-theme owl-nav-full" options={ mainSlider17 }>
                    {
                        products && products.slice( 0, 5 ).map( ( item, index ) =>
                            <ProductNine product={ item } key={ 'product-nine-' + index } adClass='' />
                        )
                    }
                </OwlCarousel>
            </section> : ''
    )
}