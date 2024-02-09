import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchAllClubs, removeClub } from '../../../api/clubs';
import { useClub } from '../../../hooks/useClub';

export function Clubs() {
	const navigate = useNavigate();
	const { clubs, error, loading } = useClub();
	const dispatch = useAppDispatch();

	const handleEditClick = (id: number) => () => {
		navigate(`/clubs/${id}/update`);
	};
	const handleAllClientClick = (clubId: number) => () => {
		navigate(`/clubs/${clubId}/clients`);
	};
	const handleRemove = (id: number) => async () => {
		await dispatch(removeClub(id.toString())).unwrap();
		dispatch(fetchAllClubs());
	};

	return (
		<div className="flex flex-col gap-4">
			{loading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			{clubs.length === 0 && (
				<div className="h-full flex justify-center items-center">
					<h1>Not Clubs</h1>
				</div>
			)}
			{clubs.length > 0 && (
				<div className="flex border border-[#CAD0D8] rounded-md py-1">
					<table className="flex flex-col w-full">
						<thead className="flex border-b border-[#CAD0D8]">
							<tr className="w-full flex justify-around">
								<th>Name</th>
								<th>Description</th>
								<th>Address</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody className="w-full">
							{clubs.map((club) => (
								<tr className="flex h-10" key={club.id}>
									<td className="w-1/3 border-t border-x border-[#CAD0D8]">{club.name}</td>
									<td className="w-1/3 border-t border-x border-[#CAD0D8]">{club.description}</td>
									<td className="w-1/3 border-t border-x border-[#CAD0D8]">{club.address}</td>
									<td>
										<button type="button" className="button-style relative bg-[#0C42FC] w-10" onClick={handleEditClick(club.id as number)}>
											Edit
										</button>
									</td>
									<td>
										<button type="button" className="button-style relative bg-[#0C42FC] w-10" onClick={handleRemove(club.id as number)}>
											Remove
										</button>
									</td>
									<td>
										<button type="button" className="button-style relative bg-[#0C42FC] w-10" onClick={handleAllClientClick(club.id as number)}>
											All
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
