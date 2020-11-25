import React, { useState } from 'react';
import { Card, CardContent, InputAdornment } from '@material-ui/core';
import { TextField, IconButton } from '@material-ui/core';
import { MdSave } from 'react-icons/md';

export const AddSection = ({ doc }) => {
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
