import React from "react";
import styled from "styled-components"
import {withRouter} from "react-router-dom";

const Sheader = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  align-items: center;
  padding: 0px, 15px;
  background-color: rgba(0,0,0,0.8);
  box-shadow: 0px 1px 5px 2px rgba(20, 20, 20,0.8); 
`;

const Sul = styled.ul`
   display: flex;
   & hover {
       background-color: red;
   };
`
const Sli = styled.li`
width: 80px;
:nth-child(4) {width: 100px; margin-left: 10px;};

border-bottom : 5px solid ${props => props.part ? "#40E0D0" : "transparent" };
`;

export default withRouter(({location: {pathname}}) => (
  <Sheader>
    <Sul>
     <Sli part = {pathname === "/" }>
         <a href="/">Home</a>
      </Sli>
     <Sli part = {pathname === "/tv"}>
         <a href="/tv">TV</a>
         </Sli>
     <Sli part = {pathname === "/search"}><a href="/search">Search</a></Sli>
     <Sli part = {pathname === "/tv/info"}><a href="/tv/info">Comming Soon</a></Sli>
    </Sul>
  </Sheader>
));