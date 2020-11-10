import React from 'react';
import { useParams } from 'react-router';
import { useFirestoreRef } from 'hooks';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import { MainPortfolio } from './MainPortfolio';
import { Typography } from '@material-ui/core';

export const Person = () => {
  const { name } = useParams();

  const ref = useFirestoreRef((db) =>
    db.collection('people').where('name', '==', name)
  );
  const [collection, loading, error] = useCollection(ref);
  console.log(collection);
  return (
    // <StyledGrid>
    //   <StyledBackground></StyledBackground>
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {collection && collection.docs.length === 0 && (
        <Typography variant="h1">User 404 not found</Typography>
      )}
      {collection && (
        <section>
          {collection.docs.map((doc) => (
            <React.Fragment key={doc.id}>
              <MainPortfolio doc={doc} />
            </React.Fragment>
          ))}
        </section>
      )}
    </div>
    // </StyledGrid>
  );
};

const StyledGrid = styled('div')`
  display: grid;
  grid-template-columns: ${(props) => props.theme.spacing(50)} auto;
`;

const StyledBackground = styled('div')`
  background-color: #5f75ee;
  border-top-right-radius: ${(props) => props.theme.spacing(6)};
  border-bottom-right-radius: ${(props) => props.theme.spacing(6)};
  min-height: 40vh;
  margin-right: ${(props) => props.theme.spacing(5)};
  margin-top: ${(props) => props.theme.spacing(3)};
`;
