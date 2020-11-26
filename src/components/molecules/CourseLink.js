import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdOpenInNew } from 'react-icons/md';
import { Text } from 'components/atoms/Text';

const StyledAnchor = styled('a')`
  margin: ${(props) => props.theme.spacing(1)};
  display: inline-block;
  position: relative;
  & > svg {
    opacity: 0;
    position: absolute;
    bottom: 0;
    transition: opacity 100ms;
    margin-left: 0.3em;
  }
  &:hover > svg {
    opacity: 0.6c;
  }
`;

export const CourseLink = ({ title, link }) => {
  return (
    <StyledAnchor href={link} target="_blank" rel="noopener noreferrer">
      <Text value={title} />
      <MdOpenInNew />
    </StyledAnchor>
  );
};

CourseLink.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

CourseLink.defaultProps = {
  title: 'HTML Academy Javascript ',
  link: 'https://htmlacademy.ru/courses',
};
