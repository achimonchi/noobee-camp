import Layout from '../components/Layout'

import '../styles/index.css';
import Link from 'next/link';

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
                                    <img className="icon-mini-banner" src="/images/user.svg" alt="user"/>
                                    <h3 className="text-mini-banner mt-4"><b>100</b> Peserta</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mini-icon">
                                    <img className="icon-mini-banner" src="/images/bag.svg" alt=""/>
                                    <h3 className="text-mini-banner mt-4"><b>30</b> Portfolio</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mini-icon">
                                    <img className="icon-mini-banner" src="/images/cupboard.svg" alt=""/>
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
                                    <img src="/images/bg-about.png" alt="about" className="img-about"/>
                                </div>
                                <div className="col-md-6 offset-md-1">
                                    <div className="text-about">
                                        <h2 className="text-header">Apa sih, NooBee<b>Camp</b> itu ?</h2>
                                        <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laboriosam illo incidunt culpa, tempore perferendis ipsa laudantium, cumque iusto officia iste sint velit temporibus eum. Ad, labore. Autem, dolorum blanditiis!Possimus officiis quas cupiditate doloribus delectus magnam repellat dignissimos odio, nulla unde laborum culpa itaque voluptatum! Sunt veritatis natus at quas itaque maxime eaque, fugiat fuga dolores hic est doloribus.</p>
                                        <Link href="/registrasi"><a className="btn btn-filled btn-full btn-about">Daftar Sekarang</a></Link>
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
                    </div>
                </div>
            </div>
        </div>
    )
}


const Index = (props) =>{
    const [program, setProgram] = useState([
        {
            title : "Kelas Design",
            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pretium senectus purus, vel. Non est sapien imperdiet amet tincidunt euismod."
        },
        {
            title : "Kelas Programming",
            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pretium senectus purus, vel. Non est sapien imperdiet amet tincidunt euismod."
        },
        {
            title : "Kelas Bahasa Inggris",
            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pretium senectus purus, vel. Non est sapien imperdiet amet tincidunt euismod."
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