const { default: Link } = require("next/link")

const Card = ({title, desc, link, img, className}) => {
 
    return(
        <div className={className}>
            <div className="img-card" style={{backgroundImage:`url(/images/kelas/${img})`}} ></div>
            <div className="card-body">
                
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