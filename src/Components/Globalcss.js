import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalcss = createGlobalStyle`
 ${reset};
 a {
    text-decoration: none;
    color: inherit;
    height: 50px;
    display: flex;    
 }
*{
    box-sizing: boder-box;
} 
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
}
`

export default globalcss;