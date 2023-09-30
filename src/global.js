import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--chrome-extension-body-medium: Inter;
--font-space-grotesk: 'Space Grotesk';
--btn-large-normal: Poppins;
--default-sub-heading-regular-sub-heading-s: 'Readex Pro';
--font-sf-pro-display: 'SF Pro Display';
--font-sf-pro-text: 'SF Pro Text';
--font-dm-sans: 'DM Sans';
--font-paytone-one: 'Paytone One';
--font-bungee-shade: 'Bungee Shade';
--font-inherit: inherit;
--chrome-extension-header-bar-text: 'SF Pro';
--font-agency-fb: 'Agency FB';
--h51218: 'PingFang SC';

/* font sizes */
--font-size-17xl: 36px;
--font-size-mini: 15px;
--btn-large-normal-size: 16px;
--paragraph-regular-size: 14px;
--title-1-size: 18px;
--font-size-3xs: 10px;
--default-sub-heading-medium-sub-heading-l-size: 24px;
--btn-small-normal-size: 12px;
--font-size-mid: 17px;
--font-size-2xs: 11px;
--font-size-xl: 20px;
--font-size-33xl: 52px;
--chrome-extension-h2-size: 28px;
--font-size-8xs: 5px;
--font-size-5xs-8: 7.8px;
--font-size-21xl: 40px;
--font-size-7xl: 26px;
--font-size-lg-2: 18.2px;
--font-size-2xs-1: 10.1px;
--font-size-4xl-5: 23.5px;
--font-size-3xl-5: 22.5px;

/* Colors */
--color-darkslategray-100: #4b4b4b;
--neutral-90: #424242;
--gray-18: #413b54;
--color-darkslategray-200: #343434;
--boarder: #2d3530;
--color-darkslategray-300: #303030;
--color-darkslategray-400: #2c2d31;
--color-darkslategray-500: #2d2d2d;
--white: #fff;
--neutral-70: #757575;
--gray-20: #2f2a3c;
--color-gray-100: #2c2c2c;
--color-gray-200: #292929;
--color-gray-300: #262626;
--color-gray-400: #252525;
--color-gray-500: #222;
--color-gray-600: #1f1f1f;
--color-gray-700: #1e1e1e;
--gray-22: #1c1924;
--color-gray-800: #171717;
--gray-23: #131118;
--neutral-100: #0a0a0a;
--gray-24: #09080c;
--background: #050505;
--mask: rgba(32, 29, 41, 0.72);
--color-gray-900: rgba(255, 255, 255, 0.75);
--color-gray-1000: rgba(0, 0, 0, 0.76);
--color-gray-1100: rgba(31, 35, 15, 0.7);
--color-gray-1200: rgba(255, 255, 255, 0.5);
--color-gray-1300: rgba(255, 255, 255, 0.3);
--color-gray-1400: rgba(255, 255, 255, 0.9);
--color-gray-1500: rgba(255, 255, 255, 0.1);
--color-gray-1800: rgba(30, 30, 30, 0.85);
--color-gray-1600: rgba(28, 28, 28, 0.6);
--color-gray-1700: rgba(255, 255, 255, 0.7);
--transparent: rgba(0, 0, 0, 0);
--gray-gray-400: #a0aec0;
--gray-8: #a6a0bb;
--color-darkgray-100: #a9a9a9;
--color-darkgray-200: #999;
--color-darkgray-300: #9c9596;
--color-black: #000;
--neutral-20: #f5f5f5;
--grey-06: #f2f4f6;
--color-whitesmoke-100: #f2f2f2;
--color-whitesmoke-200: rgba(237, 237, 237, 0.3);
--color-mediumspringgreen: #14f195;
--primary-5: #a869ed;
--purple: #7e76f7;
--ios-purple: #4e44cd;
--blue: #443cc7;
--ios-red-text: #eb4a53;
--red: #e8303a;
--green: #22e164;
--color-springgreen-100: rgba(34, 225, 100, 0.1);
--color-lightslategray: #768396;
--color-mediumseagreen-100: #6cda9c;
--primary-green-500-success-color: #01b574;
--color-mediumseagreen-200: rgba(108, 218, 156, 0.8);
--secondary-red: #ff6252;
--main-color: #163bf3;
--primary-main: #0024d4;
--color-dimgray-100: #6c6c6c;
--color-dimgray-200: #64725d;
--color-dimgray-300: #5b5b5b;
--color-aquamarine: #85ffc4;
--color-slategray: #576f79;
--color-blueviolet: #9945ff;
--blue-5: #0b6ffb;
--neutral-50: #c2c2c2;
--grey-04: #b5bdc9;

/* Gaps */
--gap-8xs: 5px;
--gap-3xs: 10px;
--gap-9xs: 4px;
--gap-xs: 12px;
--gap-smi: 13px;
--gap-5xs: 8px;
--gap-base: 16px;
--gap-mid: 17px;
--gap-77xl: 96px;
--gap-10xs: 3px;
--gap-7xs: 6px;
--gap-mini: 15px;
--gap-2xs: 11px;
--gap-8xl: 27px;
--gap-lgi: 19px;
--gap-xl: 20px;
--gap-12xs: 1px;
--gap-120xl: 139px;
--gap-5xl: 24px;
--gap-104xl: 123px;

/* Paddings */
--padding-9xs: 4px;
--padding-xl: 20px;
--padding-base: 16px;
--padding-xs: 12px;
--padding-5xs: 8px;
--padding-7xs: 6px;
--padding-5xl: 24px;
--padding-mini: 15px;
--padding-smi: 13px;
--padding-3xs: 10px;
--padding-8xs: 5px;
--padding-12xs: 1px;
--padding-6xs-5: 6.5px;
--padding-3xs-8: 9.8px;
--padding-lgi: 19px;
--padding-sm: 14px;
--padding-lg: 18px;
--padding-mid: 17px;
--padding-16xl: 35px;
--padding-19xl: 38px;
--padding-22xl: 41px;
--padding-lgi-5: 19.5px;
--padding-6xl: 25px;
--padding-21xl: 40px;
--padding-23xl: 42px;

/* Border radiuses */
--br-71xl: 90px;
--br-160xl-2: 179.2px;
--br-81xl: 100px;
--br-base: 16px;
--br-lg: 18px;
--br-sm: 14px;
--br-9xs: 4px;
--br-11xs-3: 1.3px;
--br-10xs-7: 2.7px;
--br-5xl: 24px;
--br-5xs: 8px;
--br-43xl: 62px;
--br-7xs: 6px;
--br-3xs: 10px;
--br-xl: 20px;
--br-xs: 12px;
--br-39xl-5: 58.5px;
--br-181xl: 200px;
--br-90xl-4: 109.4px;
--br-198xl-8: 217.8px;
--br-183xl-5: 202.5px;
--br-981xl: 1000px;
--br-8xs-6: 4.6px;

/* Effects */
--glow: 0px 0px 8px #ff5386, 0px 0px 4px #ff5386;
--shadow-1: 0px 4px 12px rgba(0, 0, 0, 0.12);
--shadow-blur-background: blur(8px);
}
`;
}
