import {useState, useEffect} from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router'

import '../styles/navbar.css'

const Navbar=({activeClass})=>{
    const [navClass, setNavClass] = useState({
        home: "nav-item",
        portfolio: "nav-item active",
        program: "nav-item dropdown",
    })

    const [navbar, setNavbar] = useState("navbar navbar-expand-lg navbar-light bg-light main-navbar fixed-top")

    useEffect(()=>{
        const path=activeClass.split("/")[1];
        switch(path){
            case "":
                setNavClass({
                    home: "nav-item active",
                    portfolio: "nav-item ",
                    program: "nav-item dropdown",
                });
                break;
            case "portfolio":
                setNavClass({
                    home: "nav-item",
                    portfolio: "nav-item active",
                    program: "nav-item dropdown",
                });
                break;
            case "program":
                setNavClass({
                    home: "nav-item",
                    portfolio: "nav-item ",
                    program: "nav-item dropdown active",
                });
                break;
            default:
                setNavClass({
                    home: "nav-item active",
                    portfolio: "nav-item ",
                    program: "nav-item dropdown",
                });
        }

        window.onscroll = (ev)=>{
            const scroll = parseInt(window.scrollY);
            if(scroll > 200 ){
                setNavbar("navbar navbar-expand-lg navbar-light bg-light main-navbar fixed-top scrolled")
                console.log(scroll)
            } else {
                setNavbar("navbar navbar-expand-lg navbar-light bg-light main-navbar fixed-top")
            }

            console.log(window.innerWidth)
        }


    },[activeClass])

    return(
        <nav className={navbar}>
            <Link href="/"><a className="navbar-brand"><img alt="logo" className="logo" src="/images/logo.svg"/> NooBee<b>Camp</b></a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className={navClass.home}>
                        <Link href="/"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className={navClass.portfolio}>
                        <Link href="/portfolio">
                        <a className="nav-link" href="#">Portfolio</a></Link>
                    </li>
                    <li className={navClass.program}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Program
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link href="/program?kelas=IT"><a className="dropdown-item" href="#">Kelas IT</a></Link>
                            <Link href="/program?kelas=Design"><a className="dropdown-item" href="#">Kelas Design</a></Link>
                            <Link href="/program?kelas=Others"><a className="dropdown-item" href="#">Kelas Lainnya</a></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link href="/registrasi"><a className="nav-link btn-register text-dark" href="#">Daftar sekarang</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;