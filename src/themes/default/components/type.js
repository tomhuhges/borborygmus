const type = {
  baseFontSize: '20px',

  // the values below use modular-scale
  sizes: {
    xs: -2,
    s: -1,
    base: 0, // [default] p, h5, h6
    m: 1, // h4
    l: 2, // h3
    xl: 3, // h2
    xxl: 4, // h1
  },

  modularscale: {
    base: 20,
    ratio: 1.5,
  },

  fontFamily: {
    system:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
    sans: '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif',
    serif: 'Georgia, "Times New Roman", Times, serif',
    mono: '"Roboto Mono", Menlo, Monaco, "Courier New", monospace',
    display: '"Astloch", "Comic Sans MS", "Comic Sans", cursive, sans-serif'
  },

  lineHeight: {
    headings: 1.1,
    default: 1.5,
  },

  fontWeight: {
    normal: 300, // Useful to set here if using anything other than `normal`
    bold: 'bold', // Useful to set here when bold webfonts come as 400 font-weight.
    headings: 'bold', // instead of browser default, bold
  },
};

export default type;
