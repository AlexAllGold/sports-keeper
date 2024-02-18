import React from 'react';
import { useParams } from 'react-router-dom';
import { useClub } from '../../../hooks/useClub';

function Club() {
  const { id } = useParams();
  const { currentClub, loading, error} = useClub(id);

  return (
			<div>
				{loading && <h1>Loading...</h1>}
				{error && <h1>{error}</h1>}
				{currentClub && <h1>Name: {currentClub.name}</h1>}
    </div>
  );
}

export { Club };
