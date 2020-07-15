import Layout from '../components/Layout'
import '../styles/portfolio.css';
import Card from '../components/Card';

const _banner = () =>{
    const date = new Date();
    const day = date.getDay();
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
                            <div className="banner-wrapper">
                                <h1 className="mt-5 text-banner"><b>Kumpulan Portfolio Yang Telah Dibuat Oleh Peserta NooBee<span>Camp</span></b></h1>
                                    <h4 className="sub-text-banner mt-4"><i>*Updated <b>{`${day}-${month}-${year}`}</b></i></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _search_bar=()=>{
    return(
        <div className="search-bar-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-md-10">
                        <div className="search-bar">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Cari Nama Peserta Bootcamp" aria-label="Cari Nama Peserta Bootcamp" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-filled" id="basic-addon2"><i className="fas fa-search"></i> &nbsp; Cari</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _content=(props)=>{
    return(
        <div className="content-portfolio-section">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2 className="text-header text-center mt-5">
                            Maaf, tidak ada satupun portfolio yang tersedia disini.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
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