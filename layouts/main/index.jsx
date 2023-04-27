import React, { useContext, useEffect } from 'react';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { useSnap } from '@mozeyinedu/hooks-lab';
import { ContextData } from '../../contextApi/ContextApi';
import ExpandedAside from './ExpandedAside';
import ShrinkedAside from './ShrinkedAside';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Logo from '../../utils/components/Logo';
import Copyright from '../../utils/components/Copyright';




export default function Index({ children }) {
    const { snap } = useSnap(.5);
    const state = useContext(ContextData);
    const { sideDrawal, user } = state;
    const { showsidedrawal, setShowsidedrawal } = sideDrawal;
    const router = useRouter()

    // redirect to sigin page if Cookies not found
    useEffect(() => {
        if (!Cookies.get("refreshtoken")) {
            router.push("/auth/signin")
        }
    }, [])

    return (
        <>
            <Header>
                <MenuIcon onClick={() => setShowsidedrawal(!showsidedrawal)} {...snap()} className='menuIcon' />
                <div className="logo">
                    <Logo />
                </div>
            </Header>
            <Main showsidedrawal={showsidedrawal}>
                <div className="main">
                    <div className="content">{children}</div>
                </div>
            </Main>
            <Side showsidedrawal={showsidedrawal}>
                <MenuIcon onClick={() => setShowsidedrawal(!showsidedrawal)} className="menuIcon-side" />
                <div showsidedrawal={showsidedrawal} className="shrinkedAside"><ShrinkedAside /></div>
                <div showsidedrawal={showsidedrawal} className="expandedAside"><ExpandedAside /></div>
            </Side>
            <Overlay showsidedrawal={showsidedrawal} onClick={() => setShowsidedrawal(false)}></Overlay>
            <Footer showsidedrawal={showsidedrawal} onClick={() => setShowsidedrawal(false)}>
                <div className="main">
                    <div className="content"><Copyright /></div>
                </div>
            </Footer>
        </>
    )
}


const Header = styled.div`
    width: 100%;
    height: 55px;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    rigth: 0;
    border-bottom: 1px solid #e5e9f2;
    box-shadow: 0px 1px 3px 0px rgb(54 74 99 / 5%);
    z-index: 1002;

    transition: ${({ theme }) => theme.transition};
    padding: 0 ${({ theme }) => theme.sm_padding};

    .menuIcon {
        position: absolute;
        left: 15px;
        cursor: pointer;
        @media (min-width: ${({ theme }) => theme.md_screen}){
            margin-left:  ${({ showsidedrawal }) => showsidedrawal ? "0" : "40px"};
        }        
        &:hover {
            opacity: ${({ theme }) => theme.opacity};
        }
    }

    .logo {

    }
`
const Main = styled.div`
    width: 100%;
    min-height: calc(100vh - 55px);
    transition: ${({ theme }) => theme.transition};
    padding-top: 55px;

    @media (min-width: ${({ theme }) => theme.md_screen}){
        padding-left: ${({ showsidedrawal }) => showsidedrawal ? "60px" : "230px"};
        padding-right: ${({ showsidedrawal }) => showsidedrawal ? "15px" : "0"};
    }
    
    .main {
        padding: 23px ${({ theme }) => theme.sum_padding};
        .content {
            width: 100%;
            height: 100%;

        }

    }
`
const Footer = styled.div`
    width: 100%;
    min-height: 55px;
    background: #fff;
    transition: ${({ theme }) => theme.transition};
    @media (min-width: ${({ theme }) => theme.md_screen}){
        padding-left: ${({ showsidedrawal }) => showsidedrawal ? "60px" : "230px"};
        padding-right: ${({ showsidedrawal }) => showsidedrawal ? "15px" : "0"};
    }
    
    .main {
        padding: 0px ${({ theme }) => theme.usm_padding};
        .content {
            width: 100%;
            height: 100%;
            color: ${({ theme }) => theme.gray5};
            padding: 20px 0;
            text-align: center;
        }
    }
`

const Side = styled.div`
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    width: ${({ showsidedrawal }) => showsidedrawal ? "50px" : "230px"};
    background: #fff;
    transition: ${({ theme }) => theme.transition};
    box-shadow: 0px 5px 7px 0px #e1dbdb;
    border-right: 1px solid ${({ theme }) => theme.pri_color};
    z-index: 1010;

    .menuIcon-side {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 100;
        cursor: pointer;
        @media (min-width: ${({ theme }) => theme.md_screen}){
            display:  ${({ showsidedrawal }) => showsidedrawal ? "none" : "block"};
        }
        
        &:hover {
            opacity: ${({ theme }) => theme.opacity};
        }
    }

    @media (max-width: ${({ theme }) => theme.md_screen}){
        width: 230px;
        transform: ${({ showsidedrawal }) => showsidedrawal ? "translateX(0%);" : "translateX(-120%);"};
    }

    

    .shrinkedAside {
        display: ${({ showsidedrawal }) => showsidedrawal ? 'block' : 'none'}
    }
    .expandedAside {
        display: ${({ showsidedrawal }) => showsidedrawal ? 'none' : 'block'}
    }

    @media (max-width: ${({ theme }) => theme.md_screen}){
        .shrinkedAside {
            display: none;
        }
        .expandedAside {
            display: ${({ showsidedrawal }) => showsidedrawal ? 'block' : 'none'}
        }
    }

`

const Overlay = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: rgb(223 223 223 / 40%);
    z-index: 1000;
    display: none;
    transition: ${({ theme }) => theme.transition};

    @media (max-width: ${({ theme }) => theme.md_screen}){
        display: ${({ showsidedrawal }) => showsidedrawal ? "block" : "none"};
    }

    
`