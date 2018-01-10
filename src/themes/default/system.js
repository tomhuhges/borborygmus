import DesignSystem from 'design-system-utils';
import type from './components/type.js';
import colors from './components/colors.js';
import breakpoints from './components/breakpoints.js';
import zIndex from './components/zIndex.js';
import spacing from './components/spacing.js';
import layout from './components/layout.js';
import transition from './components/transition.js';
import borderRadius from './components/borderRadius.js';

const tomhuhges = {
  type,
  colors,
  breakpoints,
  zIndex,
  spacing,
  layout,
  transition,
  borderRadius
}

const ds = new DesignSystem(tomhuhges, {
  useModularScale: true,
  fontSizeUnit: 'rem',
});

export {
  tomhuhges,
  ds
}
