import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import styled from 'styled-components'
import Logo from '../../utils/components/Logo';
import Copyright from '../../utils/components/Copyright';

export default function Auth({ children }) {
    const router = useRouter()
    useEffect(() => {
        if (router.pathname === 'auth' || router.pathname === 'auth/signup' || router.pathname === 'auth/signin')
            if (Cookies.get('refreshtoken')) {
                router.push('/dashboard')
            }
    }, [])

    return (
        <>
            <Header>
                <div className="logo">
                    <Logo />
                </div>
            </Header>
            <Main>{children}</Main>
            <Footer><Copyright /></Footer>
        </>
    )
}


const Header = styled.div`
    width: 100%;
    height: 50px;

    .logo {
        hight: 100%;
        padding: 10px ${({ theme }) => theme.usm_padding};
    }

    
`
const Main = styled.div`
    width: 100%;
    min-height: calc(100vh - 50px - 50px);
`
const Footer = styled.div`
    width: 100%;
    min-height: 50px;
`