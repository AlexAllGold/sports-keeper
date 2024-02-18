import React, { useState } from 'react';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { ColumnDef } from '@tanstack/table-core/src/types';
import { IClient } from '../../../../models/IClient';
import DebouncedInput from './DebouncedInput';
import { IClub } from '../../../../models/IClub';

type Props = {
	data: IClient[] | IClub[];
	columns: ColumnDef<IClient | IClub, any>[];
};

function BasicTable({ data, columns }: Props) {
	const [globalFilter, setGlobalFilter] = useState('');

	const table = useReactTable({
		data,
		columns,
		state: { globalFilter },
		getFilteredRowModel: getFilteredRowModel(),
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});
	return (
		<div className="w-full p-1 rounded-xl bg-[#EBEFFD]">
			<DebouncedInput value={globalFilter ?? ''} debounced={500} onChange={(value) => setGlobalFilter(String(value))} />
			<table className="w-full bg-[#EBEFFD]">
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id} className="capitalize px-3.5 py-2">
									{flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.length
						? table.getRowModel().rows.map((row, index) => (
								<tr key={row.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#EBEFFD]'}`}>
									{row.getVisibleCells().map((cell) => (
										<td key={cell.id} className="text-center px-3.5 py-2">
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									))}
								</tr>
						  ))
						: null}
				</tbody>
			</table>
			<div className="flex h-16 pr-2 items-center justify-end gap-1 border-t border-[#CAD0D8]">
				<button
					type="button"
					className="w-10 p-1 border border-[#CAD0D8] rounded-l-xl px-2 text-gray-400
					disabled:opacity-30 hover:bg-white hover:text-[#3F68FD]"
					onClick={() => {
						table.previousPage();
					}}
					disabled={!table.getCanPreviousPage()}
				>
					{'<'}
				</button>
				<button
					className="w-10 p-1 border border-[#CAD0D8] rounded-r-xl px-2 text-gray-400
					disabled:opacity-30 hover:bg-white hover:text-[#3F68FD]"
					type="button"
					onClick={() => {
						table.nextPage();
					}}
					disabled={!table.getCanNextPage()}
				>
					{'>'}
				</button>
				<span className="flex items-center gap-1">
					<div>Page</div>
					<strong className="pr-1">
						{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
					</strong>
				</span>
				<span className="flex items-center gap-1">
					| Go to page:
					<input
						className="border p-1 border-[#CAD0D8] outline-none w-16 rounded-l-xl bg-transparent text-center
						 hover:bg-white hover:text-[#3F68FD] focus:bg-white focus:text-[#3F68FD]"
						type="number"
						defaultValue={table.getState().pagination.pageIndex + 1}
						onChange={(e) => {
							const page = e.target.value ? Number(e.target.value) - 1 : 0;
							table.setPageIndex(page);
						}}
					/>
				</span>
				<select
					className="w-24 border p-1 border-[#CAD0D8] outline-none rounded-r-xl bg-transparent text-center
					 hover:bg-white hover:text-[#3F68FD]"
					value={table.getState().pagination.pageSize}
					onChange={(e) => {
						table.setPageSize(Number(e.target.value));
					}}
				>
					{[10, 20, 30, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default BasicTable;
