import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchClub } from '../../../api/clubs';

function Club() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { currentClub, error, loading } = useAppSelector(state => state.clubReducer);

  useEffect(() => {
    dispatch(fetchClub(id));
  }, [dispatch, id]);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {currentClub && <h1>Name: {currentClub.name}</h1>}
    </div>
  );
}

export { Club };
