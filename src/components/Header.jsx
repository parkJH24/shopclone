/*
nextjs에서 styled component 사용
yarn add styled-components
yarn add babel-plugin-styled-components

*/
"use client"
import { googleLogin } from "@/api/api";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import LoginButton from "./LoginBtn";

export default function Header(){
    const [user, setUser] = useState();

    const login = () =>{
        googleLogin().then(setUser);
    };

    return(
        <HeaderContainer>
            <h1 className="logo">
                <Link href='/'>shop</Link>
            </h1>
            <div className='userWrap'>
                <LoginButton onClick = {login}>login</LoginButton>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    
`