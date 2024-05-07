
type Props = {
    photo: string,
    description: string,
}

export default function Description({photo, description}: Props){
    
    return(
        <div className="col-md-5 d-flex flex-column justify-content-center 
        align-items-center text-center border border-danger" style={{backgroundColor: "#fffffe"}}>
            <img src={photo} alt="logo" style={{width: "85%"}}></img>
            <p className="fs-4 m-4">{description}</p>
        </div>
    )
}