import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Logout({ where }) {
    const router = useRouter()
    const logout = () => {
        Cookies.remove("refreshtoken")
        Cookies.remove("accesstoken")
        Cookies.remove("xxxxx") //admin

        router.push("/")
    }

    return (
        <div style={{ display: "flex" }} onClick={logout}>
            {
                where === "expandedAside" ?
                    <>
                        <span style={{ marginRight: "10px" }} className="link-icon"><LogoutIcon /></span>
                        <span className="link-name">Logout</span>
                    </> :
                    <div style={{ marginRight: "10px" }} className="link-icon"><LogoutIcon /></div>
            }
        </div>
    )
}
