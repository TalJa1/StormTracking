/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
import React from 'react';
import {SvgXml} from 'react-native-svg';

export const test = (w?: any, h?: any, color?: any) => {
  const xml = ``;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const locationIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8159 20.6077C16.8509 18.5502 20 15.1429 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.1429 7.14909 18.5502 11.1841 20.6077C11.6968 20.8691 12.3032 20.8691 12.8159 20.6077Z" stroke="#1D2939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#1D2939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const googleIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90912H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7637 23.04 12.2614Z" fill="#4285F4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 23.4998C15.1049 23.4998 17.7081 22.47 19.6108 20.7137L15.8942 17.8282C14.8645 18.5182 13.5472 18.9259 11.9999 18.9259C9.00469 18.9259 6.46946 16.903 5.56514 14.1848H1.7231V17.1644C3.61537 20.9228 7.50446 23.4998 11.9999 23.4998Z" fill="#34A853"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z" fill="#FBBC05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 5.07386C13.6883 5.07386 15.2042 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 11.9999 0.5C7.50446 0.5 3.61537 3.07705 1.7231 6.83545L5.56514 9.815C6.46946 7.09682 9.00469 5.07386 11.9999 5.07386Z" fill="#EA4335"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const appleIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="black"/>
<path d="M21.2806 18.424C20.9328 19.2275 20.5211 19.9672 20.0441 20.6472C19.3939 21.5743 18.8615 22.216 18.4512 22.5724C17.8151 23.1573 17.1337 23.4568 16.4039 23.4739C15.8801 23.4739 15.2483 23.3248 14.5129 23.0224C13.7751 22.7214 13.097 22.5724 12.477 22.5724C11.8268 22.5724 11.1294 22.7214 10.3835 23.0224C9.63647 23.3248 9.03466 23.4824 8.57453 23.498C7.87475 23.5278 7.17725 23.2197 6.48102 22.5724C6.03665 22.1848 5.48084 21.5204 4.81499 20.5791C4.1006 19.5739 3.51326 18.4084 3.05313 17.0795C2.56035 15.6442 2.31332 14.2543 2.31332 12.9087C2.31332 11.3673 2.64639 10.0379 3.31351 8.92385C3.83781 8.029 4.53531 7.32312 5.40829 6.80493C6.28127 6.28674 7.22453 6.02267 8.24033 6.00578C8.79614 6.00578 9.52502 6.1777 10.4308 6.51559C11.334 6.85462 11.914 7.02655 12.1682 7.02655C12.3583 7.02655 13.0026 6.82552 14.0948 6.42473C15.1276 6.05305 15.9993 5.89916 16.7134 5.95978C18.6485 6.11595 20.1023 6.87876 21.0691 8.25303C19.3385 9.30163 18.4824 10.7703 18.4994 12.6544C18.5151 14.122 19.0474 15.3432 20.0938 16.3129C20.568 16.7629 21.0975 17.1107 21.6867 17.3578C21.5589 17.7283 21.424 18.0832 21.2806 18.424ZM16.8426 0.960131C16.8426 2.11039 16.4224 3.18439 15.5848 4.17847C14.5739 5.36023 13.3513 6.04311 12.0254 5.93536C12.0085 5.79736 11.9987 5.65213 11.9987 5.49951C11.9987 4.39526 12.4794 3.21349 13.3331 2.24724C13.7593 1.75801 14.3014 1.35122 14.9587 1.02671C15.6146 0.707053 16.235 0.530273 16.8185 0.5C16.8355 0.653772 16.8426 0.807554 16.8426 0.960116V0.960131Z" fill="white"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const chartInforIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V13" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9945 16H12.0035" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const dangerIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="50" height="26" viewBox="0 0 50 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="48" height="24" rx="4" fill="url(#paint0_linear_20_90)" stroke="#FEE4E2" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_20_90" x1="26.554" y1="26.35" x2="26.554" y2="1" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEF3F2"/>
<stop offset="1" stop-color="#FEE4E2"/>
</linearGradient>
</defs>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const safeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="0.5" width="47" height="23" rx="3.5" fill="url(#paint0_linear_20_89)" stroke="#D1FADF"/>
<defs>
<linearGradient id="paint0_linear_20_89" x1="26.054" y1="25.35" x2="26.054" y2="3.14658e-07" gradientUnits="userSpaceOnUse">
<stop stop-color="#D1FADF"/>
<stop offset="1" stop-color="#ECFDF3"/>
</linearGradient>
</defs>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const inforIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.72 11.28 8.72 9.50998C8.72 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.39999 22.0001 7.03999 21.0101 5.25999 19.3801C5.35999 18.4401 5.95999 17.5201 7.02999 16.8001C9.76999 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const darkModeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.03 12.42C2.39 17.57 6.76 21.76 11.99 21.99C15.68 22.15 18.98 20.43 20.96 17.72C21.78 16.61 21.34 15.87 19.97 16.12C19.3 16.24 18.61 16.29 17.89 16.26C13 16.06 9 11.97 8.98 7.13996C8.97 5.83996 9.24 4.60996 9.73 3.48996C10.27 2.24996 9.62 1.65996 8.37 2.18996C4.41 3.85996 1.7 7.84996 2.03 12.42Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const notiIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.02 2.90991C8.71 2.90991 6.02 5.59991 6.02 8.90991V11.7999C6.02 12.4099 5.76 13.3399 5.45 13.8599L4.3 15.7699C3.59 16.9499 4.08 18.2599 5.38 18.6999C9.69 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.9 21.1801C9.36 20.6401 9.02 19.8801 9.02 19.0601" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const noiceIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C18 22 19 21 19 18V6C19 3 18 2 15 2H9C6 2 5 3 5 6V18C5 21 6 22 9 22Z" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const aboutUsIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V13" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9945 16H12.0035" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const FAQsIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 18.43H13L8.54999 21.39C7.88999 21.83 7 21.36 7 20.56V18.43C4 18.43 2 16.43 2 13.43V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.43C22 16.43 20 18.43 17 18.43Z" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11.3599V11.1499C12 10.4699 12.42 10.1099 12.84 9.81989C13.25 9.53989 13.66 9.1799 13.66 8.5199C13.66 7.5999 12.92 6.85986 12 6.85986C11.08 6.85986 10.34 7.5999 10.34 8.5199" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9955 13.75H12.0045" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const callIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const followIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const RateIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.14999 2V22" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.14999 4H16.35C19.05 4 19.65 5.5 17.75 7.4L16.55 8.6C15.75 9.4 15.75 10.7 16.55 11.4L17.75 12.6C19.65 14.5 18.95 16 16.35 16H5.14999" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const popUpCancelIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.17004 14.83L14.83 9.17001" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.83 14.83L9.17004 9.17001" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const searchingIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.58335 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58334C17.5 5.21108 13.9556 1.66667 9.58335 1.66667C5.2111 1.66667 1.66669 5.21108 1.66669 9.58334C1.66669 13.9556 5.2111 17.5 9.58335 17.5Z" fill="#98A2B3"/>
<path d="M17.75 18.3333C17.6 18.3333 17.45 18.275 17.3417 18.1667L15.7917 16.6167C15.5667 16.3917 15.5667 16.025 15.7917 15.7917C16.0167 15.5667 16.3833 15.5667 16.6167 15.7917L18.1667 17.3417C18.3917 17.5667 18.3917 17.9333 18.1667 18.1667C18.05 18.275 17.9 18.3333 17.75 18.3333Z" fill="#98A2B3"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const backIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19.92L8.48 13.4C7.71 12.63 7.71 11.37 8.48 10.6L15 4.08" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const nextIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const menuIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 12H21" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 17H21" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const bookIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.49001V20.49" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.75 8.49001H5.5" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 11.49H5.5" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const backArrowIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 12H3.66998" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const doubleSaveIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.89 5.88H5.10999C3.39999 5.88 2 7.27999 2 8.98999V20.35C2 21.8 3.04 22.42 4.31 21.71L8.23999 19.52C8.65999 19.29 9.34 19.29 9.75 19.52L13.68 21.71C14.95 22.42 15.99 21.8 15.99 20.35V8.98999C16 7.27999 14.6 5.88 12.89 5.88Z" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 8.98999V20.35C16 21.8 14.96 22.41 13.69 21.71L9.76001 19.52C9.34001 19.29 8.65999 19.29 8.23999 19.52L4.31 21.71C3.04 22.41 2 21.8 2 20.35V8.98999C2 7.27999 3.39999 5.88 5.10999 5.88H12.89C14.6 5.88 16 7.27999 16 8.98999Z" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const homeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18V15" stroke=${
    color ?? '#717BBC'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.07 2.82009L3.14 8.37009C2.36 8.99009 1.86 10.3001 2.03 11.2801L3.36 19.2401C3.6 20.6601 4.96 21.8101 6.4 21.8101H17.6C19.03 21.8101 20.4 20.6501 20.64 19.2401L21.97 11.2801C22.13 10.3001 21.63 8.99009 20.86 8.37009L13.93 2.83009C12.86 1.97009 11.13 1.97009 10.07 2.82009Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const chartIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5 22.25H3.5C3.36614 22.25 3.25 22.1339 3.25 22C3.25 21.8661 3.36614 21.75 3.5 21.75H21.5C21.6339 21.75 21.75 21.8661 21.75 22C21.75 22.1339 21.6339 22.25 21.5 22.25Z" fill=${color} stroke=${color}/>
<path d="M6.1 8.37988H4.5C3.95 8.37988 3.5 8.82988 3.5 9.37988V17.9999C3.5 18.5499 3.95 18.9999 4.5 18.9999H6.1C6.65 18.9999 7.1 18.5499 7.1 17.9999V9.37988C7.1 8.81988 6.65 8.37988 6.1 8.37988Z" fill=${color}/>
<path d="M13.3 5.18994H11.7C11.15 5.18994 10.7 5.63994 10.7 6.18994V17.9999C10.7 18.5499 11.15 18.9999 11.7 18.9999H13.3C13.85 18.9999 14.3 18.5499 14.3 17.9999V6.18994C14.3 5.63994 13.85 5.18994 13.3 5.18994Z" fill=${color}/>
<path d="M20.5 2H18.9C18.35 2 17.9 2.45 17.9 3V18C17.9 18.55 18.35 19 18.9 19H20.5C21.05 19 21.5 18.55 21.5 18V3C21.5 2.45 21.05 2 20.5 2Z" fill=${color}/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const settingIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9.11011V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011Z" stroke=${
    color ?? '#717BBC'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke=${
    color ?? '#717BBC'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};
