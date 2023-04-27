import React, { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Index() {
    const router = useRouter()

    useEffect(() => {
        router.push('/collections/data')
    }, [])
    return (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>Redirecting...</div>
    )
}
