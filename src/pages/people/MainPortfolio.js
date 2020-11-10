import React, { useState } from 'react';
import { useCurrentUser, useFirestoreRef } from 'hooks';
import { UserTop } from 'components/molecules/UserTop';
import { ContentItemWrapper, ContentItemMap } from './ContentItemMap';
import {
  Typography,
  Card,
  CardContent,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Text } from 'components/atoms/Text';
import { TextField, IconButton, Paper } from '@material-ui/core';
import { MdSave, MdDelete } from 'react-icons/md';
import { useCollection } from 'react-firebase-hooks/firestore';

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

const AddSection = ({ doc }) => {
  const [value, setValue] = useState('Hi!');
  const handleAdd = (event) => {
    event.preventDefault();
    doc.ref
      .collection('sections')
      .doc(value)
      .set({
        title: {
          en: `A section ${Math.random()}`,
          ru: 'Название секции',
        },
      })
      .then(function () {
        console.log('Document successfully written!');
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };

  return (
    <Card component="form" onSubmit={handleAdd}>
      <CardContent>
        <TextField
          value={value}
          onChange={(event) => setValue(event.target.value)}
          variant="outlined"
          label="Добавить новую секцию"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <MdSave />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </CardContent>
    </Card>
  );
};
