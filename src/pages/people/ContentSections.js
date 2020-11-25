import React from 'react';
import { useCurrentUser, useFirestoreRef } from 'hooks';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from '@material-ui/core';
import { Text } from 'components/atoms/Text';
import { IconButton } from '@material-ui/core';
import { MdDelete } from 'react-icons/md';
import { useCollection } from 'react-firebase-hooks/firestore';
import { DeleteDocumentButton } from './DeleteDocumentButton';
import { Section } from './Section';

export const ContentSections = ({ userDoc }) => {
  const me = useCurrentUser();
  const ref = useFirestoreRef(() => userDoc.ref.collection('sections'));
  const [collection, loading, error] = useCollection(ref);
  if (collection) {
    return (
      <List>
        {collection.docs.map((doc) => (
          <Section key={doc.id} doc={doc} userDoc={userDoc} />
        ))}
      </List>
    );
  }
  return null;
};
