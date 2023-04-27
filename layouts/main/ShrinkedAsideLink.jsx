import React, { useContext, useState } from 'react'
import { ContextData } from '../../contextApi/ContextApi'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { ScrollBar } from '../../styles/globalStyles'
import Logout from '../../utils/components/Logout'


export default function ShrinkedAsideLink() {
    const state = useContext(ContextData);
    const { sideDrawal, links, isAdmin } = state;
    const { showsidedrawal, setShowsidedrawal } = sideDrawal;
    const router = useRouter()

    return (
        <Wrapper>
            <div className="account">
                <div className="link-wrapper">
                    {
                        links.account.link?.map((link, i) => {
                            return (
                                <Link
                                    href={link.url}
                                    key={i}
                                    onClick={() => setShowsidedrawal(false)}
                                    title={link.name}
                                    className={router.pathname === link.url ? "link active-link" : 'link'}>
                                    <div className="link-icon"><link.icon /></div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="collections">
                <div className="link-wrapper">
                    {
                        links.collections.link?.map((link, i) => {
                            return (
                                <Link
                                    href={link.url}
                                    key={i}
                                    onClick={() => setShowsidedrawal(false)}
                                    title={link.name}
                                    className={router.pathname === link.url ? "link active-link" : 'link'}

                                >
                                    <div className="link-icon"><link.icon /></div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            {
                isAdmin ?
                    <div className="admin">
                        <div className="link-wrapper">
                            {
                                links.admin.link?.map((link, i) => {
                                    return (
                                        <Link
                                            href={link.url}
                                            key={i}
                                            onClick={() => setShowsidedrawal(false)}
                                            title={link.name}
                                            className={router.pathname === link.url ? "link active-link" : 'link'}

                                        >
                                            <div className="link-icon"><link.icon /></div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div> : ''
            }

            <div className="bottom-pannel">
                <Link onClick={() => setShowsidedrawal(false)} title="Contct Us" href={"/contct-us"} className="pannel contact-us">
                    <div className="link-icon"><ContactPhoneIcon /></div>
                </Link>

                <div title="Logout" style={{ color: 'red' }} className="pannel">
                    <Logout where="" />
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    padding: 5px;

    // padding: 10px 15px 40px 15px;
    // overflow-y: scroll;
    // height: calc(100% - 160px);
    // ${ScrollBar()};

    .link-wrapper {
        border-bottom: 3px solid ${({ theme }) => theme.gray1};
        margin: 10px 0;
    }

    .link {
        padding: 0.625rem 1.3333333333px 0.625rem 12px;
        color: #6e82a5;
        font-family: "DM Sans", sans-serif;
        font-weight: 700;
        letter-spacing: 0.01em;
        text-transform: none;
        line-height: 1.25rem;
        border-radius: 6px;
        text-decoration: none;
        margin-bottom: 5px;
        align-items: center;
        justify-content: center;
        display: flex;
        transition: ${({ theme }) => theme.transition};

        &:hover {
            background: ${({ theme }) => theme.gray1};
            color: ${({ theme }) => theme.pri_color};
        }

        .link-icon {
            margin-right: 10px;
        }
    }

    .active-link {
        background: ${({ theme }) => theme.gray1};
        color: ${({ theme }) => theme.pri_color};
    }

    .bottom-pannel {
        background: ${({ theme }) => theme.gray0};;
        margin-top: 20px;

        .pannel {
            padding: 0.625rem 1.3333333333px 0.625rem 12px;
            color: #6e82a5;
            font-family: "DM Sans", sans-serif;
            font-weight: 700;
            letter-spacing: 0.01em;
            text-transform: none;
            line-height: 1.25rem;
            border-radius: 6px;
            text-decoration: none;
            margin-bottom: 5px;
            align-items: center;
            justify-content: center;
            display: flex;

            &:hover {
                color: ${({ theme }) => theme.pri_color};
            }

            .link-icon {
                margin-right: 10px;
            }
        }
    }
`