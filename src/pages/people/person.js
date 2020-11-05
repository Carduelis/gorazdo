import React from 'react';
import { useParams } from 'react-router';
import { useFirestoreRef } from 'hooks';
import { useCollection } from 'react-firebase-hooks/firestore';
import Box from 'components/atoms/Box';
import styled from 'styled-components';
import { LinkIcon } from 'components/atoms/LinkIcon';
import { UserTop } from 'components/molecules/UserTop';
import { Text } from 'components/atoms/Text';
import { Typography } from 'components/atoms/Typography';
import { ContentItemMap, ContentItemWrapper } from './ContentItemMap';

export const Person = () => {
  const { name } = useParams();

  const ref = useFirestoreRef((db) =>
    db.collection('people').where('name', '==', name)
  );
  const [value, loading, error] = useCollection(ref);

  return (
    <Box>
      <StyledBackground></StyledBackground>
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && value.docs.length === 0 && <span>Collection: Empty...</span>}
        {value && (
          <section>
            {value.docs.map((doc) => (
              <React.Fragment key={doc.id}>
                <UserTop doc={doc} />
                <ContentItemWrapper title={{ en: 'About', ru: 'О себе' }}>
                  <Typography variant="body1" component="p">
                    <Text doc={doc} path="about" />
                  </Typography>
                </ContentItemWrapper>
                {doc.get('content').map((contentItem) => (
                  <ContentItemMap contentItem={contentItem} />
                ))}
              </React.Fragment>
            ))}
          </section>
        )}
      </div>
    </Box>
  );
};

const rendererLambda = (item) => (
  <HightlightItem key={item.id} name={item.name} href={item.href} />
);

const data = [
  {
    id: '123',
    name: 'Game marketplace',
    href: 'https://gm-trade.ru',
  },
  {
    id: 'asd',
    name: 'Miro contest',
    href: 'https://miro.com',
  },
];

const HightlightItem = (props) => (
  <HighlightContainer>
    <h4>{props.name}</h4>
    <LinkIcon href={props.href} />
  </HighlightContainer>
);

const HighlightContainer = styled('div')`
  width: 336px;
  height: 216px;
  border-radius: 32px;
  padding: 24px 40px;
  margin-right: 24px;
  background: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HighlightsContainer = styled('div')`
  display: flex;
`;

const StyledBackground = styled('div')`
  background-color: #5f75ee;
  border-top-right-radius: ${(props) => props.theme.spacing(6)};
  border-bottom-right-radius: ${(props) => props.theme.spacing(6)};
  min-height: 40vh;
  width: 40%;
  flex-shrink: 0;
  margin-right: ${(props) => props.theme.spacing(5)};
  margin-top: ${(props) => props.theme.spacing(3)};
`;
