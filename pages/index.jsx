import Layout from '../components/Layout'
import { motion } from 'framer-motion';

import '../styles/index.css';
import Link from 'next/link';

import Card from './../components/Card';

import {useState} from 'react'

const _banner = () =>{
    return (
        <div className="banner">
            <div className="bg-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md text-center">
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
                            }} className="banner-wrapper">
                                <h1 className="mt-5 text-banner"><b>Bootcamp? Yuk langsung ke <br/>NooBee<span>Camp</span> aja</b></h1>
                                <h4 className="sub-text-banner mt-4">"Siapapun bisa menjadi hebat"</h4>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _miniBanner=()=>{
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="mini-banner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mini-icon">
                                    <img alt="user" className="icon-mini-banner" src="/images/user.svg" alt="user"/>
                                    <h3 className="text-mini-banner mt-4"><b>0</b> Peserta</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mini-icon">
                                    <img alt="portfolio" className="icon-mini-banner" src="/images/bag.svg" alt=""/>
                                    <h3 className="text-mini-banner mt-4"><b>0</b> Portfolio</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mini-icon">
                                    <img alt="class" className="icon-mini-banner" src="/images/cupboard.svg" alt=""/>
                                    <h3 className="text-mini-banner mt-4"><b>5</b> Kelas</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _about=()=>{
    return(
        <div className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="about">
                            <div className="row">
                                <div className="col-md-6">
                                    <motion.img  
                                        initial={{opacity:0, x:-100}}
                                        animate={{opacity:1, x:0}}
                                        transition={{
                                            duration:.3,
                                            delay:.7
                                        }}
                                    alt="about" src="/images/bg-about.webp" alt="about" className="img-about"/>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-about">
                                        <h2 className="text-header">Apa sih, NooBee<b>Camp</b> itu ?</h2>
                                        <p className="mt-3">
                                            NooBeeCamp adalah suatu program Bootcamp di Pekanbaru, yang diinisiasi oleh <b><i><a rel="noopener" href="http://noobee.id/" target="_blank">NooBeeID</a></i></b>.
                                            Dengan kurikulum yang selalu <b>up-to-date</b>, sehingga masyarakat mampu untuk bersaing di dunia kerja.
                                        </p>
                                        <Link href="#"><a rel="noopener" target="_blank" href="https://forms.gle/enUQxF35nfJzsDhJ6"  className="btn btn-filled btn-full btn-about">Daftar sekarang</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _quotes=()=>{
    return(
        <div className="quotes-section">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <h1 className="text-quotes text-center">"Ilmu Pengetahuan Adalah <span>Investasi</span> Jangka Panjang Terbaik"</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _program=(props)=>{

    return(
        <div className="program-section">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2 className="text-header text-center">Program yang ada di NooBeeCamp</h2>
                        <div className="row">
                            {props.program.map((p,i)=>(
                                <div className="col-md-4" 
                                key={i} >
                                    <Card
                                        className="card mt-4"
                                        title={p.title}
                                        desc={p.desc}
                                        link={p.link}
                                        img={p.img}
                                        textButton="Intip sebentar yuk !"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const _time=()=>{

}


const Index = (props) =>{
    const [program, setProgram] = useState([
        {
            title : "Kelas Design",
            desc : "Belajar design adalah suatu hal yang wajib rasanya, mengingat kondisi zaman sekarang yang serba digital. Nah, kelas ini merupakan kelas untuk belajar design, dari 0.",
            link:"/program?kelas=design",
            img:"design.webp"
        },
        {
            title : "Kelas IT",
            desc : "Pengen belajar IT? Disini terdapat berbagai macam kelas yang berhubungan dengan IT, seperti programming, networking, dll. Buat kamu yang masih pemula, kelas ini cocok karena akan selalu dibimbing oleh mentor.",
            link:"/program?kelas=IT",
            img:"programming.webp"
        },
        {
            title : "Kelas Bahasa Inggris",
            desc : "Bahasa inggris saat ini merupakan syarat wajib untuk interview kerja. Dengan mengusung konsep diskusi, kelas ini memudahkan kamu untuk menghafal grammer sekaligus pronunciation-nya.",
            link:"/program?kelas=english",
            img:"english.webp"
        },
    ])
    return(
        <Layout activeClass={props.url.pathname}>
            <div className="wrapper">
                <_banner/>
                <_miniBanner/>
                <_about/>
                <_quotes/>
                <_program
                    program={program}
                />
            </div>
        </Layout>
    )
}





export default Index;