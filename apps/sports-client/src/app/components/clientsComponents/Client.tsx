import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchClient } from '../../../api/clients';
import { dateFormat } from '../../../utils/dayjs';

function Client() {
	const dispatch = useAppDispatch();
	const { clientId: id, clubId } = useParams();
	const { currentClient, error, loading } = useAppSelector((state) => state.client);

	useEffect(() => {
		dispatch(fetchClient({ id, clubId }));
	}, [clubId, dispatch, id]);

	return (
		<div>
			{loading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			{currentClient && (
				<div>
					<h1>First Name: {currentClient.firstName}</h1>
					<h1>Last Name: {currentClient.lastName}</h1>
					<h1>Email: {currentClient.email}</h1>
					<h1>Date of Birthday: {dateFormat(currentClient.dateOfBirth)}</h1>
				</div>
			)}
		</div>
	);
}

export { Client };
