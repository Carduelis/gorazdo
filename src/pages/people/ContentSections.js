import React from 'react';
import { useFirestoreRef } from 'hooks';
import { List } from '@material-ui/core';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Section } from './Section';

export const ContentSections = ({ userDoc }) => {
  const ref = useFirestoreRef(() => userDoc.ref.collection('sections'));
  const [collection] = useCollection(ref);
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
