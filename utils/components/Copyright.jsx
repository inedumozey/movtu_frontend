import React, { useContext } from 'react'
import styled from 'styled-components'
import { ContextData } from '../../contextApi/ContextApi'
let currentYear = (new Date()).getFullYear();
let startedYear = 2023

export default function Copyright() {
    const { contact } = useContext(ContextData)
    return (
        <div style={{ textAlign: 'center', fontSize: ".8rem" }}>
            &copy; {currentYear > startedYear ? currentYear : startedYear} {contact.name} All Right Reserved
        </div>
    )
}

const Wrapper = styled.div`

`