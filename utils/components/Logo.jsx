import Link from "next/link"
import styled from "styled-components"

export default function Logo() {
    return (
        <Wrapper >
            <Link href="/">
                <svg viewBox="0 0 123.7 23.3" xmlns="http://www.w3.org/2000/svg" fill="#333" width="120">
                    <path d="M91.3 1.7V12c0 3.6 1.5 5 4.1 5s4.1-1.5 4.1-5V1.7h4.3v10.4c0 5.5-3.1 8.5-8.4 8.5-5.2 0-8.4-3-8.4-8.5V1.7zm-59.8 0l8.3 18.6h-4.5l-1.7-4H25l-1.7 4h-4.4l8.3-18.6zm49.7 0v3.5h-9.7v4.9H80v3.5h-8.5v6.8h-4.3V1.7zm32.8 0v15.1h9.7v3.5h-14V1.7zM8.1 1.7c4.9 0 8.1 2.5 8.1 6.8 0 4.1-3.1 6.7-8.1 6.7H4.3v5.2H0V1.7zm47 9.9l6.3 8.7h-4.1c-.6 0-1.2-.2-1.6-.7l-.1-.1-2.3-3.2c-.5-.8-.5-1.8 0-2.6l.1-.2zM29.3 6l-2.9 7.1h5.9zM7.9 5.2H4.3v6.5h3.5c2.7 0 4-1.2 4-3.2s-1.3-3.3-3.9-3.3zm39-3.5c.7 0 1.2.2 1.6.7l.1.1 1.2 1.7c.5.7.5 1.7.1 2.4l-.1.1-1.7 2.4-5.4-7.5z"></path>
                    <path d="M63.1 0L41.5 23.2c-.2.3-.7-.1-.4-.4L56.7.8c.4-.5 1-.8 1.7-.8z" fill="#00a5ef"></path>
                </svg>
            </Link>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    cursor: pointer;
    text-decoration: none;
    display: inline-block;

    &:hover {
        opacity: ${({ theme }) => theme.opacity}
    }
`