import React, { useContext, useState } from 'react'
import { ContextData } from '../../contextApi/ContextApi'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { ScrollBar } from '../../styles/globalStyles'
import Logout from '../../utils/components/Logout'


export default function ExpandedAsideLink() {
    const state = useContext(ContextData);
    const { sideDrawal, avatar, links, isAdmin } = state;
    const { showsidedrawal, setShowsidedrawal } = sideDrawal;
    const router = useRouter()


    return (
        <Wrapper>
            <div className="account">
                <div className="title">{links.account.title}</div>
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
                                    <div className="link-name">{link.name}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="collections">
                <div className="title">{links.collections.title}</div>
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
                                    <div className="link-name">{link.name}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            {
                isAdmin ?
                    <div className="admin">
                        <div className="title">{links.admin.title}</div>
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
                                            <div className="link-name">{link.name}</div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div> : ""
            }

            <div className="bottom-pannel">
                <Link
                    href={"/contct-us"}
                    className="pannel contact-us"
                    onClick={() => setShowsidedrawal(false)}
                >
                    <div className="link-icon"><ContactPhoneIcon /></div>
                    <div className="link-name">Contact Us</div>
                </Link>

                <div
                    style={{ color: 'red' }}
                    className="pannel"
                >

                    <Logout where="expandedAside" />
                </div>
            </div>

        </Wrapper>
    )
}


const Wrapper = styled.div`
    padding: 10px 15px 40px 15px;
    overflow-y: auto;
    height: calc(100% - 160px);
    ${ScrollBar()};

    .title {
        font-size: 11px;
        line-height: 1.2;
        letter-spacing: 0.2em;
        color: #8094ae;
        text-transform: uppercase;
        font-weight: 700;
        font-family: "DM Sans", sans-serif;
        padding: 10px 0;
        cursor: default;
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
        display: flex;

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
            display: flex;
            cursor: pointer;

            &:hover {
                color: ${({ theme }) => theme.pri_color};
            }

            .link-icon {
                margin-right: 10px;
            }
        }
    }
`