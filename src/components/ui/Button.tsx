import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
	{
		variants: {
			variant: {
				primary:
					'bg-rose-600 text-white shadow-lg hover:bg-rose-700 hover:-translate-y-0.5 hover:shadow-xl',
				secondary:
					'border-2 border-sage-300 text-sage-700 hover:border-sage-400 hover:text-sage-800',
				outline:
					'border-2 border-rose-300 text-rose-700 hover:bg-rose-50 hover:border-rose-400',
				ghost: 'text-gray-700 hover:bg-gray-100',
			},
			size: {
				sm: 'px-4 py-2 text-sm',
				md: 'px-6 py-3 text-base',
				lg: 'px-8 py-4 text-lg',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	},
)

export interface ButtonProps
	extends ComponentProps<'button'>,
		VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		/>
	)
}
