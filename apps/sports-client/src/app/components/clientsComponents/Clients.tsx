import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchAllClients } from '../../../api/clients';
import ClientTable from '../tanstackTable/ClientTable';

export function Clients() {
	const { clubId } = useParams();
	const dispatch = useAppDispatch();
	const { clients, error, loading } = useAppSelector((state) => state.client);

	useEffect(() => {
		dispatch(fetchAllClients(clubId));
	}, [dispatch, clubId]);

	// const handleEditClick = (id: number | undefined) => () => {
	// 	navigate(`${id}/update`);
	// };
	// const handleAllClientClick = (id: number | undefined) => () => {
	// 	navigate(`/clubs/${clubId}/clients/${id}`);
	// };
	// const handleRemove = (id: number | undefined) => async () => {
	// 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// 	// @ts-expect-error
	// 	await dispatch(removeClient({ clubId, id })).unwrap();
	// 	dispatch(fetchAllClients(clubId));
	// };

	return (
		<>
			{loading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			{clients.length === 0 && (
				<div className="h-full flex justify-center items-center">
					<h1>Not Clients</h1>
				</div>
			)}
			{clients.length > 0 && <ClientTable clients={clients} />}
		</>
	);
}
