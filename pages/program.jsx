import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import Link from 'next/link';

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
            <div className="container">
                <div className="row text-center">
                    {notFound 
                    ? <div className="col-md">
                        <h1 className="mt-3">404 </h1> 
                        <h4 className="mt-4">Maaf.. Kelas yang anda cari, tidak ditemukan</h4>
                        <h6>List kelas yang tersedia : </h6>
                        <h6>
                            {listClass.map((l,i)=>(
                                <Link href={"/program?kelas="+l}><a className="mr-3" key={i}>{l}</a></Link>
                                
                            ))}
                        </h6>
                    </div>
                    : <h1>Program Class {className}</h1> }
                </div>
            </div>
        </Layout>
    )
}


export default Program;