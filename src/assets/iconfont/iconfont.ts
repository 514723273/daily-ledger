import { createGlobalStyle } from 'styled-components';

const IconfontGlobalStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1579587340192'); /* IE9 */
  src: url('./iconfont.eot?t=1579587340192#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKgAAsAAAAABngAAAJWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgpgbAE2AiQDDAsIAAQgBYRtBzYbsgUR1ZMBZF8l8Ca2rnKotrZXhH2gpRFV1xXYGemNt+9FiBUJxkQQrpGzSe4eGOV7QFtFoMqKhULVKlcLJFSFQQkkq29hbheDSigL6RYx7dov28X3YY0GkGFNFwCLp6keLWJL783e4RFvSitgYAMOGEsoGXkDjpkugQaSZ7O5ZZRGAk5woFFBI9tEHsR/0F3EiMSvThNoN21THCidwVGASYG4dZ8zOJZfUbJUq1CPrCziuUprepp+eMZ/H38YrSRVBmaeuCI32H5330v+N56nBAFCuL5CxiYKcXE0fpouMlrWLjfmc2tFSGeFmobzW2X90n+8RNRAcSdYDROJ7w5zCL6XNRLIoJbJXkxE1MFbkyil9Wra/RHP8FDy+xZOwb/w1Gmk1V3vyDD0AWzFN7hMQbP2J4/wvwgEDxb2duxZ/m9lBXzSL3ngazasN2p9mSP4OYKVHaUVAUMuNR/ze3XeaU2EJe1oAO5+3/Yrh1YXE1oNaSQtppC1WiQW6iYqHbZQa7WNdhuO13cYcJsuShvWPQwQer1A0u0Dsl4fiYX6FZVh/1DrjYx2J2O2Y4flEIvpgTESTCH+QZF0LSGTTEXpFbNXHbEp4vQn8liEIHB9N3XBFvmMOeM7C0UIiLsGzsF5WNcd9NyVmIibi/Rzz6OxD7lJ1yhTB8ZIMIX4B0XStUT7y9T7/hWzVx3xTM2G+4k8FoND4PoriBd5u6rmW94Z31koQkDcNXAOhmFdd9CPDysxETffEe3nHuxFa+Xu/crmA/KyBsBhOTRVVw3FuIUkJhdZLooC') format('woff2'),
  url('./iconfont.woff?t=1579587340192') format('woff'),
  url('./iconfont.ttf?t=1579587340192') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1579587340192#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-left:before {
  content: "\e64f";
}

.icon-right:before {
  content: "\e655";
}
`;

export default IconfontGlobalStyle;
