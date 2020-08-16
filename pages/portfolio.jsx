import Layout from '../components/Layout'
import '../styles/portfolio.css';
import { motion } from 'framer-motion';

const _banner = () =>{
    const date = new Date();
    const day = date.getDate();
    const listMonth=[
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"
    ]
    const month = listMonth[date.getMonth()];
    const year = date.getFullYear();
    return (
        <div className="banner">
            <div className="bg-banner">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <motion.div initial="hidden" animate="visible" variants={{
                                hidden:{
                                    scale:.5,
                                    opacity:0
                                },
                                visible:{
                                    scale:1,
                                    opacity:1,
                                    transition:{
                                        delay:.4,
                                        delayChildren:1
                                    }
                                }
                            }}  className="banner-wrapper">
                                <h1 className="mt-5 text-banner"><b>Kumpulan Portfolio Yang Telah Dibuat Oleh Peserta NooBee<span>Camp</span></b></h1>
                                <h4 className="sub-text-banner mt-4"><i>*Updated <b>{`${day}-${month}-${year}`}</b></i></h4>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _search_bar=()=>{
    return(
        <motion.div 
        initial={{
            opacity:0,
            y:-60
        }}
        animate={{
            opacity:1,
            y:0
        }}
        transition={{
            delay:.7,
            duration:.5
        }}
        className="search-bar-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="search-bar">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Cari Nama Peserta Bootcamp" aria-label="Cari Nama Peserta Bootcamp" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button 
                                        type="submit"
                                        className="btn input-group-text bg-filled" 
                                        id="basic-addon2"><img src="/images/icon/search.svg" /> <span className="text-btn-search">&nbsp; Cari portfolio</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const _content=(props)=>{
    return(
        <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            opacity:1,
        }}
        transition={{
            delay:1,
            duration:.4
        }}
        className="content-portfolio-section">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2 className="text-header text-center mt-5">
                            Maaf, tidak ada satupun portfolio yang tersedia disini.
                        </h2>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const Portfolio = (props) => {
    return(
        <Layout activeClass={props.url.pathname}>
            <div className="wrapper">
                <_banner/>
                <_search_bar/>
                <_content/>
            </div>
        </Layout>
    )
} 


export default Portfolio;