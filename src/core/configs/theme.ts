export const designToken = (mode: 'dark' | 'light', direction: 'rtl' | 'ltr') => ({
    mode,
    direction,

    fontFamily: 'Yekan Bakh',
    fontSizeBase: '16px',
    fontWeightBase: '500',

    fontSizeH1: '36px',
    fontSizeH2: '30px',
    fontSizeH3: '24px',
    fontSizeH4: '16px',
    fontSizeH5: '14px',
    fontSizeH6: '12px',
    fontSizSmall: '14px',

    borderRadiusNone: '0px',
    borderRadiusSmall: '6px',
    borderRadiusMedium: '8px',
    borderRadiusLarge: '12px',
    borderRadiusRound: '500px',

    borderColorNormal: '#909090',
    borderColorInActive: 'rgba(0, 0, 0, 0.38)',
    borderColorFocused: '#5B3DF9',
    borderColorHover: '#1E1E1E',

    colorError: '#FB2424',
    colorPrimary: '#5B3DF9',
    colorSuccess: '#089981',
    colorWarning: '#FCD535',

    backgroundBase: '#FFFFFF',
    backgroundSurface: '#F5F5F5',
    backgroundInputBase: '#F0F0F0',
    backgroundInputFocused: '#FFFFFF',

    textActive: '#000000',
    textInActive: '#5D5D5D',
    textSecondary: '#6B6B6B'
});
