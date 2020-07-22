import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import {} from "react-native-linear-gradient";


const globalcss = createGlobalStyle`
 ${reset};
 a {
    text-decoration: none;
    color: inherit;
    height: 50px;
    display: flex;
    align-items : center;
    justify-content: center;
 }
*{
    box-sizing: boder-box;
} 
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    background-color: rgba(20,20,20,0.8);
    color: white;
    padding-top: 54px;
}
`

export default globalcss;