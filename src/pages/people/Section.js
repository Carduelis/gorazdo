import React from 'react';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';
import { Text } from 'components/atoms/Text';
import { DeleteDocumentButton } from './DeleteDocumentButton';
import { SectionContent } from './SectionContent';
import { AddItemDrawer } from './AddItemDrawer';

export const Section = ({ doc, userDoc }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4">
            <Text doc={doc} path="title" />
            <DeleteDocumentButton userDoc={userDoc} targetDoc={doc} />
          </Typography>
          <SectionContent doc={doc} userDoc={userDoc} />
          <AddItemDrawer doc={doc} userDoc={userDoc} />
        </CardContent>
      </Card>
      <br />
      <Divider />
      <br />
    </>
  );
};
