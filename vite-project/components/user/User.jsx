import React from "react";
import { useParams } from "react-router";

function User ()
{
    const {userid }= useParams()
    return(
        <>
            User page : {userid}
        </>
    )
}

export default User