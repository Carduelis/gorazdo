import React, { useEffect } from 'react';
import styled from 'styled-components';
import anna from '../../pages/anna_s.json';
import Box from 'components/atoms/Box';
import { Avatar } from 'components/atoms/Avatar';
import { Typography } from 'components/atoms/Typography';
import { Text } from 'components/atoms/Text';

const StyledBox = styled(Box)`
  padding: ${(props) => props.theme.spacing(6)}px;
`;

const Hgroup = styled('hgroup')`
  margin-left: ${(props) => props.theme.spacing(2)}px;
`;

export const UserTop = ({ doc }) => {
  // useEffect(() => {
  //   doc.ref.update(anna);
  // }, []);
  return (
    <StyledBox>
      <Avatar url={doc.get('avatar')} size="12" />
      <Hgroup>
        <Typography variant="h3">
          <Text doc={doc} path="firstName" />
          &nbsp;
          <Text doc={doc} path="lastName" />
        </Typography>
        <Typography variant="h6">
          <Text doc={doc} path="profession" />
        </Typography>
      </Hgroup>
    </StyledBox>
  );
};
