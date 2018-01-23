const aliases = {
  m: 'margin',
  p: 'padding',
  l: ['-left'],
  r: ['-right'],
  t: ['-top'],
  b: ['-bottom'],
  h: ['-left', '-right'],
  v: ['-top', '-bottom']
};

const space = (name) => {
  const names = name.split('');
  if (names.length === 1) {
    return (props, i) => {
      return `${aliases[name[0]]}: ${props.theme.space[i]};`;
    }
  } else {
    return (props, i) => aliases[name[1]].map(dir => {
      return `${aliases[name[0]]}${dir}: ${props.theme.space[i]};`;
    }).join('\n');
  }
}

// Margins
export const m = space('m');
export const ml = space('ml');
export const mr = space('mr');
export const mt = space('mt');
export const mb = space('mb');
export const mh = space('mh');
export const mv = space('mv');

// Paddings
export const p = space('p');
export const pl = space('pl');
export const pr = space('pr');
export const pt = space('pt');
export const pb = space('pb');
export const ph = space('ph');
export const pv = space('pv');
