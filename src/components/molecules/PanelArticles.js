import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from 'components/atoms/Typography';
import { Tag } from 'components/atoms/Tag';

const SquarePicture = styled('img')`
  height: 80px;
  width: 80px;
  border-radius: ${(props) => props.theme.spacing(1) + 'px'};
  background: ${(props) => props.theme.palette.action.selected};
`;

const PanelContainer = styled('div')`
  display: flex;
  height: 112px;
  width: 752px;
  border-radius: ${(props) => props.theme.spacing(2) + 'px'};
  padding-left: ${(props) => props.theme.spacing(1) + 'px'};
  padding-right: ${(props) => props.theme.spacing(1) + 'px'};
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.theme.palette.action.hover};
`;

const TextContainer = styled('div')`
  height: 80px;
  width: 616px;
  flex-direction: column;
`;

const StyledTitle = styled('div')`
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.palette.text.primary};
  line-height: ${(props) => props.theme.typography.h6};
`;

const TagsContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.spacing(1) + 'px'};
`;

const Date = styled('span')`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: baseline;
  color: ${(props) => props.theme.palette.text.primary};
  font-size: ${(props) => props.theme.typography.body2.fontSize};
`;

const SecondLineContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
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
export const PanelArticles = ({ title, cover, alt, colorTag }) => {
  return (
    <PanelContainer>
      <SquarePicture src={cover} alt={alt} />
      <TextContainer>
        <StyledTitle>{title}</StyledTitle>
        <SecondLineContainer>
          <TagsContainer>
            {colorTag.map((tagItem) => (
              <Tag
                key={tagItem.color}
                label={tagItem.label}
                tagColor={tagItem.tagColor}
                textColor={tagItem.textColor}
              />
            ))}
          </TagsContainer>
          <Date>20.05.2020</Date>
        </SecondLineContainer>
      </TextContainer>
    </PanelContainer>
  );
};

PanelArticles.propTypes = {
  title: PropTypes.string,
  colorTag: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string,
      tagColor: PropTypes.string,
      textColor: PropTypes.string,
    })
  ),
};

PanelArticles.defaultProps = {
  title: 'Анонс новой версии Styled Components v5: Звериный оскал',
  colorTag: COLOR_FACTORS,
};
