import Document, { NextScript, Head, Main, Html } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps( ctx ) {
        const initialProps = await Document.getInitialProps( ctx )
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <base href="/react/riode/demo-kid/"></base>
                    <title>Riode - React eCommerce Template</title>
                    <link rel="icon" href="images/icons/favicon.png" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CBaloo+2:300,400,500,600,700" />
                    <link rel="stylesheet" type="text/css" href="vendor/riode-fonts/riode-fonts.css" />
                    <link rel="stylesheet" type="text/css" href="vendor/fontawesome-free/css/all.min.css" />
                    <link rel="stylesheet" type="text/css" href="vendor/owl-carousel/owl.carousel.min.css" />
                </Head>

                <body className="riode-rounded-skin">
                    <Main />

                    <script src="./js/jquery.min.js"></script>

                    <NextScript />
                </body>
            </Html>
        )
    }
}