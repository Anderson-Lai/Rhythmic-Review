

export default function Description(){

    const description = "Lorem ipsum dolor sit amet, consectetur \
    adipisicing elit. Veniam illo reiciendis iusto \
    cumque perferendis tenetur architecto, maxime atque molestias porro maiores? \
    Suscipit earum blanditiis rerum voluptatibus consequatur deleniti ratione dolores."
    
    return(
        <div className="col-md-5 d-flex flex-column justify-content-center 
        align-items-center text-center border border-danger" style={{backgroundColor: "#fffffe"}}>
            <img src={require('./logo.png')} alt="logo" style={{width: "75%"}}></img>
            <p className="fs-4 m-4">{description}</p>
        </div>
    )
}