import React from 'react';
import Box from '../atoms/Box';
import styled from 'styled-components';
import { color, layout, space, border, position } from 'styled-system';
import { MdAdd } from 'react-icons/md';
import getStyle from '../../utils/getStyle';

const StyledRibbon = styled.div`
  position: relative;
  width: 100%;
  padding: ${getStyle('space', 2)} 0;
`;

export const Ribbon = props => {
  const { isEmpty, isDraggingOver, isDragStarted } = props;
  let opacity = 0;
  if (isEmpty) {
    if (isDragStarted) {
      opacity = 0.2;
    }

    if (isDraggingOver) {
      opacity = 1;
    }
  }
  return (
    <StyledRibbon>
      <Placeholder opacity={opacity} />
      <div {...props} />
    </StyledRibbon>
  );
};

const Icon = styled(Box)`
  ${position};
  left: 0;
  top: 0;
  font-size: 3em;
`;

const StyledDiv = styled.div`
  ${color};
  ${position};
  ${layout};
  ${space};
  ${border};
`;

const StyledPlaceholder = styled(StyledDiv)`
  transition: opacity 200ms;
`;

const Placeholder = props => {
  return (
    <StyledPlaceholder
      position="absolute"
      p={5}
      width="100%"
      opacity={props.opacity}
    >
      <StyledDiv borderRadius="3" height="5" color="#999" border="dropbox">
        {props.children}
        <Icon
          position="absolute"
          fullHeight
          fullWidth
          alignItems="center"
          justify="center"
        >
          <MdAdd />
        </Icon>
      </StyledDiv>
    </StyledPlaceholder>
  );
};
