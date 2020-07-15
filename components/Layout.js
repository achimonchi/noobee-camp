import Navbar from "./Navbar";
import Head from 'next/head';

import '../styles/Style.css'

const Layout = (props) =>(
    <div>
        <Head>
            <link rel="icon" href="/images/icon.ico" type="image/ico" sizes="128x128"/> 
            {/* meta tag */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="description" content="Lagi nyari Bootcamp? NooBeeCamp adalah suatu program Bootcamp di Pekanbaru, yang diinisiasi oleh NooBeeID."/>
            <meta name="google-site-verification" content="ZhBcRCIPCzRGpLMsL6-weqa-MEXXkuwWORY8_meDCCw" />
            <title>NooBeeCamp</title>
            {/* link fontawesome */}
            {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossOrigin="anonymous"></link> */}

            {/* link fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
            
            {/* link bootstrap */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
            {/* theme */}

            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-172743409-1"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    <!-- Global site tag (gtag.js) - Google Analytics -->
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'UA-172743409-1');                    
                    `,
                }}
                ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        <!-- Google Analytics -->
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                        
                        ga('create', 'UA-XXXXX-Y', 'auto');
                        ga('send', 'pageview');
                        <!-- End Google Analytics -->
                    `,
                }}
                ></script>
        </Head>
        <Navbar activeClass={props.activeClass}/>
        {props.children}

        
    </div>
)

export default Layout;