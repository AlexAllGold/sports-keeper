import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { ColumnDef } from '@tanstack/table-core/src/types';
import { IClub } from '../../../models/IClub';
import BasicTable from './elements/BasicTable';

const columnHelper = createColumnHelper<IClub>();
const columns: ColumnDef<IClub, any>[] = [
	columnHelper.accessor((children) => children.name, {
		header: 'Club Name',
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor((children) => children.address, {
		header: 'Address Club',
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor((children) => children.description, {
		header: 'Description',
		cell: (info) => <span>{info.getValue()}</span>,
	}),
];

interface Props {
	clubs: IClub[];
}

function ClubTable({ clubs }: Props) {
	return <BasicTable data={clubs} columns={columns} />;
}

export default ClubTable;
