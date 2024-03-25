const clasesTheme = {
  light: {
    navTheme: 'navbar',
    bgNav: 'bgNav',
    themeBtn: 'btnTheme',
    bgContainerRoot: 'light-theme',
    themeContent: 'bg-content-light',
    inputs: 'input-l',
    cardTheme: 'card',
    h2Theme: 'h2theme',
    pTheme: 'pTheme',
    detailContent: 'content-page-detail',
    tableTheme: 'table-l',
    bgFormContainer: 'containerForm',
  },
  dark: {
    navTheme: 'navbar-dark',
    bgNav: 'bgNav-dark',
    themeBtn: 'btnTheme',
    bgContainerRoot: 'dark-theme',
    themeContent: 'bg-content-dark',
    inputs: 'input-d',
    cardTheme: 'card-d',
    h2Theme: 'h2theme-d',
    pTheme: 'pTheme-d',
    detailContent: 'content-page-detail-d',
    tableTheme: 'table-d',
    bgFormContainer: 'containerForm-dark',
  },
};

export const getClasses = (theme) => {
  return clasesTheme[theme] || null;
};
