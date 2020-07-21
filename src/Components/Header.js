import React from "react";
import styled from "styled-components"

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
`;

export default () => (
    <Sheader>
      <Sul>
       <Sli>
           <a href="/">Home</a>
        </Sli>
       <Sli>
           <a href="/tv">TV</a>
           </Sli>
       <Sli><a href="/search">Search</a></Sli>
       <Sli><a href="/tv/info">Comming Soon</a></Sli>
      </Sul>
    </Sheader>
)