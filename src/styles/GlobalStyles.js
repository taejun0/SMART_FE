import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{box-sizing:border-box}
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul {margin:0;padding:0}
body, button, input, select, table, textarea {font-size:12px;line-height:16px;color:#202020;font-family: sans-serif}
h1, h2, h3, h4, h5, h6 {font-size:inherit;line-height:inherit}
textarea {-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;border:0;word-break:keep-all;word-wrap:break-word}
button, input {-webkit-border-radius:0;border-radius:0;border:0}
button {background-color:transparent}
fieldset, img {border:0}
img {vertical-align:top}
ol, ul {list-style:none}
address, em {font-style:normal}
a {display:flex;text-decoration:none;}
iframe {overflow:hidden;margin:0;border:0;padding:0;vertical-align:top}
mark {background-color:transparent}
i {font-style:normal}

#root {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
}

// 폰트 설정
@font-face {
  font-family: 'SUIT';
  src: url('/fonts/SUIT-Regular.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family: 'SUIT';
  src: url('/fonts/SUIT-Bold.ttf') format('truetype');
  font-weight: 700;
}
@font-face {
  font-family: 'SUIT';
  src: url('/fonts/SUIT-Light.ttf') format('truetype');
  font-weight: 300;
}
@font-face {
  font-family: 'SUIT';
  src: url('/fonts/SUIT-ExtraBold.ttf') format('truetype');
  font-weight: 800;
}
@font-face {
  font-family: 'SUIT';
  src: url('/fonts/SUIT-Thin.ttf') format('truetype');
  font-weight: 100;
}
@font-face {
  font-family: 'SUIT';
  src: url('/fonts/SUIT-SemiBold.ttf') format('truetype');
  font-weight: 600;
}
@font-face {
  font-family: 'SUIT';
  src: url('/fonts/SUIT-Medium.ttf') format('truetype');
  font-weight: 500;
}
@font-face {
  font-family: 'SUIT';
  src: url('/fonts/SUIT-Heavy.ttf') format('truetype');
  font-weight: 900;
}
@font-face {
  font-family: 'SUIT';
  src: url('/fonts/SUIT-ExtraLight.ttf') format('truetype');
  font-weight: 200;
}
@font-face {
  font-family: 'ROKAF Sans';
  src: url('/fonts/ROKAF Sans Bold.otf') format('opentype');
  font-weight: 700;
}
@font-face {
  font-family: 'ROKAF Sans';
  src: url('/fonts/ROKAF Sans Medium.otf') format('opentype');
  font-weight: 500;
}


// 초기 html 설정
html {
	background-color: ${({ theme }) => theme.colors.beige01};	
	display: flex;
	justify-content: center;
	align-items: center;

	-webkit-touch-callout: none;
  -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
  scroll-behavior: smooth; 

  @media (max-width: 540px) {
		font-size:14px;
	}

	@media (max-width: 460px) {
		font-size:12px;
	}

	@media (max-width: 360px) {
		font-size:10px;
	}
}

body {
	width: 100%;
	max-width: 540px;
	overflow-x: hidden;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.black};
	font-family: 'SUIT', sans-serif;
}

`;

export default GlobalStyle;
