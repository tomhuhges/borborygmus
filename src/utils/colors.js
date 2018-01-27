const colors = (cssProp) => (props, baseColor = 'black', baseShade = 'base', transform) => {

  const { theme } = props;
  const colorNames = Object.keys(theme.colors);
  const shadeNames = Object.keys(theme.colors.default);

  return props => {

    const colors = colorNames.filter(color => props[color]);
    const color = colors.length === 0 ? baseColor : colors[colors.length - 1];

    const shades = shadeNames.filter(shade => props[shade]);
    const shade = shades.length === 0 ? baseShade : shades[shades.length - 1];

    return `${cssProp} : ${transform ? transform(0.05, theme.colors[color][shade]) :
      theme.colors[color][shade]};`;
  }
}

export const color = colors('color');
export const bg = colors('background-color');
export const borderColor = colors('border-color');
