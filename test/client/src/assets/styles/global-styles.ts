// src/assets/styles/global-styles.ts
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  
element.style {
}
.css-cuz34r {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 24px;
}
h1, h2, h3, h4, h5, h6, span, p, div {
    word-break: keep-all;
    white-space: pre-wrap;
}
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, 
blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, 
img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, 
center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, 
tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, 
figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, 
mark, audio, video  
{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;