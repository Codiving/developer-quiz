import { css } from "@emotion/react";

const resetCss = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* custom css */
  @font-face {
    font-family: "ONE-Mobile-POP";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Tium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/Tium.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    position: relative;
    min-height: 100vh;
  }

  body * {
    font-family: "ONE-Mobile-POP", "Tium";
  }

  a,
  a:visited,
  a:link,
  a:hover,
  a:focus {
    text-decoration: none;
    color: black;
  }

  #__next {
    position: relative;
    display: grid;
    grid-template-rows: 100px 1fr 30px;
    background-color: #efefef;
  }

  .fixed-height {
    height: 100vh !important;
  }
`;

export default resetCss;
