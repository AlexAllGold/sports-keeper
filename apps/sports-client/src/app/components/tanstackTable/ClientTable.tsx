import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { ColumnDef } from '@tanstack/table-core/src/types';
import { dateFormat } from '../../../utils/dayjs';
import { IClient } from '../../../models/IClient';
import BasicTable from './elements/BasicTable';

const columnHelper = createColumnHelper<IClient>();

interface Props {
	clients: IClient[];
}

export const columns: ColumnDef<IClient, any>[] = [
	columnHelper.accessor((children) => children.firstName, {
		header: 'First Name',
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor((children) => children.lastName, {
		header: 'Last Name',
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor((children) => children.email, {
		header: 'Email',
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor((children) => children.clubId, {
		header: 'Club ID',
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor((children) => children.dateOfBirth, {
		header: 'Date of Birthday',
		cell: (info) => <span>{dateFormat(info.getValue())}</span>,
	}),
];
function ClientTable({ clients }: Props) {
	return <BasicTable data={clients} columns={columns} />;
}

export default ClientTable;
