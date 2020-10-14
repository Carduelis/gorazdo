import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from 'components/atoms/Typography';
import { Tag } from 'components/atoms/Tag';

const SquarePicture = styled('div')`
  height: 80px;
  width: 80px;
  border-radius: 16px;
  background: ${(props) => props.theme.palette.info.main};
`;

const PanelContainer = styled('div')`
  display: flex;
  height: 112px;
  width: 752px;
  border-radius: 16px;
  padding-left: 8px;
  padding-right: 8px;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.theme.palette.info.light};
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
  line-height: ${(props) => props.theme.typography.subtitle2};
`;

const TagsContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const Date = styled('span')`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: baseline;
  color: ${(props) => props.theme.palette.text.secondary};
`;

const SecondLineContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const PanelArticles = ({}) => {
  return (
    <PanelContainer>
      <SquarePicture></SquarePicture>
      <TextContainer>
        <StyledTitle>
          Анонс новой версии Styled Components v5: Звериный оскал
        </StyledTitle>
        <SecondLineContainer>
          <TagsContainer>
            <Tag label="Front-end" />
            <Tag label="Javascript" />
          </TagsContainer>
          <Date>20.05.2020</Date>
        </SecondLineContainer>
      </TextContainer>
    </PanelContainer>
  );
};
