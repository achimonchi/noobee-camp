const { default: Link } = require("next/link")

const _footer=()=>{
    return(
        <div className="footer-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 mt-4">
                        <h3 className="sub-text-header">
                            Sosial Media
                        </h3>
                        <ul>
                            <li><a rel="noopener" href="https://www.instagram.com/noobeeid/" target="_blank"  >Instagram</a></li>
                            <li>Facebook</li>
                            <li><a rel="noopener" href="https://www.youtube.com/channel/UCQQm_3B0HGukh_bHYe8rUOA" target="_blank" >Youtube</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-4 mb-3">
                        <h3 className="sub-text-header">
                            Informasi Lain
                        </h3>
                        <ul>
                            <li><Link href="/"><a>FAQ</a></Link></li>
                            <li><Link href="/"><a>Jadwal Bootcamp</a></Link></li>
                            <li><Link href="/"><a>Kontak Kami</a></Link></li>
                            <li><a rel="noopener" href="https://forms.gle/enUQxF35nfJzsDhJ6" target="_blank">Daftar</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-4 mb-3 offset-md-3">
                        <img alt="logo noobeeid" src="/images/logo.svg" className="logo-footer"/>
                        <br/>
                        <span>
                        NooBeeCamp adalah suatu program Bootcamp di Pekanbaru, yang diinisiasi oleh NooBeeID. Dengan kurikulum yang selalu up-to-date, sehingga masyarakat mampu untuk bersaing di dunia kerja.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _copyright=()=>{
    const date = new Date();
    const year = date.getFullYear();

    return(
        <div className="copyright-section p-2 pl-5 pr-5 bg-filled">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <div className="copyright">
                            <div className="text-center mt-2 mb-2">
                                <b>Copyright {year} &copy;</b> | NooBeeID -  All rights reserved.
                            </div>
                            <div className="kontak">
                                <div><img alt="phone" src="/images/icon/phone.svg"/> +62-877-1606-2764</div>
                                <div><img alt="email" src="/images/icon/email.svg"/> support@noobee.id</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Footer =()=>{
    return(
        <div className="wrapper">
            <_footer/>
            <_copyright/>
        </div>
    )
}


export default Footer;