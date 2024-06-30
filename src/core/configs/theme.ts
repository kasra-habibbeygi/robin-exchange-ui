export const designToken = (mode: 'dark' | 'light', direction: 'rtl' | 'ltr') => ({
    mode,
    direction,

    fontFamily: 'Arial, sans-serif',
    fontSizeBase: '14px',
    fontWeightBase: '400',

    borderRadiusNone: '0px',
    borderRadiusSmall: '6px',
    borderRadiusMedium: '8px',
    borderRadiusLarge: '12px',
    borderRadiusRound: '500px',

    colorDanger: '#F6465D',
    colorSuccess: '#089981',
    colorWarning: '#FCD535',
    colorAccent: '#3772FF',

    backgroundBase: mode === 'dark' ? '#141416' : '#FFFFFF',
    backgroundSurface: mode === 'dark' ? '#1E1E1E' : '#F5F5F5',
    backgroundInputBase: mode === 'dark' ? '#222630' : '#F0F0F0',
    backgroundInputFocused: mode === 'dark' ? '#333B45' : '#FFFFFF',

    textPrimary: mode === 'dark' ? '#FFFFFF' : '#000000',
    textSecondary: mode === 'dark' ? '#9B9C9F' : '#4F4F4F',
    textDisabled: mode === 'dark' ? '#6C6C6C' : '#A0A0A0',

    borderPrimary: mode === 'dark' ? '#343434' : '#D0D0D0',
    borderFocused: mode === 'dark' ? '#3772FF' : '#0056B3'
});
