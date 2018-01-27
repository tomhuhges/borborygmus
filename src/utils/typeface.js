const typography = (cssProp, themeProp, baseVal) => {
  return (props, base = baseVal) => {
    const { theme } = props;
    const types = Object.keys(theme[themeProp]);
    return props => {
      const names = types.filter(type => props[type])
      const name = names.length === 0 ? base : names[names.length - 1];
      return `${cssProp}: ${theme[themeProp][name]};`;
    }
  }
}

export const typeface = typography('font-family', 'typeface', 'sans');
export const weight = typography('font-weight', 'fontWeights', 'normal');
