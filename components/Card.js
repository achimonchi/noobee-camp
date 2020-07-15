import { useState, useEffect } from "react";
import Link from 'next/link';
import { convertCurrencies } from "./helper/string";

const Card = (props) => {
    const [title, setTitle] = useState("Title here");
    const [desc, setDesc] = useState("desc here");
    const [link, setLink] = useState("Title here");
    const [className, setClassName] = useState("className here");
    const [user, setUser] = useState("");
    const [img, setImg] = useState("placeholder.webp");
    const [footer, setFooter] = useState("");
    const [textButton, setTextButton] = useState("");
    const [subHeader, setSubHeader] = useState("");
    const [promo, setPromo] = useState("");

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

        if(props.footer !== ""){
            setFooter(props.footer);
        }

        if(props.textButton !== ""){
            setTextButton(props.textButton);
        }

        if(props.subHeader !== ""){
            setSubHeader(props.subHeader);
        }

        if(props.promo !== ""){
            setPromo(props.promo);
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
            <div className="img-card" style={{backgroundImage:`url(/images/kelas/${img})`}} >
                <div className="img-overlay"></div>
            </div>
            <div className="card-body">    
                <h4 className="text-card mt-2"><b>{title}</b></h4>
                {subHeader  ? <h6>{ promo 
                                ? <div> <span>{convertCurrencies(promo)}</span> {convertCurrencies(subHeader)}</div> 
                                : convertCurrencies(subHeader)}</h6> 
                            : ""}
                <p className="mt-3 mb-3">
                    {desc}
                </p>
                <Link href={link}>
                    <a className="btn btn-block btn-filled mt-3 mb-2">
                        {textButton}
                    </a>
                </Link>
            </div>
            {footer 
                ? <div className="card-footer" style={{opacity:"0.6"}}><i>{footer}</i></div>
                : <div></div>
            }
        </div>
    )
} 

export default Card;