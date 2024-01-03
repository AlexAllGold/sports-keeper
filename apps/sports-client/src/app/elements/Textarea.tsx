import React, { forwardRef, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	placeholder: string
	[key: string]: any
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ placeholder, value }, ref) => (
	<textarea
		value={value}
		placeholder={placeholder}
		className='Input-style pl-2'
		ref={ref}
	/>
));
