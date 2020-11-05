import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Tag } from 'components/atoms/Tag';

const SquarePicture = styled('img')`
  height: 80px;
  width: 80px;
  border-radius: ${(props) => props.theme.spacing(1) + 'px'};
  background: ${(props) => props.theme.palette.action.selected};
`;

const PanelContainer = styled('div')`
  display: flex;
  height: auto;
  width: 752px;
  border-radius: ${(props) => props.theme.spacing(2) + 'px'};
  padding-left: ${(props) => props.theme.spacing(1) + 'px'};
  padding-right: ${(props) => props.theme.spacing(1) + 'px'};
  padding-top: ${(props) => props.theme.spacing(1) + 'px'};
  padding-bottom: ${(props) => props.theme.spacing(1) + 'px'};
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.theme.palette.action.hover};
`;

const TextContainer = styled('div')`
  height: 80px;
  width: 616px;
  flex-direction: row;
`;

const StyledTitle = styled('div')`
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.palette.text.primary};
  line-height: ${(props) => props.theme.typography.h6};
`;

const StyledLink = styled('a')`
  text-decoration: none;
`;

const TagsContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.spacing(1) + 'px'};
`;

const SecondLineContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const COLOR_FACTORS = [
  {
    color: 'blue',
    label: 'Front-end',
    tagColor: '#D8E5FB',
    textColor: '#3C7EEC',
  },
  {
    color: 'pink',
    label: 'JavaScript',
    tagColor: '#FCDFD3',
    textColor: '#F15D23',
  },
];
export const ContentPanel = ({ title, link, tags }) => {
  return (
    <PanelContainer>
      <TextContainer>
        <StyledTitle>
          <StyledLink href={link}>{title} </StyledLink>
        </StyledTitle>
        <SecondLineContainer>
          <TagsContainer>
            {tags.map((tagItem) => (
              <Tag
                key={tagItem.color}
                label={tagItem.label}
                tagColor={tagItem.tagColor}
                textColor={tagItem.textColor}
              />
            ))}
          </TagsContainer>
        </SecondLineContainer>
      </TextContainer>
    </PanelContainer>
  );
};

ContentPanel.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string,
      tagColor: PropTypes.string,
      textColor: PropTypes.string,
    })
  ),
};

ContentPanel.defaultProps = {
  title: 'HTML Academy Javascript ',
  tags: COLOR_FACTORS,
  link: 'https://htmlacademy.ru/courses',
};
