import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import Link from 'next/link';
import {motion} from 'framer-motion'

import {capitalize, toLowerCase} from './../components/helper/string'
import Card from '../components/Card';

import "../styles/program.css"


const easing = [.6, -0.05, 0.01, 0.99];

const _banner = ({kelas}) =>{
    return (
        <motion.div exit={{opacity:0}} initial="initial" animate="animate"  className="banner">
            <div className="bg-banner">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <motion.div variants={{
                            animate : {
                                staggerChildren : 0.5
                            }
                        }} className="col-md-7 text-center">
                            <motion.div 
                                initial={{
                                    scale : .5,
                                    opacity: 0
                                }}
                                animate = {{
                                    scale : 1,
                                    opacity:1,
                                    transition : {
                                        duration : .6,
                                        delay : .5,
                                        ease : easing,
                                    }
                                }}
                                
                            className="banner-wrapper">
                                <h1 className="mt-5 text-banner"><b>Kelas <span>{capitalize(kelas)}</span></b></h1>
                                <h4 className="sub-text-banner mt-4"><i>Program <b>Batch #1</b><br/>Periode <b>Oktober - Desember</b></i></h4>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const _not_found=()=>{
    return(
        <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            opacity:1,
        }}
        transition={{
            delay:1.3,
            duration:.4
        }}
        className="container">
            <div className="row">
                <div className="col-md">
                    <h2 className="text-center text-header mt-4">
                        Program untuk kelas ini masih belum tersedia !
                    </h2>
                </div>
            </div>
        </motion.div>
    )
}

const _search_bar=(props)=>{
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
            delay:1,
            duration:.5
        }}
        className="search-bar-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
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
        className="program-kelas-section">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="program-kelas">
                            <div
                            className="row">
                                {props.list.map((l,i)=>(
                                    <motion.div 
                                    initial={{
                                        opacity:0,
                                        x:-100
                                    }}
                                    animate={{
                                        opacity:1,
                                        x:0
                                    }}
                                    transition={{
                                        delay:.7+(i/5),
                                        duration:.4,
                                    }}
                                    key={i} className="col-md-4">
                                        <Card 
                                            className="card mt-4"
                                            title={l.nameClass}
                                            desc={l.desc}
                                            subHeader={l.price}
                                            link={"/program/kelas?id="+l.id}
                                            img={l.img}
                                            promo={l.promo}
                                            footer={l.footer}
                                            textButton="Lihat detail materi"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const Program = (props) => {
    const [className, setClassName] = useState("");

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
                }
            ]
        }
    ]);
    const [notFound, setNotFound] = useState(false);
    const [listData, setListData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const handleChange= (e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const list = masterData;
        const s = new RegExp(search, "gi");
        const newList = list.filter((l)=>{
            return l.nameClass.search(s) !== -1
        });
        
        console.log(newList, masterData);
        setListData(newList)
    }

    const get_data=(kelas)=>{
        return new Promise(async(resolve, reject)=>{
            const uri = "https://dbcamp.noobee.id/"+toLowerCase(kelas);
            const res = await fetch(uri) ;
            const data = await res.json() ;
            
            if(data.length > 0){
                resolve(data);
            } else {
                resolve(data)
            }
        })
    }

    useEffect(()=>{
        async function setData(){
            const list = ["it", "design", "others"]
            setClassName(props.url.query.kelas || window.location.search.split("=")[1])
            setListClass(list);

            const newList = await get_data(props.url.query.kelas || window.location.search.split("=")[1]);
            // console.log(newList)
            setListData(newList);
            setMasterData(newList);

            const flag = list.find(l=>{return toLowerCase(props.url.query.kelas) == toLowerCase(l)})
            if(!flag){
                setNotFound(true);
            } else {
                setNotFound(false)
            }

            setLoading(false);

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
                :   <motion.div exit={{opacity:0}} initial="initial" animate="animate" className="wrapper">
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
                            : !isLoading
                                ?  <_not_found/>
                                : <motion.div 
                                className="container">
                                    <div className="row">
                                        <div className="col-md">
                                            <h2 className="text-center text-header mt-4">
                                                Loading ...
                                            </h2>
                                        </div>
                                    </div>
                                </motion.div>
                        }
                    </motion.div>}
        </Layout>
    )
}


export default Program;