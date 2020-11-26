import React, { useState } from 'react';
import {
  CardContent,
  Typography,
  Button,
  Drawer,
  TextField,
  FormGroup,
  MenuItem,
} from '@material-ui/core';

import { useCurrentUser } from 'hooks';
import { postProcess } from './utils/postProcess';

const FORM_FIELDS_DICTIONARY = {
  jobs: ['title', 'subtitle', 'cover', 'dateStart', 'dateEnd', 'description'],
  education: [
    'title',
    'subtitle',
    'cover',
    'dateStart',
    'dateEnd',
    'description',
  ],
  about: ['title', 'description'],
  courses: ['title', 'subtitle', 'cover', 'description', 'dateEnd'],
};

// Anna Cover, Description
// Kolya поле для Tags (array) https://material-ui.com/components/autocomplete/ freeSolo creatable
// Katya зарендерить внутри секции эти items (используем готовые компоненты)

export const AddItemDrawer = ({ userDoc, doc }) => {
  const [type, setType] = useState('jobs');
  const [open, setOpen] = useState(false);
  const me = useCurrentUser();
  const isMine = me?.uid === userDoc.get('uid');

  const [formData, setFormData] = useState({});

  const handleAdd = (event) => {
    event.preventDefault();
    console.log('test');
    doc.ref
      .collection('items')
      .doc()
      .set({
        type: type,
        ...postProcess(formData),
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

          <CardContent component="form" onSubmit={handleAdd}>
            <FormGroup>
              <TextField
                margin="normal"
                variant="outlined"
                label="Тип объекта"
                value={type}
                onChange={(event) => setType(event.target.value)}
                select
                helperText="Название объекта item"
              >
                {Object.keys(FORM_FIELDS_DICTIONARY).map((key) => (
                  <MenuItem key={key} value={key}>
                    {key}
                  </MenuItem>
                ))}
              </TextField>
              <Fields
                type={type}
                formData={formData}
                setFormData={setFormData}
              />
              <Button
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
              >
                Сохранить
              </Button>
            </FormGroup>
          </CardContent>
        </CardContent>
      </Drawer>
    </>
  );
};

const Fields = ({ type, formData, setFormData }) => {
  console.log(formData);
  console.log(FORM_FIELDS_DICTIONARY[type]);
  return FORM_FIELDS_DICTIONARY[type].map((fieldName) => (
    <Field
      key={fieldName}
      name={fieldName}
      formData={formData}
      setFormData={setFormData}
    />
  ));
};

const Field = ({ name, formData, setFormData }) => {
  if (name === 'title') {
    return (
      <TextField
        margin="normal"
        value={formData.title ?? ''}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        variant="outlined"
        label="Заголовок"
        helperText="Название объекта item"
      />
    );
  }

  if (name === 'subtitle') {
    return (
      <TextField
        margin="normal"
        variant="outlined"
        value={formData.subtitle ?? ''}
        onChange={(event) => {
          setFormData({ ...formData, subtitle: event.target.value });
        }}
        label="Подзаголовок"
        helperText="Название объекта item"
      />
    );
  }

  if (name === 'dateStart') {
    return (
      <TextField
        margin="normal"
        variant="outlined"
        value={formData.dateStart ?? '2020-01-01'}
        onChange={(event) => {
          setFormData({ ...formData, dateStart: event.target.value });
        }}
        label="Дата"
        type="date"
        helperText="Название объекта item"
      />
    );
  }

  if (name === 'dateEnd') {
    return (
      <TextField
        margin="normal"
        variant="outlined"
        value={formData.dateEnd ?? '2020-11-12'}
        onChange={(event) => {
          setFormData({ ...formData, dateEnd: event.target.value });
        }}
        label="Дата"
        type="date"
        helperText="Название объекта item"
      />
    );
  }

  return (
    <TextField
      error
      disabled
      margin="normal"
      variant="outlined"
      value={name}
      label="Поле с названием"
      helperText="не найдено в компоненте <Field />"
    />
  );
};
