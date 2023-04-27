import React, { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function index() {
    const router = useRouter()

    useEffect(() => {
        router.push('/admin/manage-users')
    }, [])
    return (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>Redirecting...</div>
    )
}
