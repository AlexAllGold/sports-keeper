import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchAllClients, removeClient } from '../../../api/clients';
import { dateFormat } from '../../../utils/dayjs';

export function Clients() {
	const navigate = useNavigate();
	const { clubId } = useParams();
	const dispatch = useAppDispatch();
	const { clients, error, loading } = useAppSelector((state) => state.client);

	useEffect(() => {
		dispatch(fetchAllClients(clubId));
	}, [dispatch, clubId]);

	const handleEditClick = (id: number | undefined) => () => {
		navigate(`${id}/update`);
	};
	const handleAllClientClick = (id: number | undefined) => () => {
		navigate(`/clubs/${clubId}/clients/${id}`);
	};
	const handleRemove = (id: number | undefined) => async () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		await dispatch(removeClient({ clubId, id })).unwrap();
		dispatch(fetchAllClients(clubId));
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-4">
				<div className="flex-col">
					{loading && <h1>Loading...</h1>}
					{error && <h1>{error}</h1>}
					{clients.length === 0 && (
						<div className="h-full flex justify-center items-center">
							<h1>Not Clients</h1>
						</div>
					)}
					{clients.length > 0 && (
						<div className="flex border border-[#CAD0D8] rounded-md py-1">
							<table className="flex flex-col w-full">
								<thead className="flex border-b border-[#CAD0D8]">
									<tr className="w-full flex justify-around">
										<th>First Name</th>
										<th>Last Name</th>
										<th>Email</th>
										<th>Club Id</th>
										<th>Birth</th>
									</tr>
								</thead>
								<tbody className="w-full">
									{clients.map((client) => (
										<tr className="flex h-10" key={client.id}>
											<td className="w-1/6 border-t border-x border-[#CAD0D8]">{client.firstName}</td>
											<td className="w-1/6 border-t border-x border-[#CAD0D8]">{client.lastName}</td>
											<td className="w-1/6 border-t border-x border-[#CAD0D8]">{client.email}</td>
											<td className="w-1/6 border-t border-x border-[#CAD0D8]">{client.clubId}</td>
											<td className="w-1/6 border-t border-x border-[#CAD0D8]">{dateFormat(client.dateOfBirth)}</td>
											<td>
												<button type="button" className="button-style relative bg-[#0C42FC] w-10" onClick={handleEditClick(client.id)}>
													Edit
												</button>
											</td>
											<td>
												<button type="button" className="button-style relative bg-[#0C42FC] w-10" onClick={handleRemove(client.id)}>
													Remove
												</button>
											</td>
											<td>
												<button type="button" className="button-style relative bg-[#0C42FC] w-10" onClick={handleAllClientClick(client.id)}>
													About
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
