import { useEffect, useState, useReducer, useMemo } from 'react';

const useFirebase = () => {
  const [firebaseInstance, setFirebaseInstance] = useState(null);
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
      try {
        // eslint-disable-next-line no-undef
        let app = firebase.app();
        let features = ['auth', 'firestore', 'messaging', 'storage'].filter(
          feature => typeof app[feature] === 'function'
        );
        setFirebaseInstance(app);
        console.log(`Firebase SDK loaded with ${features.join(', ')}`);
      } catch (error) {
        console.error(error);
        setFirebaseInstance(null);
      }
    });
  }, []);
  return firebaseInstance;
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        payload: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error();
  }
};

const useFirestoreGet = ref => {
  const [aborted, setAborted] = useState(false);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    loading: false,
    error: null,
    payload: null,
  });
  useEffect(() => {
    if (ref) {
      fetchData({ ref, dispatch, aborted });
    }
    return () => {
      setAborted(true);
    };
  }, [aborted, ref]);

  return [state.payload, state.loading, state.error];
};

const useServices = (locale = 'en') => {
  const firebase = useFirebase();
  const ref = useMemo(
    () =>
      firebase
        ? firebase
            .firestore()
            .collection('services')
            .where('locale', '==', locale)
        : null,
    [firebase, locale]
  );

  return useFirestoreGet(ref);
};

export { useServices, useFirestoreGet };

const fetchData = async ({ aborted, dispatch, ref }) => {
  dispatch({
    type: 'FETCH_INIT',
  });
  try {
    const result = await ref.get();

    if (!aborted) {
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: result,
      });
    }
  } catch (error) {
    if (!aborted) {
      dispatch({
        type: 'FETCH_INIT',
        payload: error.message,
      });
    }
  }
};
