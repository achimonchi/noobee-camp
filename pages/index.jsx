import Layout from '../components/Layout'

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
                            <div className="banner-wrapper">
                                <h1 className="mt-5 text-banner"><b>Bootcamp? Yuk langsung ke <br/>NooBee<span>Camp</span> aja</b></h1>
                                <h4 className="sub-text-banner mt-4">"Siapapun bisa menjadi hebat"</h4>
                            </div>
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
            <div className="row">
                <div className="col-md">
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <div className="about">
                            <div className="row">
                                <div className="col-md-5">
                                    <img  alt="about" src="/images/bg-about.png" alt="about" className="img-about"/>
                                </div>
                                <div className="col-md-5 offset-md-2">
                                    <div className="text-about">
                                        <h2 className="text-header">Apa sih, NooBee<b>Camp</b> itu ?</h2>
                                        <p className="mt-3">
                                            NooBeeCamp adalah suatu program Bootcamp di Pekanbaru, yang diinisiasi oleh <b><i><a rel="noopener" href="http://noobee.id/" target="_blank">NooBeeID</a></i></b>.
                                            Dengan kurikulum yang selalu <b>up-to-date</b>, sehingga masyarakat mampu untuk bersaing di dunia kerja.
                                        </p>
                                        <Link href="/registrasi"><a className="btn btn-filled btn-full btn-about">Daftar sekarang</a></Link>
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
            <div className="container-fluid">
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
            img:"design.jpg"
        },
        {
            title : "Kelas IT",
            desc : "Pengen belajar IT? Disini terdapat berbagai macam kelas yang berhubungan dengan IT, seperti programming, networking, dll. Buat kamu yang masih pemula, kelas ini cocok karena akan selalu dibimbing oleh mentor.",
            link:"/program?kelas=IT",
            img:"programming.jpg"
        },
        {
            title : "Kelas Bahasa Inggris",
            desc : "Bahasa inggris saat ini merupakan syarat wajib untuk interview kerja. Dengan mengusung konsep diskusi, kelas ini memudahkan kamu untuk menghafal grammer sekaligus pronunciation-nya.",
            link:"/program?kelas=english",
            img:"english.jpg"
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