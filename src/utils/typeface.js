export const typeface = (props, base) => {
  const { theme } = props;
  base = base || 'sans';
  const types = Object.keys(theme.typeface);
  return props => {
    const names = types.filter(type => props[type])
    const name = names.length === 0 ? base : names[names.length - 1];
    return `font-family: ${theme.typeface[name]};`;
  }
}

export const weight = (props, base) => {
  const { theme } = props;
  base = base || 'normal';
  const types = Object.keys(theme.fontWeights);
  return props => {
    const names = types.filter(type => props[type])
    const name = names.length === 0 ? base : names[names.length - 1];
    return `font-weight: ${theme.fontWeights[name]};`;
  }
}
