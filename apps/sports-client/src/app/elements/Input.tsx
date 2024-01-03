import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, ...props }, ref) => (
		<input
			{...props}
			type="text"
			placeholder={placeholder}
			className='Input-style pl-2'
			ref={ref}
		/>
	));
