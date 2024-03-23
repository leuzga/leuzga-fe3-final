const clasesTheme = {
  light: {
    bgNav: 'bgNav',
    botonNav: 'button-nav',
    themeBtn: 'btnTheme',
    containerForm: 'form-container',
    inputs: 'input-l',
    cardContainer: 'card-container',
    cardTheme: 'card',
    h2Theme: 'h2theme',
    pTheme: 'pTheme',
    elementContainer: 'light-container',
  },
  dark: {
    bgNav: 'bgNav-d',
    botonNav: 'button-nav-d',
    themeBtn: 'btnTheme',
    containerForm: 'form-container-d',
    inputs: 'input-d',
    cardContainer: 'card-container-d',
    cardTheme: 'card-d',
    h2Theme: 'h2theme-d',
    pTheme: 'pTheme-d',
    bodyTheme: 'bodyTheme-d',
    elementContainer: 'dark-container',
  },
};

export const getClasses = (theme) => {
  return clasesTheme[theme] || null;
};
