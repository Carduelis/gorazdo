import React from 'react';
import { Typography } from 'components/atoms/Typography';
import { PanelArticles } from 'components/molecules/PanelArticles';

export const ContentItemWrapper = (props) => {
  const { title, children, component } = props;
  const Component = component;
  return (
    <section>
      <Typography variant="h4">{title.en}</Typography>
      <Component>{children}</Component>
    </section>
  );
};

ContentItemWrapper.defaultProps = {
  component: 'ul',
};

export const ContentItemMap = (props) => {
  const { contentItem } = props;
  const { type } = contentItem;
  if (type === 'list-item') {
    return (
      <ContentItemWrapper title={contentItem.title} component="ol">
        {contentItem.items.map((item) => (
          <li>
            <Typography variant="h6">{item.title}</Typography>
          </li>
        ))}
      </ContentItemWrapper>
    );
  }
  if (type === 'list-item-full') {
    return (
      <ContentItemWrapper title={contentItem.title}>
        {contentItem.items.map((item) => (
          <li>
            <PanelArticles
              title={item.title}
              colorTag={[]}
              cover={item.cover ? item.cover : 'http://placekitten.com/50/50'}
              alt={item.cover ? 'Cover' : 'No cover'}
            />
          </li>
        ))}
      </ContentItemWrapper>
    );
  }
  return 'Error: there is no such type';
};
