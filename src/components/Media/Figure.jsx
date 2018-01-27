import React from 'react';
import styled from 'styled-components';
import Figcaption from '../Typography/Figcaption';
import { m, setDefault } from '../../utils';

const FigureContainer = styled.figure`
  ${setDefault(m, 0)}
`

const Figure = props =>
  <FigureContainer>
    <img src={props.src} alt={props.alt} width={props.width}/>
    { props.caption ? (
      <Figcaption>{props.caption}</Figcaption>
    ) : null}
  </FigureContainer>

export default Figure;
