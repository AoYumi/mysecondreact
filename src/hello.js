
import {useState, useEffect } from "react"
import helloService from "./services/helloService"


const Hello = () =>{
    const[hello, setHello] = useState("")

    useEffect( () => {
        helloService.getHello().then(response => {
            setHello(response.data)
        }
        )
        .catch(err =>{
            console.log("ay nako na bobo na")
        }
        )
    }
    )

    return hello
}

export default Hello