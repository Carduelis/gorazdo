import React from 'react';
import { useCurrentUser } from 'hooks';
import { IconButton } from '@material-ui/core';
import { MdDelete } from 'react-icons/md';

export const DeleteDocumentButton = ({ userDoc, targetDoc }) => {
  const me = useCurrentUser();
  if (me?.uid !== userDoc.get('uid')) {
    return null;
  }

  return (
    <IconButton
      edge="end"
      aria-label="delete"
      onClick={(event) => {
        targetDoc.ref
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
  );
};
