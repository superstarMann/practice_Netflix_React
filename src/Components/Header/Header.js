import React from "react";
import "./Header.css"


export default () => (
    <header className = "nav">
      <ul>
       <li>
           <a href="/">Home</a>
        </li>
       <li>
           <a href="/tv">TV</a>
           </li>
       <li><a href="/tv/info">제작중입니다</a></li>
       <li><a href="/search">Search</a></li>
      </ul>
    </header>
)