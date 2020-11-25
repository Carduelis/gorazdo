import React from 'react';
import { useCurrentUser } from 'hooks';
import { UserTop } from 'components/molecules/UserTop';
import { ContentItemMap } from './ContentItemMap';
import { CardContent } from '@material-ui/core';
import { AddSection } from './AddSection';
import { ContentSections } from './ContentSections';

export const MainPortfolio = ({ doc }) => {
  const me = useCurrentUser();
  return (
    <CardContent>
      <UserTop doc={doc} />
      {doc
        .get('content')
        ?.map((contentItem, index) => (
          <ContentItemMap key={index} contentItem={contentItem} />
        )) ?? 'No content'}
      <ContentSections userDoc={doc} />
      {me?.uid === doc.get('uid') && <AddSection doc={doc} />}
    </CardContent>
  );
};
