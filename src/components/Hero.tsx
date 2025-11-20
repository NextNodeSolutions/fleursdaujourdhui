import { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

import { Button } from './ui/Button'

export function Hero() {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

	return (
		<div ref={ref} className="relative h-screen w-full overflow-hidden">
			{/* Parallax Background */}
			<motion.div
				style={{ y }}
				className="absolute inset-0 -z-10"
			>
				<div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 to-cream-50" />
				<img
					src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop"
					alt="Bouquet de fleurs artisanal"
					className="h-full w-full object-cover opacity-40"
				/>
			</motion.div>

			{/* Content */}
			<motion.div
				style={{ opacity }}
				className="relative flex h-full flex-col items-center justify-center text-center"
			>
				<div className="container-padding mx-auto max-w-5xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="mb-6"
					>
						<span className="inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
							Fleuriste Artisan à Gonesse
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="font-serif text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl"
					>
						Des bouquets{' '}
						<span className="gradient-text">uniques</span>,<br />
						créés avec passion
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl"
					>
						Chaque composition florale est une création originale. Une fois vendu,
						votre bouquet ne sera jamais reproduit. L'art de la fleur, dans sa forme
						la plus authentique.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
					>
						<Button size="lg" onClick={() => document.getElementById('bouquets')?.scrollIntoView({ behavior: 'smooth' })}>
							Découvrir nos créations
						</Button>
						<Button variant="outline" size="lg">
							Nous contacter
						</Button>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1.5 }}
					className="absolute bottom-8 left-1/2 -translate-x-1/2"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
						className="flex flex-col items-center gap-2 text-gray-500"
					>
						<span className="text-sm">Découvrir</span>
						<ArrowDown className="h-5 w-5" />
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	)
}
