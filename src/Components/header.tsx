import React from "react";
import styled from "styled-components";


const Ul=styled.div`
  display: flex;
  list-style: none;
  gap: 1rem;
`

export default function NavBar(){
    return(
        <header className="">
            <nav className="flex w-5/6 text-white h-10 m-auto justify-between items-center ">
<h1 className="text-shadow-pop-tl">{'<> My Portfolio'}</h1>
            {/* <Ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Connect with me</li>
            </Ul> */}
            </nav>
        </header>
    )
}