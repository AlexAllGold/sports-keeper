import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchAllClubs, fetchClub } from '../api/clubs';

export const useClub = (id?: string | undefined) => {
	const dispatch = useAppDispatch();
	const { currentClub, clubs, error, loading } = useAppSelector((state) => state.club);

	useEffect(() => {
		if (clubs.length === 0) {
			if (!id) {
				dispatch(fetchAllClubs());
			} else {
				dispatch(fetchClub(id));
			}
		}
	}, [clubs.length, dispatch, id]);
	return { currentClub, error, loading, clubs };
};
