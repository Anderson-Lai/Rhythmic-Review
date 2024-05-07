
type Props = {
    name: string,
    description: string,
    photo: string,
}

export default function Members({name, description, photo}: Props){

    return(
        <div className="border p-3 m-2 d-flex border-warning">
            {/* change this to src={require(photo)} later */}
            <img src={photo} className="border border-success" alt="photocard" style={{width: "75%"}}></img>
            <div className="d-flex flex-column">
                <p className="p-2 fs-5 m-0 py-0">{name}</p>
                <p className="p-2 fs-5 m-0 py-0">{description}</p>
            </div>
        </div>
    )
}