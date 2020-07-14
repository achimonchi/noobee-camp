import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import Link from 'next/link';

const _banner = ({kelas}) =>{
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
                                    <h1 className="mt-5 text-banner"><b>Kelas <span>{kelas}</span></b></h1>
                                    <h4 className="sub-text-banner mt-4"><i>Program <b>Batch #1</b><br/>Periode <b>Oktober - Desember</b></i></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Program = (props) => {
    const [className, setClassName] = useState(props.url.query.kelas);

    const [listClass, setListClass] = useState([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(()=>{
        async function setData(){
            const list = ["IT", "Design", "Others"]
            setClassName(props.url.query.kelas)
            setListClass(list);

            const flag = await list.find((l)=>{return props.url.query.kelas == l})
            if(!flag){
                setNotFound(true);
            } else {
                setNotFound(false)
            }
        }
        
        setData()

    }, [props.url.query.kelas])
    return(
        <Layout activeClass={props.url.pathname}>
            {notFound 
                ?   <div className="wrapper bg-dark text-white p-5">
                        <div className="container p-5">
                            <div className="row text-center">
                            <div className="col-md">
                                <h1 className="mt-3">404 </h1> 
                                <h4 className="mt-4">Maaf.. Kelas yang anda cari, tidak ditemukan</h4>
                                <h6>List kelas yang tersedia : </h6>
                                <h6>
                                    {listClass.map((l,i)=>(
                                        <Link href={"/program?kelas="+l}><a className="mr-3" key={i}>{l}</a></Link>
                                        
                                    ))}
                                </h6>
                            </div>            
                            </div>
                        </div>
                    </div>
                :   <div className="wrapper">
                        <_banner
                            kelas={className}
                        />
                    </div>}
        </Layout>
    )
}


export default Program;