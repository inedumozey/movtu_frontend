import React, { useContext, useState } from 'react'
import { ContextData } from '../../contextApi/ContextApi'
import styled from 'styled-components'
import ShrinkedAsideLink from './ShrinkedAsideLink';
import Link from 'next/link'

export default function ShrinkedAside() {
    const state = useContext(ContextData);
    const { sideDrawal, avatar } = state;
    const { showsidedrawal, setShowsidedrawal } = sideDrawal;
    const [hideAmount, setHideAmount] = useState(true);

    return (
        <Wrapper>
            <div className="header">
                <Link onClick={() => setShowsidedrawal(false)} href="/dashboard/profile" className="img-wrapper">
                    <div className="img">
                        <img src={avatar} alt='profile' />
                    </div>
                    <div className="online"></div>
                </Link>
            </div>
            <ShrinkedAsideLink />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    transition: ${({ theme }) => theme.transition};
    
    .header {
        background: ${({ theme }) => theme.pri_color};
        width: 100%;
        position: relative;

        .img-wrapper {
            margin: auto;
            width: 100%;
            padding: 8px 0;
            display: block;
            position: relative;
            text-decoration: none;
            cursor: pointer;

            &:hover {
                opacity: ${({ theme }) => theme.opacity};
            }

            .online {
                position: absolute;
                right: 2px;
                bottom: 8px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #03ff03;
            }

            .img {
                margin: auto;
                border-radius: 50%;
                width: 35px;
                height: 37px;
    
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
        }        
    }
`