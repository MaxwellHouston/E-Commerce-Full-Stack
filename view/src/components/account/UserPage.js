import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import apiAccount from "../../utilities/api/apiAccount"


export function UserPage({user}) {

    

    return(
        <div>
            <h1>{user.first_name + ' ' + user.last_name}</h1>
        </div>
    )
}