import React from 'react'
import { useState,useEffect } from 'react'

function Github()
{
    const [data,setData] = useState(0)
    useEffect(()=>{
        fetch('https://api.github.com/users/Shivanshu351').then(
            res=>res.json()
        ).then(
            data=>(setData(data))
        )
    },[])
    return(
        <>
            <h1> Github followers: {data.followers}</h1>
        </>
    )
}

export default Github