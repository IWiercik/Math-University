import { createGlobalStyle } from 'styled-components';
export const globalStyle = createGlobalStyle`
//Reseting Styles
*,
*::before,
*::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}
#root{
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: grid;
    grid-template-rows: 130px auto ;  // Navigation + Elements
    background: #F5FAFE;
}
`;
