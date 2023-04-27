import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Link from 'next/link'

export default function Index({ children }) {
    const router = useRouter()

    useEffect(() => {
        if (Cookies.get("refreshtoken")) {
            router.push('/dashboard')
        }

    }, [])

    return (
        <div style={{ height: "70vh" }}>
            {children}

            <div style={{ margin: "20px", textAlign: 'center' }} >
                <Link href="/auth">Login/Signup</Link>
            </div>
        </div>
    )
}
