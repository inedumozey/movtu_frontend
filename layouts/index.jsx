import React, { } from 'react'
import { useRouter } from 'next/router'
import Auth from './auth'
import Main from './main'
import Landing from './landing'



export default function Layout({ children }) {
    const router = useRouter()

    return (
        (function () {
            if (router.pathname.includes('/auth')) {
                return <Auth children={children} />
            }

            else if (router.pathname.includes('/dashboard') || router.pathname.includes('/admin') || router.pathname.includes('/collections')) {
                return <Main children={children} />
            }
            else {
                return <Landing children={children} />
            }
        }())
    )
}