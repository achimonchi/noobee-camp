import Navbar from "./Navbar";
import Head from 'next/head';
import ReactGa from 'react-ga';

import '../styles/Style.css'
import { useEffect } from "react";
import Footer from "./Footer";

import {AnimatePresence} from 'framer-motion';

const Layout = (props) =>{
    useEffect(()=>{
        ReactGa.initialize("UA-172743409-2");

        ReactGa.pageview(window.location.pathname+window.location.search);
    },[])
    return (
        <AnimatePresence>
            <div>
            <Head>
                <link rel="icon" href="/images/icon.ico" type="image/ico" sizes="128x128"/> 
                {/* meta tag */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="NooBeeCamp merupakan Coding Bootcamp yang paling Up-to-Date di Pekanbaru. Kamu akan dibekali kemampuan standard industri dan mampu bersaing di level nasional."/>
                <meta name="google-site-verification" content="ZhBcRCIPCzRGpLMsL6-weqa-MEXXkuwWORY8_meDCCw" />
                <meta name="keyword" content="NooBeeID, noobee.id, noobeecamp, camp.noobee.id, Bootcamp pekanbaru, Bootcamp IT Pekanbaru, Bootcamp IT, Bootcamp, Belajar Programming, bootcamp training"/>
                <meta property="og:title" content="NooBeeCamp | Bootcamp Coding Pekanbaru"/>
                <meta property="og:description" content="NooBeeCamp merupakan Coding Bootcamp yang paling Up-to-Date di Pekanbaru. Kamu akan dibekali kemampuan standard industri dan mampu bersaing di level nasional."/>
                <meta property="og:site_name" content="camp.noobee.id"/>
                <meta name="robots" content="index, follow" />
                <title>NooBeeCamp | Bootcamp Coding Pekanbaru</title>
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
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-172743409-2"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
                                window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'UA-172743409-2');`,
                    }}
                />

            </Head>
            <Navbar activeClass={props.activeClass}/>
            {props.children}
    
            <Footer/>
        </div>
        </AnimatePresence>
    )
}

export default Layout;