import React, { useContext, useState } from 'react'
import { ContextData } from '../../contextApi/ContextApi'
import styled from 'styled-components'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import ExpandedAsideLink from './ExpandedAsideLink'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Link from 'next/link';
import { ScrollBar } from '../../styles/globalStyles'
import Spinner from '../../utils/components/Spinner';

export default function ExpandedAside() {
    const state = useContext(ContextData);
    const { sideDrawal, avatar, user } = state;
    const { showsideDrawal, setShowsidedrawal } = sideDrawal;
    const { profile } = user
    const [hideAmount, setHideAmount] = useState(true);

    console.log(profile)

    return (

        <Wrapper>
            <div className="header">
                <Link onClick={() => setShowsidedrawal(false)} href="/dashboard/profile" className="img-wrapper">
                    <div className="img">
                        <img src={avatar} alt='profile' />
                    </div>
                    <div className="online"></div>
                </Link>

                <div className="amount">
                    {
                        !profile ? <Spinner color="#fff" /> :
                            <>
                                <span
                                    style={{ cursor: 'default' }}
                                    onClick={() => setHideAmount(!hideAmount)}
                                >

                                    {hideAmount ? "xxxx" :

                                        profile.balance?.toString().includes(".") ? "#" + profile.balance : "#" + profile.balance + ".00"
                                    } {" "}
                                </span>
                                <span
                                    style={{ display: 'flex', justifyContent: 'flex-end', width: '20px' }}
                                    onClick={() => setHideAmount(!hideAmount)}
                                >
                                    {
                                        hideAmount ?
                                            <VisibilityOffRoundedIcon
                                                style={{ paddingTop: '2px', fontSize: "1.3rem" }}
                                            /> :
                                            <RemoveRedEyeRoundedIcon
                                                style={{ paddingTop: '2px', fontSize: "1.3rem" }}
                                            />

                                    }
                                </span>
                            </>
                    }
                </div>

                <div className="name">
                    {
                        !profile ? <Spinner color="#fff" /> :
                            <Link style={{ textDecoration: 'none' }} onClick={() => setShowsidedrawal(false)} href="/dashboard/profile" >
                                <div className="ellipsis">{profile.username ? profile.username : profile.email}</div>
                                <div className="role">
                                    <span style={{ cursor: 'default' }}>{profile.role}</span>
                                    <span style={{ display: 'flex', justifyContent: 'flex-end', width: '20px' }}><AdminPanelSettingsIcon /> </span>

                                </div>
                            </Link>
                    }
                </div>

            </div>
            <ExpandedAsideLink />

        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
   
    
    .header {
        height: 160px;
        background: ${({ theme }) => theme.pri_color};
        width: 100%;
        padding: 10px;
        position: relative;

        .img-wrapper {
            margin: auto;
            width: 75px;
            height: 75px;
            display: block;
            text-decoration: none;
            padding: 3px;
            position: relative;
            cursor: pointer;

            &:hover {
                opacity: ${({ theme }) => theme.opacity};
            }

            .online {
                position: absolute;
                right: 0px;
                bottom: 10px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #03ff03;
            }

            .img {
                margin: auto;
                border-radius: 50%;
                width: 70px;
                height: 70px;
    
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
        }

        .amount {
            text-align: center;
            font-weight: bold;
            padding: 5px 0 10px 0;
            color: #fff;
            font-size: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 1.2;
            font-weight: bold;
            font-family: "DM Sans", sans-serif;
        }

        .name {
            position: absolute;
            bottom: 0;
            left: 0;
            text-decoration: none;
            text-align: center;
            cursor: pointer;
            display: flex;
            justify-content: center;

            &:hover {
                opacity: ${({ theme }) => theme.opacity};
            }
            width: 100%;
            color: ${({ theme }) => theme.text_gray};

            .role {
                color: #ffffff;
                font-size: .8rem;
                font-weight: bold;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }
        
    }
`