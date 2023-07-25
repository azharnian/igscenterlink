import React, {useState, useEffect} from "react";


export default function App (){
    const [state, setState] = useState({
        item : "test"
    })

    useEffect(() => {
        fetch("/hello")
            .then(data => data.json())
            .then(data => {
                setState({
                    ...state,
                    item : data.data
                })
            })
            .catch(error => console.error(error))
    }, [])

    return(
        <>
            <h1>{ state.item }</h1>
        </>
    )
}