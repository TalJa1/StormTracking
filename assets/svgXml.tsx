/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
import React from 'react';
import {SvgXml} from 'react-native-svg';

export const test = (w?: any, h?: any, color?: any) => {
  const xml = ``;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const homeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18V15" stroke=${
    color ?? '#717BBC'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.07 2.82009L3.14 8.37009C2.36 8.99009 1.86 10.3001 2.03 11.2801L3.36 19.2401C3.6 20.6601 4.96 21.8101 6.4 21.8101H17.6C19.03 21.8101 20.4 20.6501 20.64 19.2401L21.97 11.2801C22.13 10.3001 21.63 8.99009 20.86 8.37009L13.93 2.83009C12.86 1.97009 11.13 1.97009 10.07 2.82009Z" stroke="#717BBC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const chartIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5 22.25H3.5C3.36614 22.25 3.25 22.1339 3.25 22C3.25 21.8661 3.36614 21.75 3.5 21.75H21.5C21.6339 21.75 21.75 21.8661 21.75 22C21.75 22.1339 21.6339 22.25 21.5 22.25Z" fill=${color} stroke="#293056"/>
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
