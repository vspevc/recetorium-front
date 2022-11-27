interface FourVariantColor {
  base: string;
  light: string;
  dark: string;
  darkest: string;
}

interface TwoVariantColor {
  base: string;
  light: string;
}

export interface DefaultThemeColor {
  primaryColor: FourVariantColor;
  secondaryColor: FourVariantColor;
  backgroundColor: FourVariantColor;
  successColor: TwoVariantColor;
  blueColor: TwoVariantColor;
  yellowColor: TwoVariantColor;
  inkColor: TwoVariantColor;
}

export interface DefaultThemeSizes {
  mobileHorizontalPadding: string;
  desktopHorizontalPadding: string;
  maxWidth: string;
  mainElementVerticalPadding: string;
  smallElementPadding: {
    horizontal: string;
    vertical: string;
  };
  gap: string;
}

export interface DefaultThemeFont {
  mainFontFamily: string;
  accentFontFamily: string;

  mainFontSize: string;
  mediumFontSize: string;
  largeFontSize: string;
  smallFontSize: string;

  mainFontWeight: string;
  mediumFontWeight: string;
  boldFontWeight: string;
  bolderFontWeight: string;
}

export interface DefaultThemeStyles {
  color: DefaultThemeColor;
  sizes: DefaultThemeSizes;
  font: DefaultThemeFont;
}
