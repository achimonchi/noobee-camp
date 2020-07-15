import { useState, useEffect } from "react";
import Link from 'next/link';

const Card = (props) => {
    const [title, setTitle] = useState("Title here");
    const [desc, setDesc] = useState("desc here");
    const [link, setLink] = useState("Title here");
    const [className, setClassName] = useState("className here");
    const [user, setUser] = useState("");
    const [img, setImg] = useState("placeholder.webp");

    useEffect(()=>{
        if(props.className !== ""){
            setClassName(props.className);
        }

        if(props.title !== ""){
            setTitle(props.title);
        }

        if(props.img !== ""){
            setImg(props.img)
        }

        if(props.link !== ""){
            setLink(props.link);
        }

        if(props.desc !== ""){
            setDesc(props.desc);
        }

        if(props.user !== ""){
            setUser(props.user);
        }
    }, [props])


    return(
        <div className={className}>
            {user 
                ?   <div>
                        {user}
                    </div>
                : <div></div>
            }
            <div className="img-card" style={{backgroundImage:`url(/images/kelas/${img})`}} ></div>            <div className="card-body">
                
                <h4 className="text-card mt-2"><b>{title}</b></h4>
                <p className="mt-3 mb-3">
                    {desc}
                </p>
                <Link href={link}>
                    <a className="btn btn-filled">
                        Intip sebentar yuk!
                    </a>
                </Link>
            </div>
        </div>
    )
} 

export default Card;