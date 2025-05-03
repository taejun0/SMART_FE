const fontGenerator = (
  fontFamily,
  fontSize = '1rem',
  fontWeight = '400',
  lineHeight = '1.5',
  letterSpacing = 'normal'
) => ({
  'font-family': fontFamily,
  'font-size': fontSize,
  'font-weight': fontWeight,
  'line-height': lineHeight,
  'letter-spacing': letterSpacing,
});
export const theme = {
  colors: {
    // Bg
    beige01: '#F8F6EF',

    // Main/Green
    green01: '#536349',
    green02: '#6C733F',
    green03: '#949A6E',
    green04: '#BBBF9A',

    // Main/brown
    brown01: '#565447',
    brown02: '#736C5A',
    brown03: '#A39976',
    brown04: '#DAD3C0',
    brown05: '#F0ECDE',

    // Font
    black: '#121212',
    white: '#FAFAFA',

    // Ecxeption Case
    gray01: '#8E8E93',
    gray02: '#DCDCDC',
  },

  fonts: {
    // === Title ===
    Title_ExtraBold_22: fontGenerator('SUIT', '22px', '800'),
    Title_Bold_22: fontGenerator('SUIT', '22px', '700'),
    Title_ExtraBold_20: fontGenerator('SUIT', '20px', '800'),
    Title_Bold_20: fontGenerator('SUIT', '20px', '700'),
    Title_SemiBold_20: fontGenerator('SUIT', '20px', '600'),
    Title_ROKAF_24: fontGenerator('ROKAF Sans', '24px', '700'),

    // === Subtitle ===
    Subtitle_ExtraBold_16: fontGenerator('SUIT', '16px', '800'),
    Subtitle_Bold_16: fontGenerator('SUIT', '16px', '700'),
    Subtitle_SemiBold_16: fontGenerator('SUIT', '16px', '600'),
    Subtitle_Medium_16: fontGenerator('SUIT', '16px', '500'),
    Subtitle_ROKAF_Medium_16: fontGenerator('ROKAF Sans', '16px', '500'),

    // === Body ===
    Body_ExtraBold_14: fontGenerator('SUIT', '14px', '800'),
    Body_Bold_14: fontGenerator('SUIT', '14px', '700'),
    Body_SemiBold_14: fontGenerator('SUIT', '14px', '600'),
    Body_Medium_14: fontGenerator('SUIT', '14px', '500'),

    // === Caption ===
    Caption_ExtraBold_12: fontGenerator('SUIT', '12px', '800'),
    Caption_Bold_12: fontGenerator('SUIT', '12px', '700'),
    Caption_SemiBold_12: fontGenerator('SUIT', '12px', '600'),
    Caption_Medium_12: fontGenerator('SUIT', '12px', '500'),

    Caption_ExtraBold_10: fontGenerator('SUIT', '10px', '800'),
    Caption_Bold_10: fontGenerator('SUIT', '10px', '700'),
    Caption_SemiBold_10: fontGenerator('SUIT', '10px', '600'),
    Caption_Medium_10: fontGenerator('SUIT', '10px', '500'),
    Caption_Light_10: fontGenerator('SUIT', '10px', '400'),
  },
};
