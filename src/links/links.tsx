

export default function Links(){

    const links = [
        ["Google Form", "https://docs.google.com/forms/d/e/1FAIpQLScwZN-nTgEcleXP35zSYhs8hZRMPD5p5KcPp0gvyCmFewivuQ/viewform"],
        ["Instagram", "https://www.instagram.com/rhythmicreviewpodcast/"],
        ["Spotify", "https://open.spotify.com/show/1z01px54uePacXXEA7TbXY?si=6c8b938b0cf24da7&nd=1&dlsi=f6bb5d1f05364086"]
    ]

    

    return(
        <div className="col-md-2 d-flex flex-column align-items-center 
        justify-content-center text-center border border-success" style={{backgroundColor: "#fffffe"}}>
            <p className="fw-bold fs-2 m-1">Find us on: </p>
            {
                links.map((link, index) => 
                    <a href={link[1]} target="_blank" rel="noreferrer" key={index}>
                        <button className="btn btn-link rounded-3 fs-3 m-2"
                        style={{backgroundColor: "#fffffe"}}>
                            {link[0]}
                        </button>
                    </a>
                )
            }
        </div>
    )
}