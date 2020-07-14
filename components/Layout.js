import Navbar from "./Navbar";
import Head from 'next/head';

import '../styles/Style.css'

const Layout = (props) =>(
    <div>
        <Head>
            <link rel="icon" href="/images/icon.ico" type="image/ico" sizes="128x128"/> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>NooBeeCamp</title>
            {/* link fontawesome */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossOrigin="anonymous"></link>

            {/* link fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
            
            {/* link bootstrap */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
            
            {/* theme */}
        </Head>
        <Navbar activeClass={props.activeClass}/>
        {props.children}
    </div>
)

export default Layout;