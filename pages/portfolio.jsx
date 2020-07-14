import Layout from '../components/Layout'


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

const Portfolio = (props) => {
    return(
        <Layout activeClass={props.url.pathname}>
            <div className="wrapper">
                <_banner/>
            </div>
        </Layout>
    )
} 


export default Portfolio;