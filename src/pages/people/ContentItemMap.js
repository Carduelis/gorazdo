import React from 'react';
import { Typography } from 'components/atoms/Typography';
import { PanelArticles } from 'components/molecules/PanelArticles';
import { Text } from 'components/atoms/Text';
import { CourseLink } from 'components/molecules/CourseLink';
import styled from 'styled-components';

const StyledSection = styled('section')`
  margin-top: ${(props) => props.theme.spacing(5)};
  margin-bottom: ${(props) => props.theme.spacing(5)};
  padding-left: ${(props) => props.theme.spacing(6)};
  padding-right: ${(props) => props.theme.spacing(6)};
`;

export const ContentItemWrapper = (props) => {
  const { title, children, component } = props;
  const Component = component;
  return (
    <StyledSection>
      <Typography variant="h4" gutterBottom>
        {title.en}
      </Typography>
      <Component>{children}</Component>
    </StyledSection>
  );
};

ContentItemWrapper.defaultProps = {
  component: 'div',
};

export const ContentItemMap = (props) => {
  const { contentItem } = props;
  const { type } = contentItem;
  if (type === 'list-item') {
    return (
      <ContentItemWrapper title={contentItem.title} component="ol">
        {contentItem.items.map((item, index) => (
          <li key={index}>
            <CourseLink title={item.title} link={item.link} />
          </li>
        ))}
      </ContentItemWrapper>
    );
  }
  if (type === 'list-item-full') {
    return (
      <ContentItemWrapper title={contentItem.title}>
        {contentItem.items.map((item, index) => (
          <PanelArticles
            key={index}
            title={<Text value={item.title} />}
            colorTag={[]}
            cover={item.cover ? item.cover : 'http://placekitten.com/50/50'}
            alt={item.cover ? 'Cover' : 'No cover'}
          />
        ))}
      </ContentItemWrapper>
    );
  }
  return 'Error: there is no such type';
};
