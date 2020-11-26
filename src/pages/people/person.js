import React from 'react';
import { useParams } from 'react-router';
import { useFirestoreRef } from 'hooks';
import { useCollection } from 'react-firebase-hooks/firestore';
import { MainPortfolio } from './MainPortfolio';
import { Typography } from '@material-ui/core';

export const Person = () => {
  const { name } = useParams();

  const ref = useFirestoreRef((db) =>
    db.collection('people').where('name', '==', name)
  );
  const [collection, loading, error] = useCollection(ref);
  return (
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
  );
};
