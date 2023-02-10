import { useEffect } from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerBorderRemoveList } from '~/utils/data/menu'

export default function Header ( props ) {
    const router = useRouter();

    useEffect( () => {
        let header = document.querySelector( 'header' );
        if ( header ) {
            if ( headerBorderRemoveList.includes( router.pathname ) && header.classList.contains( 'header-border' ) ) header.classList.remove( 'header-border' )
            else if ( !headerBorderRemoveList.includes( router.pathname ) ) document.querySelector( 'header' ).classList.add( 'header-border' );
        }
    }, [ router.pathname ] )


    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <p className="welcome-msg">Welcome to Riode store message or remove it!</p>
                    </div>
                    <div className="header-right">
                        <div className="dropdown">
                            <ALink href="#">USD</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="#">USD</ALink></li>
                                <li><ALink href="#">EUR</ALink></li>
                            </ul>
                        </div>

                        <div className="dropdown ml-5">
                            <ALink href="#">ENG</ALink>
                            <ul className="dropdown-box">
                                <li>
                                    <ALink href="#">ENG</ALink>
                                </li>
                                <li>
                                    <ALink href="#">FRH</ALink>
                                </li>
                            </ul>
                        </div>

                        <span className="divider d-lg-show"></span>
                        <div className="dropdown dropdown-expanded d-lg-show">
                            <ALink href="#">Links</ALink>
                            <ul className="dropdown-box">
                                <li className={ router.pathname === "/pages/about-us" ? "active" : "" }><ALink href="/pages/about-us">About</ALink></li>
                                <li className={ router.pathname === "/blog/classic" ? "active" : "" }><ALink href="/blog/classic">Blog</ALink></li>
                                <li className={ router.pathname === "/pages/contact-us" ? "active" : "" }><ALink href="/pages/contact-us">Contact</ALink></li>
                                <li><ALink href="#">Newsletter</ALink></li>
                                <li className={ `${ router.pathname === "/pages/wishlist" ? "active" : "" } mr-0` }><ALink href="/pages/wishlist">Wishlist</ALink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <ALink href="/" className="logo">
                            <img src='images/home/logo.png' alt="logo" width="153" height="44" />
                        </ALink>

                        <SearchBox />
                    </div>

                    <div className="header-right">
                        <ALink href="tel:#" className="icon-box icon-box-side">
                            <div className="icon-box-icon mr-0 mr-lg-2">
                                <i className="d-icon-phone"></i>
                            </div>
                            <div className="icon-box-content d-lg-show">
                                <h4 className="icon-box-title">Call Us Now:</h4>
                                <p>0(800) 123-456</p>
                            </div>
                        </ALink>
                        <span className="divider"></span>
                        <ALink href="/pages/wishlist" className="wishlist">
                            <i className="d-icon-heart"></i>
                        </ALink>
                        <span className="divider"></span>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header fix-top sticky-content d-lg-show">
                <div className="container">
                    <div className="header-left">
                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <ALink href="#"><i className="d-icon-map"></i>Track Order</ALink>
                        <ALink href="#" className="ml-6"><i className="d-icon-card"></i>Daily Deals</ALink>
                    </div>
                </div>
            </div>
        </header >
    );
}