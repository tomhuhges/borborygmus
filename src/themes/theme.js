const theme = {
  breakpoints: [
    32, 48, 64
  ],
  space: [
    '0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px'
  ],
  fontSizes: [
    '8px', '12px', '16px', '20px', '24px', '36px', '48px', '80px', '96px'
  ],
  lineHeights: {
    'copy': 1.5,
    'heading': 1.25,
    'solid': 1
  },
  borderWidths: [
    '0px', '1px', '2px', '4px', '8px', '16px', '32px'
  ],
  radius: [
    '0px', '4px', '16px', '9999px', '100%'
  ],
  transition: {
    transform: 'transform 0.3s ease-in-out',
    opacity: 'opacity 0.3s ease-in-out',
    all: 'all 0.3s ease-in-out',
  },
  typeface: {
    system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
    sans: '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif',
    serif: 'Georgia, "Times New Roman", Times, serif',
    mono: '"Roboto Mono", Menlo, Monaco, "Courier New", monospace',
    display: '"Astloch", "Comic Sans MS", "Comic Sans", cursive, sans-serif'
  },
  fontWeights: {
    'normal': 200,
    'mid': 500,
    'bold': 700
  },
  lighten: 0.5,
  darken: 0.5,
  colors: {
    'default': {
      'base': '#4343FF',
      'mid': '#9494FF',
      'light': '#C4C4FF',
      'pale': '#EDEDFF'
    },
    'blue': {
      'base': '#4343FF',
      'mid': '#9494FF',
      'light': '#C4C4FF',
      'pale': '#EDEDFF'
    },
    'red': {
      'base': '#FF4F4F',
      'mid': '#FF9494',
      'light': '#FFC4C4',
      'pale': '#FFEDED'
    },
    'yellow': {
      'base': '#FFD700',
      'mid': '#FFED85',
      'light': '#FFF6C2',
      'pale': '#FFFAE0'
    },
    'green': {
      'base': '#11E081',
      'mid': '#71F4B7',
      'light': '#A0F8CF',
      'pale': '#E3FDF1'
    },
    'grey': {
      'base': '#666',
      'mid': '#999',
      'light': '#CCC',
      'pale': '#EEE'
    },
    'black': {
      'base': '#333'
    },
    'white': {
      'base': '#fff'
    },
    'transparent': {
      'base': 'transparent',
    },
    'disabled': {
      'base': '#EEE'
    }
  }
}

export default theme
