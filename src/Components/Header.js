import React from "react";
import styled from "styled-components"





const Sul = styled.ul`
   display: flex;
   & hover {
       background-color: red;
   };
`
~
export default () => (
    <header>
      <Sul>
       <li>
           <a href="/">Home</a>
        </li>
       <li>
           <a href="/tv">TV</a>
           </li>
       <li><a href="/tv/info">제작중입니다</a></li>
       <li><a href="/search">Search</a></li>
      </Sul>
    </header>
)