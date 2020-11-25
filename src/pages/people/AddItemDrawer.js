import React, { useState } from 'react';
import {
  CardContent,
  Typography,
  Button,
  Drawer,
  Card,
  TextField,
  FormGroup,
} from '@material-ui/core';

import { useCurrentUser } from 'hooks';
export const AddItemDrawer = ({ userDoc, doc }) => {
  const [open, setOpen] = useState(false);
  const me = useCurrentUser();
  const isMine = me?.uid === userDoc.get('uid');

  const handleAdd = (event) => {
    event.preventDefault();
    doc.ref
      .collection('sections')
      .doc()
      .set({
        title: {
          en: 'en',
          ru: 'ru',
        },
      })
      .then(function () {
        console.log('Document successfully written!');
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };

  if (!isMine) {
    return null;
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Add</Button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <CardContent>
          <Typography variant="h5">Edit section</Typography>
          <Typography variant="overline">{doc.id}</Typography>

          <CardContent>
            <FormGroup component="form" onSubmit={handleAdd}>
              <TextField
                margin="normal"
                variant="outlined"
                label="Заголовок"
                helperText="Название объекта item"
              />
              <TextField
                margin="normal"
                variant="outlined"
                label="Подзаголовок"
                helperText="Название объекта item"
              />
              <TextField
                margin="normal"
                variant="outlined"
                label="Дата"
                helperText="Название объекта item"
              />
              <TextField
                margin="normal"
                variant="outlined"
                label="Тип данных"
                helperText="Название объекта item"
              />
            </FormGroup>
          </CardContent>
        </CardContent>
      </Drawer>
    </>
  );
};
