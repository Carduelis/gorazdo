import React from 'react';
import { useCurrentUser, useFirestoreRef } from 'hooks';
import { UserTop } from 'components/molecules/UserTop';
import { ContentItemMap } from './ContentItemMap';
import {
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Text } from 'components/atoms/Text';
import { IconButton } from '@material-ui/core';
import { MdDelete } from 'react-icons/md';
import { useCollection } from 'react-firebase-hooks/firestore';
import { AddSection } from './AddContent';

export const MainPortfolio = ({ doc }) => {
  const me = useCurrentUser();
  console.log({ doc, me });
  return (
    <CardContent>
      <UserTop doc={doc} />
      {doc
        .get('content')
        ?.map((contentItem, index) => (
          <ContentItemMap key={index} contentItem={contentItem} />
        )) ?? 'No content'}
      <ContentSections doc={doc} />
      {me?.uid === doc.get('uid') && <AddSection doc={doc} />}
    </CardContent>
  );
};

const ContentSections = ({ doc }) => {
  const ref = useFirestoreRef(() => doc.ref.collection('sections'));
  const [collection, loading, error] = useCollection(ref);
  if (collection) {
    return (
      <List>
        {collection.docs.map((doc) => (
          <ListItem>
            <ListItemText
              primary={doc.id}
              secondary={<Text doc={doc} path="title" />}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={(event) => {
                  doc.ref
                    .delete()
                    .then(function () {
                      console.log('Document successfully deleted!');
                    })
                    .catch(function (error) {
                      console.error('Error removing document: ', error);
                    });
                }}
              >
                <MdDelete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
  return null;
};
