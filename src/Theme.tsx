import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2d9cdb',
      dark: '#2e85d4', // Hover colour which in our case is a lighter colour
    },
    secondary: {
      main: '#2e85d4',
    },
    text: {
      primary: '#000000',
      secondary: '#2d9cdb',
    },
    background: {
      default: '#ffffff',
    },
    success: {
      main: '#55ab68',
    },
    warning: {
      main: '#f38713',
    },
    error: {
      main: '#ed4a3a',
    },
    divider: '#707070',
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 700,
    },
    h2: {
      fontSize: 22,
      fontWeight: 700,
    },
    h3: {
      fontSize: 20,
      fontWeight: 700,
    },
    h4: {
      fontSize: 14,
      fontWeight: 700,
    },
    h5: {
      // Used for navigation links
      fontSize: 16,
      fontWeight: 700,
      '& a': {
        color: '#FFFFFF',
        textDecoration: 'none',
      },
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 400,
    },
    button: {
      fontSize: 16,
      fontWeight: 600,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    caption: {
      fontSize: 16,
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        containedSecondary: {
          backgroundColor: '#808080',
          '&:hover': {
            backgroundColor: '#565656',
          },
        },
        text: {
          textTransform: 'none',
          '&:hover': {
            background: 'transparent',
            color: '#2e85d4',
          },
        },
        startIcon: {
          marginRight: '4px',
          '& > :nth-of-type(1)': {
            fontSize: '22px',
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: 'rgb(221 221 221 / 50%)',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: '#55ab68',
          color: '#FFFFFF',
          fontWeight: 'bold',
        },
        standardError: {
          backgroundColor: '#ed4a3a',
          color: '#FFFFFF',
          fontWeight: 'bold',
        },
        standardWarning: {
          backgroundColor: '#f38713',
          color: '#FFFFFF',
          fontWeight: 'bold',
        },
        standardInfo: {
          backgroundColor: '#2e85d4',
          color: '#FFFFFF',
          fontWeight: 'bold',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#FFF',
          p: 0,
          boxShadow:
            '0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          '& .MuiTooltip-arrow': {
            color: 'var(--white)',
          },
          '.MuiTooltip-arrow: before': {
            boxShadow: '1px 1px 1px 0px rgb(0 0 0 / 25%)',
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          marginLeft: '30px',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          marginLeft: '30px',
        },
      },
    },
  },
});
