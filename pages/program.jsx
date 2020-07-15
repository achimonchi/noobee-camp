import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import Link from 'next/link';

import {capitalize, toLowerCase} from './../components/helper/string'
import Card from '../components/Card';

import "../styles/program.css"

const _banner = ({kelas}) =>{
    return (
        <div className="banner">
            <div className="bg-banner">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <div className="banner-wrapper">
                                    <h1 className="mt-5 text-banner"><b>Kelas <span>{capitalize(kelas)}</span></b></h1>
                                    <h4 className="sub-text-banner mt-4"><i>Program <b>Batch #1</b><br/>Periode <b>Oktober - Desember</b></i></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _not_found=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <h2 className="text-center text-header mt-4">
                        Program untuk kelas ini masih belum tersedia !
                    </h2>
                </div>
            </div>
        </div>
    )
}

const _search_bar=(props)=>{
    return(
        <div className="search-bar-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-md-10">
                        <div className="search-bar">
                            <form onSubmit={(e)=>props.onSubmit(e)}>
                                <div className="input-group">
                                    <input 
                                        autoFocus={true}
                                        value={props.search}
                                        type="text" 
                                        onChange={(e)=>props.onChange(e)}
                                        className="form-control" 
                                        placeholder="Materi apa yang sedang kamu cari?" 
                                        aria-label="Materi apa yang sedang kamu cari?" 
                                        aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button 
                                        type="submit"
                                        className="btn input-group-text bg-filled" 
                                        id="basic-addon2"><img alt="search icon" src="/images/icon/search.svg" /> <span className="text-btn-search">&nbsp; Cari materi</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _content=(props)=>{
    
    return(
        <div className="program-kelas-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <div className="program-kelas">
                            <div className="row">
                                {props.list[0].listClass.map((l,i)=>(
                                    <div key={i} className="col-md-4">
                                        <Card 
                                            className="card mt-4"
                                            title={l.nameClass}
                                            desc={l.desc}
                                            subHeader={l.price}
                                            link={l.link}
                                            img={l.img}
                                            promo={l.promo}
                                            footer={l.footer}
                                            textButton="Lihat detail materi"
                                        />
                                    </div>
                                ))}
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

    const [listClass, setListClass] = useState([
        {
            name : "",
            listClass : [
                {
                    nameClass : "",
                    price : "",
                    desc : "",
                    img : "placeholder.webp",
                    footer : "",
                    link : "#"
                }
            ]
        }
    ]);
    const [notFound, setNotFound] = useState(false);
    const [listData, setListData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    const [search, setSearch] = useState("");

    const handleChange= (e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const list = masterData;
        const s = new RegExp(search, "gi");
        const newList = list[0].listClass.filter((l)=>{
            return l.nameClass.search(s) !== -1
        });
        
        console.log(newList, masterData);
        setListData([
            {
                name: masterData[0].name,
                listClass : newList
            }
        ])
    }

    const get_data=(kelas)=>{
        return new Promise((resolve, reject)=>{
            const data = [
                {
                    name : "IT",
                    listClass : [
                        {
                            nameClass : "Fundamental Programming",
                            price : "350000",
                            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pretium senectus purus.",
                            img : "programming.webp",
                            footer : "Cocok untuk pemula",
                            link : "/program?kelas=IT",
                            promo: "450000"
                        },
                        {
                            nameClass : "Fullstack Developer",
                            price : "450000",
                            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pretium senectus purus.",
                            img : "codeigniter.webp",
                            footer : "Mempunyai basic programming",
                            link : "/program?kelas=IT",
                            promo: "550000"
                        },
                        {
                            nameClass : "Fullstack Designer",
                            price : "300000",
                            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pretium senectus purus.",
                            img : "fullstack-designer.webp",
                            footer : "Cocok untuk pemula",
                            link : "/program?kelas=IT",
                            promo: "450000"
                        },
                        {
                            nameClass : "MERN Stack",
                            price : "550000",
                            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pretium senectus purus.",
                            img : "mern.webp",
                            footer : "Mempunyai basic programming",
                            link : "/program?kelas=IT",
                            promo: "700000"
                        },
                        {
                            nameClass : "Golang Stack",
                            price : "550000",
                            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pretium senectus purus.",
                            img : "golang.webp",
                            footer : "Mempunyai basic programming",
                            link : "/program?kelas=IT",
                            promo: "700000"
                        }
                    ]
                }
            ];

            const list = data.filter((d=>{return toLowerCase(d.name) == toLowerCase(kelas)}));
            resolve(list);
        })
    }

    useEffect(()=>{
        async function setData(){
            const list = ["it", "design", "others"]
            setClassName(props.url.query.kelas)
            setListClass(list);

            const newList = await get_data(props.url.query.kelas);
            await setListData(newList);
            await setMasterData(newList);

            const flag = await list.find(l=>{return toLowerCase(props.url.query.kelas) == toLowerCase(l)})
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
                                        <Link key={i} href={"/program?kelas="+l}><a className="mr-3" >{l}</a></Link>
                                        
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
                        <_search_bar 
                            onSubmit = {handleSubmit}
                            search = {search}
                            onChange = {handleChange}
                        />
                        {listData.length > 0
                            ? <_content list={listData} />
                            : <_not_found/>
                        }
                    </div>}
        </Layout>
    )
}


export default Program;