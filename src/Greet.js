const Greet =(props) =>{
    return(
        //name hardcoded
        <div>
        {props.children}
        <h1> Sup {props.name}</h1> 
        </div>
        //There is a limitation; must only return one web element
    )
}

export default Greet 