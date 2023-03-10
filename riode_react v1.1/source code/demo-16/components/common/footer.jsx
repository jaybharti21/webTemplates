import ALink from '~/components/features/custom-link';

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container pt-6 pt-lg-0">
                <div className="footer-middle pt-6 pt-lg-10">
                    <div className="row mt-lg-4 mt-0">
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-info">
                                <ALink href="/" className="logo-footer">
                                    <img src="./images/home/logo-footer.png" alt="logo-footer" width="154" height="43" />
                                </ALink>

                                <ul className="widget-body">
                                    <li>
                                        <label>Phone: </label>
                                        <ALink href="tel:#">Toll Free (123) 456-7890</ALink>
                                    </li>
                                    <li>
                                        <label>Email: </label>
                                        <ALink href="mailto:mail@riode.com">mail@riode.com</ALink>
                                    </li>
                                    <li>
                                        <label>Address: </label>
                                        <ALink href="#">123 Street Name, City, England</ALink>
                                    </li>
                                    <li>
                                        <label>WORKING DAYS / HOURS: </label>
                                    </li>
                                    <li>
                                        <ALink href="#">Mon - Sun / 9:00 AM - 8:00 PM</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="widget ml-lg-4">
                                <h4 className="widget-title">About Us</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="/pages/about-us">About Us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Order History</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Returns</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Custom Service</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Terms &amp; Condition</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="widget ml-lg-4">
                                <h4 className="widget-title">Customer Service</h4>
                                <ul className="widget-body">
                                    <li><ALink href="#">Payment Methods</ALink></li>
                                    <li><ALink href="#">Money-back Guarantee!</ALink></li>
                                    <li><ALink href="#">Returns</ALink></li>
                                    <li><ALink href="#">Custom Service</ALink></li>
                                    <li><ALink href="#">Terms & Conditions</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-instagram">
                                <h4 className="widget-title">Instagram</h4>
                                <figure className="widget-body row">
                                    <div className="col-3">
                                        <img src="./images/instagram/01.jpg" alt="instagram 1" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/02.jpg" alt="instagram 2" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/03.jpg" alt="instagram 3" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/04.jpg" alt="instagram 4" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/05.jpg" alt="instagram 5" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/06.jpg" alt="instagram 6" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/07.jpg" alt="instagram 7" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/08.jpg" alt="instagram 8" width="64" height="64" />
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-left">
                        <figure className="payment">
                            <img src="./images/payment.png" alt="payment" width="159" height="29" />
                        </figure>
                    </div>
                    <div className="footer-center">
                        <p className="copyright">Riode eCommerce &copy; 2021. All Rights Reserved</p>
                    </div>
                    <div className="footer-right">
                        <div className="social-links">
                            <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                            <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                            <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}