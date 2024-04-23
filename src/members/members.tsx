

export default function Members(){

    const descriptions = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis minus maxime \
        rerum ducimus accusantium dicta dolor sapiente. Nemo eaque natus hic enim ipsum velit \
        necessitatibus at, laudantium, modi expedita magnam.",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis minus maxime \
        rerum ducimus accusantium dicta dolor sapiente. Nemo eaque natus hic enim ipsum velit \
        necessitatibus at, laudantium, modi expedita magnam.",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis minus maxime \
        rerum ducimus accusantium dicta dolor sapiente. Nemo eaque natus hic enim ipsum velit \
        necessitatibus at, laudantium, modi expedita magnam.",
    ]

    return(
        // keep border as last utility class for easy deletion before production
        <div className="col-md-5 p-4 border border-primary" style={{backgroundColor: "#fffffe"}}>
            {
                descriptions.map((desc, index) => 
                    <div className="border p-3 m-2 d-flex border-warning" key={index}>
                        <img src="" className="border border-success" alt="photocard" style={{width: "75%"}}></img>
                        <p className="p-2 fs-5">{desc}</p>
                    </div>
                )
            }
        </div>
    )
}