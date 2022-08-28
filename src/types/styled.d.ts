import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string,
    text: string,
    bodyRgba: string,
    gray: string,
    textRgba: string,
    fontxs: string,
    fontsm: string,
    fontmd: string,
    fontlg: string,
    fontxl: string,
    fontxxl: string,
    fontxxxl: string,
    fontBlg: string,
    navHeight: string
  }
}