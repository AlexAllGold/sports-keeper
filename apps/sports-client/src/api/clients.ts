import axios from 'axios';

export const createClients = async (clubId : number, name: string, address: string , description: string)=> {
	try {
		const response = await axios.post('http://localhost:8000/api/clubs/:id/clients', {
			name,
			description,
			address,
		});
		return response.data;
	} catch (err) {
		return null;
	}
}
export const getClients = async (clubId : string)=> {
	try {
		const response = await axios.get(`http://localhost:8000/api/clubs/${clubId}/clients`);
		return response.data;
	} catch (err) {
		return null;
	}
}
