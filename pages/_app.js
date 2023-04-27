import ScrollToTop from "react-scroll-to-top";
import NextProgress from 'nextjs-progressbar';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useToggle } from '@mozeyinedu/hooks-lab'
import { ContextApi } from "../contextApi/ContextApi";
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "../styles/globalStyles";
import Cookies from 'js-cookie';
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const { toggle, toggleState } = useToggle()
  const router = useRouter()
  const [loggedin, setLoggedin] = useState(false)

  useEffect(() => {
    Cookies.get('refreshtoken') ? setLoggedin(true) : setLoggedin(false)
  }, [])
  const theme = {
    usm_screen: '400px',
    sm_screen: '600px',
    md_screen: '900px',
    lg_screen: '1000px',
    xl_screen: '1500px',

    bg_image: toggleState ? 'url(/images/2b.png)' : 'url(/images/2a.png)',
    bg_image_aside: toggleState ? 'url(/images/4b.png)' : 'url(/images/4a.png)',
    bg_image_auth: toggleState ? 'url(/images/5a.png)' : 'url(/images/5b.png)',

    // pri: toggleState ? 'var(--pri-lighttheme);' : 'var(--pri-darktheme)',
    sec: toggleState ? 'var(--sec-lighttheme);' : 'var(--sec-darktheme)',
    title: toggleState ? 'var(--title-lighttheme)' : 'var(--title-darktheme)',
    title_faint: toggleState ? 'var(--title-lighttheme-faint)' : 'var(--title-darktheme-faint)',
    subtitle: toggleState ? 'var(--subtitle-lighttheme)' : 'var(--subtitle-darktheme)',
    bg: toggleState ? 'var(--bg-lighttheme)' : 'var(--bg-darktheme)',
    light_dark_btn_color: toggleState ? 'var(--theme-changer-btn-lighttheme)' : 'var(--theme-changer-btn-darktheme)',
    border: toggleState ? "var(--border-lighttheme)" : 'var(--border-darktheme)',
    card: toggleState ? "var(--card-lighttheme)" : 'var(--card-darktheme)',
    btn: toggleState ? "var(--btn-lighttheme)" : 'var(--btn-darktheme)',

    pri_color: 'var(--pri_color)',

    lg_padding: '40px',
    md_padding: '25px',
    sm_padding: '15px',
    usm_padding: '10px',

    transition: '.4s',
    opacity: '.8',

    text_gray: '#403e3f',
    gray0: '#f5f5f5',
    gray1: "#ebeef2",
    gray2: "#e5e9f2",
    gray3: "#dbdfea",
    gray4: "#b7c2d0",
    gray5: "#8091a7",

    card_effect: {
      shadow: '1px 1px 17px 1px rgb(0 0 0 / 10%), -1px -1px 17px 1px rgb(0 0 0 / 10%)',
      hover: {
        bg: '#f7f6f6',
        shadow: '3px 4px 3px 0px rgb(0 0 0 / 18%), -1px -1px 17px 1px rgb(0 0 0 / 10%)'
      }
    }
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <title>MOVTU</title>
      </Head>
      <GlobalStyle />
      <ScrollToTop smooth color="var(--major-color-purest)" style={{ background: 'rgba(0,0,0,.2)' }} />

      <NextProgress options={{ showSpinner: false }} />
      <ThemeProvider theme={theme}>

        <ContextApi>
          <Component {...pageProps} />
        </ContextApi>
      </ThemeProvider>

    </>
  )
}

export default MyApp
