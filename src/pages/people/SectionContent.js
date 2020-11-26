import { useFirestoreRef } from 'hooks';
import { useCollection } from 'react-firebase-hooks/firestore';

export const SectionContent = ({ doc, userDoc }) => {
  const ref = useFirestoreRef(() => doc.ref.collection('items'));
  const [collection, loading, error] = useCollection(ref);

  if (loading) {
    return 'loading';
  }
  if (error) {
    return error.message;
  }
  if (collection.empty) {
    return 'no data';
  }
  return `Element count is ${collection.docs.length}`;
};
