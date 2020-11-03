import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* 
Сделать размеры height/width/border-radius и пр. плавающими 
*/

const TagBack = styled('div')`
  height: ${(props) => props.theme.spacing(3) + 'px'};
  border-radius: ${(props) => props.theme.spacing(2) + 'px'};
  background: ${(props) => props.tagColor};
  padding-left: ${(props) => props.theme.spacing(1.5) + 'px'};
  padding-right: ${(props) => props.theme.spacing(1.5) + 'px'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${(props) => props.theme.spacing(1) + 'px'};
`;

const TagText = styled('span')`
  color: ${(props) => props.textColor};
  transform: translateY(-5%);
`;
export const Tag = ({ label, tagColor, textColor }) => {
  return (
    <TagBack tagColor={tagColor}>
      <TagText textColor={textColor}>{label}</TagText>
    </TagBack>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  tagColor: PropTypes.string,
  textColor: PropTypes.string,
};

Tag.defaultProps = {
  label: 'Front-end',
  tagColor: '#D8E5FB',
  textColor: '#3C7EEC',
};
