import React from "react";
import styled from "styled-components";
import Box3D from "./3DBox";


const Ul=styled.div`
  display: flex;
  list-style: none;
  gap: 1rem;
`

export default function NavBar(){
    return(
        <header className="p-2">
            <nav className="flex w-full text-white h-20 m-auto justify-between items-center ">
<h1 className="text-shadow-pop-tl">{'<> My Portfolio'}</h1>
            <Box3D/>
            </nav>
        </header>
    )
}