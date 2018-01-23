import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { ph, pv, ml, color, bg, borderColor, typeface, setDefault } from '../../utils';

const Button = styled.button`
  ${typeface}
  ${props =>
    props.ghost ? setDefault(color, 'blue') :
    props => `color: ${props.theme.colors.white.base};`
  }
  ${props =>
    props.ghost ? `background-color: transparent;` :
    setDefault(bg, 'blue')
  }
  ${setDefault(borderColor, 'blue')}
  ${setDefault(ph, 4)}
  ${props =>
    props.fatbastard ? setDefault(pv, 6) :
    setDefault(pv, 2)
  }
  ${props => `
    width: ${
      props.fatbastard ? '100%' :
      'auto'
    };
    font-size: ${
      props.fatbastard ? props.theme.fontSizes[5] :
      props.theme.fontSizes[3]
    };
    line-height: ${props.theme.lineHeights.copy};
    text-decoration: none;
    border-radius: ${
      props.fatbastard ? props.theme.radius[0] :
      props.pill ? props.theme.radius[3] :
      props.theme.radius[1]
    };
    border-width: ${props.theme.borderWidths[2]};
    cursor: ${
      props.disabled ? 'default' :
      'pointer'
    };
  `}

  &:hover {
    ${props =>
      props.disabled ? bg :
      props.ghost ? `background-color: transparent;` :
      setDefault(bg, 'blue', 'base', lighten)
    }
    ${props =>
      props.disabled ? borderColor :
      setDefault(borderColor, 'blue', 'base', lighten)
    }
    &:after {
      transform: translateX(10px);
    }
  }

  &:focus {
    ${props =>
      props.disabled ? bg :
      props.ghost ? `background-color: transparent;` :
      setDefault(bg, 'blue', 'base', darken)
    }
    ${props =>
      props.disabled ? borderColor :
      setDefault(borderColor, 'blue', 'base', darken)
    }
    outline: none;
  };

  &:after {
    ${props =>
      props.arrow ? setDefault(ml, 3) :
      ''
    }
    ${props => props.arrow ? `
      content: "⟶";
      display: inline-block;
      transition: ${props.theme.transition.transform};
    ` : ''}
  }
`

export default Button;
