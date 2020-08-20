import Layout from "../../components/Layout";
import React, { useState, useEffect } from 'react';
import {capitalize, toLowerCase, convertCurrencies} from '../../components/helper/string'

import {motion} from 'framer-motion';

const _banner = ({kelas,footer}) =>{
    return (
        <div className="banner">
            <div className="bg-banner">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <motion.div 
                                initial={{opacity:0, scale:.5}}
                                animate={{opacity:1, scale:1}}
                                transition={{delay:1, duration:.3}}
                                exit={{opacity:0}}
                            className="banner-wrapper">
                                <h1 
                                className="mt-5 text-banner"><b>Kelas <span>{capitalize(kelas)}</span></b></h1>
                                <h4 className="sub-text-banner mt-4"><i>Program <b>Batch #1</b><br/>Periode <b>Oktober - Desember</b></i></h4>
                                <button className="mt-4 outline-banner" style={{
                                    border:"1px solid rgba(255,255,255,.5)", 
                                    color:"white",
                                    padding:"10px 20px",
                                    background:"transparent",
                                    borderRadius:"5px"
                                }}>
                                    Syarat : {footer}
                                </button>
                                {/* <a href="https://forms.gle/enUQxF35nfJzsDhJ6" target="_blank" className="mt-4 btn mr-3" style={{
                                    border:"1px solid #FFDA40", 
                                    color:"#333",
                                    padding:"10px 20px",
                                    background:"#FFDA40"
                                }}>
                                    Daftar yuk !
                                </a> */}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _bannerImage=({img}) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div 
                    style={{background:"white", borderRadius:"10px", marginTop:"-4em"}}
                    className="content p-2"
                    >
                        <motion.img
                            initial={{opacity:0, y:100}} 
                            animate={{opacity:1.2, y:0}}
                            transition={{delay:2}}
                            style={{width:"100%", borderRadius:"10px", maxHeight:"30em", objectFit:"cover"}}
                        src={"../images/kelas/"+img} alt={img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _minibanner = ({kelas, desc, mainTopics, footer, promo, price}) =>{
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 mb-5">
                    <motion.div 
                        initial={{opacity:0, y:100}}
                        animate={{opacity:1, y:0, delay:0}}
                        transition={{delay:.6, duration:.4}}
                        style={{background:"white", height:"100%"}}
                    className="content p-5" >
                        <h4 className="mb-3"><b>Tentang Kelas</b></h4>
                        <p style={{textAlign:"justify"}}>{desc}</p>
                    </motion.div>
                </div>
                <div className="col-md-4 mb-5">
                    <div 
                    style={{background:"white", height:"100%"}}
                    className="content p-5 pb-0">
                        <h4 className="mb-3"><b>Topik Utama</b></h4>
                            {mainTopics.map((m,i)=>(
                                <div key={i} className="mt-2 ml-2">
                                    {i+1}. {m}
                                </div>
                            ))}
                            <hr/>
                        <div>
                            <div>Syarat : {footer}</div>
                            <hr/>
                            <div style={{textAlign:"center"}}>
                                {price  
                                ? promo 
                                    ? <div><span className="promo">{convertCurrencies(promo)}</span></div>
                                    : ""
                                : ""
                                }
                                <span className="" style={{
                                    fontWeight:"bold",
                                    fontSize:"1.2rem"
                                }}>{convertCurrencies(price)}</span>
                            </div>
                            
                            <a href={"https://api.whatsapp.com/send?phone=6287716062764&text=Saya ingin mendaftar Bootcamp di NooBeeCamp Batch *1* pada kelas : *"+kelas+"*"} target="_blank" style={{background:"#FFDA40"}} className="mt-3 btn btn-block">
                                Yuk daftar sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _silabus=({silabus})=>{
    const [idTarget, setIdTarget] = useState("");
    const [isCollapse, setIsCollapse] = useState(true);

    const handleClick=(e)=>{
        const element = e.target;
        const id = element.getAttribute("target");
        const target = document.getElementById(id.split("#")[1]);
        if(idTarget !== id){
            setIdTarget(id);
        }
        setIsCollapse(!isCollapse);

        if(isCollapse){
            target.style.display = "inherit"
        } else {
            target.style.display = "none"
        }


        
        // if(count%2===0){
        //     target.style.display = "inherit"
        // }
        // else {
        //     target.style.display = "none"
        // }

        // console.log(count)

    }
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div 
                    style={{background:"white"}}
                    className="content p-5">
                        <h4 className="mb-3"><b>Silabus</b></h4>
                        {silabus.map((s,i)=>(
                            <div className="mb-3" id={i} key={i} >
                                <div 
                                id={"header-"+i}
                                onClick={handleClick}
                                target={"#data-"+i}
                                style={{
                                    background:"#eee",
                                    borderRadius:"3px",
                                    boxShadow:"0px 10px 10px -5px rgba(0,0,0,.2)"

                                }}
                                className=" p-3 silabus-header" >
                                    {i+1}. {s.title}
                                </div>
                                <div 
                                style={{transition:".3s",  display:"none"}}
                                id={"data-"+i} >
                                    {s.topics.map((t,i)=>(
                                        <div 
                                        key={i}
                                        id={"silabus-content-"+i}
                                        style={{
                                            background:"#fff",
                                            borderRadius:"3px",
                                            border:"1px solid #ccc",
                                            transition:"ease-in .3s"
                                        }}
                                        className="pl-3 pr-3 pt-2 pb-2 mt-3 ml-3 silabus-content">
                                            {t}
                                        </div>
                                        ))}
                                </div>
                                
                            </div>
                        ))}
                        
                    </div>
                </div>
                <div className="col-md-7">
                    
                </div>
            </div>
        </div>
    )
}

const Kelas = (props) =>{
    const [classData, setClassData] = useState({
        id: "",
        nameClass : "",
        price : "",
        desc : "",
        img : "",
        silabus : [{title:"", topics:[]}],
        mainTopics : []
    });

    const get_data=(idClass)=>{
        return new Promise(async(resolve, reject)=>{
            try{
                const uri = `https://dbcamp.noobee.id/it?id=${idClass}`;
                const res = await fetch(uri);
                const data = await res.json();
                // console.log(data)
                if(data.length > 0){
                    resolve(data[0])
                } else {
                    resolve({
                        id: "",
                        nameClass : "",
                        price : "",
                        desc : "",
                        img : "",
                        silabus : [{title:"", topics:""}],
                        mainTopics : []
                    })
                }
            } catch(err){
                reject(err)
            }
        })
    }

    useEffect(()=>{
        async function setData(){
            const id = props.url.query.id || window.location.search.split("=")[1];
            const data = await get_data(id);
            setClassData(data);
        }

        setData()
    },[props.url.query.id])
    return (
        <Layout activeClass={props.url.pathname} >
            <div className="wrapper">
                <_banner footer={classData.footer} kelas={classData.nameClass}/>
                <_bannerImage img={classData.img} />
                <_minibanner
                kelas={classData.nameClass}
                promo={classData.promo} price={classData.price}
                 desc={classData.desc} mainTopics={classData.mainTopics} footer={classData.footer}  />
                <_silabus silabus={classData.silabus}/>
            </div>
        </Layout>
    )
}

export default Kelas;