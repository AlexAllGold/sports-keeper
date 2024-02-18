import React, { useEffect, useState } from 'react';
import SearchIcon from './SearchIcon';

interface Props {
	value: string;
	debounced: number;
	onChange: (event: string) => void;
}
function DebouncedInput({ value: initialValue, onChange, debounced = 500 }: Props) {
	const [value, setValue] = useState(initialValue);
	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			onChange(value);
		}, debounced);
		return () => clearTimeout(timeOut);
	}, [value, onChange, debounced]);

	return (
		<div className="ml-2 w-full flex items-center gap-1">
			<SearchIcon />
			<input
				className="m-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-[#CAD0D8] focus:placeholder-[#3F68FD]"
				placeholder="Search all columns..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}

export default DebouncedInput;
