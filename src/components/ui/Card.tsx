import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export interface CardProps extends ComponentProps<'div'> {
	variant?: 'default' | 'bouquet'
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
	return (
		<div
			className={cn(
				'rounded-xl border bg-white p-6 shadow-sm transition-all duration-200',
				variant === 'default' && 'border-rose-100 hover:shadow-md hover:border-rose-200',
				variant === 'bouquet' && 'group border-rose-100 overflow-hidden hover:shadow-lg hover:border-rose-300',
				className
			)}
			{...props}
		/>
	)
}

export function CardHeader({ className, ...props }: ComponentProps<'div'>) {
	return <div className={cn('space-y-1.5', className)} {...props} />
}

export function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
	return (
		<h3
			className={cn('font-serif text-2xl font-semibold leading-none tracking-tight', className)}
			{...props}
		/>
	)
}

export function CardDescription({ className, ...props }: ComponentProps<'p'>) {
	return <p className={cn('text-sm text-gray-600', className)} {...props} />
}

export function CardContent({ className, ...props }: ComponentProps<'div'>) {
	return <div className={cn('pt-4', className)} {...props} />
}

export function CardFooter({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div className={cn('flex items-center pt-4', className)} {...props} />
	)
}
