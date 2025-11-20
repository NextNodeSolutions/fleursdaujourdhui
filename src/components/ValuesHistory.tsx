import { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, Heart, Leaf, Sparkles } from 'lucide-react'

const values = [
	{
		icon: Heart,
		title: 'Passion',
		description: 'Chaque bouquet est créé avec amour et dévouement. Notre passion pour l\'art floral transparaît dans chaque composition.',
	},
	{
		icon: Sparkles,
		title: 'Authenticité',
		description: 'Nous valorisons l\'unique et le fait-main. Pas de production de masse, seulement des créations originales et personnalisées.',
	},
	{
		icon: Leaf,
		title: 'Sur-mesure',
		description: 'Votre bouquet est pensé pour vous, selon vos goûts et l\'occasion. Une création qui vous ressemble, vraiment.',
	},
]

const timeline = [
	{
		year: '2010',
		title: 'Les débuts',
		description: 'Ouverture de notre première boutique à Gonesse, avec une vision simple : créer des bouquets uniques qui ne seront jamais reproduits.',
	},
	{
		year: '2015',
		title: 'Reconnaissance',
		description: 'Nos créations artisanales séduisent de plus en plus de clients. Nous développons notre activité événementielle et mariages.',
	},
	{
		year: '2020',
		title: 'Innovation',
		description: 'Lancement de nos formules d\'abonnement et expansion de nos services pour répondre aux besoins de nos clients fidèles.',
	},
	{
		year: 'Aujourd\'hui',
		title: 'Excellence',
		description: 'Une équipe passionnée, des milliers de créations uniques, et toujours la même philosophie : l\'art floral dans sa forme la plus authentique.',
	},
]

export function ValuesHistory() {
	const parallaxRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: parallaxRef,
		offset: ['start end', 'end start'],
	})

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
	const image1Y = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
	const image2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
	const image3Y = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
	const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '80%'])
	const cardsY = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.4])

	return (
		<div className="relative">
			{/* Section Parallax - Nos Valeurs + Notre Histoire */}
			<div
				ref={parallaxRef}
				className="relative min-h-[200vh] overflow-hidden bg-gradient-to-b from-cream-50 via-rose-50/30 to-white"
			>
				{/* Image de fond avec parallax subtil */}
				<motion.div
					style={{ y: backgroundY }}
					className="absolute inset-0 -z-10"
				>
					<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-cream-50/50 to-white z-10" />
					<img
						src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=2070&auto=format&fit=crop"
						alt="Atelier floral"
						className="h-[120%] w-full object-cover opacity-20"
					/>
				</motion.div>

				{/* Images flottantes en parallax */}
				<motion.div
					style={{ y: image1Y, opacity }}
					className="absolute top-40 right-10 w-64 h-80 hidden lg:block"
				>
					<img
						src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop"
						alt="Bouquet"
						className="w-full h-full object-cover rounded-3xl shadow-2xl"
					/>
				</motion.div>

				<motion.div
					style={{ y: image2Y, opacity }}
					className="absolute top-[60%] left-10 w-72 h-72 hidden lg:block"
				>
					<img
						src="https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop"
						alt="Roses"
						className="w-full h-full object-cover rounded-3xl shadow-2xl"
					/>
				</motion.div>

				<motion.div
					style={{ y: image3Y, opacity }}
					className="absolute top-[30%] right-[15%] w-56 h-64 hidden xl:block"
				>
					<img
						src="https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=800&auto=format&fit=crop"
						alt="Atelier"
						className="w-full h-full object-cover rounded-3xl shadow-2xl"
					/>
				</motion.div>

				{/* Contenu principal */}
				<div className="relative">
					{/* Titre avec parallax fort */}
					<div className="sticky top-0 pt-32 pb-20">
						<motion.div
							style={{ y: titleY }}
							className="container-padding mx-auto max-w-7xl text-center"
						>
							<span className="inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 mb-6">
								Nos Valeurs
							</span>
							<h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
								L'artisanat floral<br />
								dans toute sa <span className="gradient-text">splendeur</span>
							</h2>
							<p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
								Des valeurs qui guident chaque création et font notre identité
							</p>
						</motion.div>
					</div>

					{/* Cards des valeurs avec parallax */}
					<motion.div
						style={{ y: cardsY }}
						className="container-padding mx-auto max-w-7xl pb-32"
					>
						<div className="grid gap-8 md:grid-cols-3">
							{values.map((value, index) => (
								<motion.div
									key={value.title}
									initial={{ opacity: 0, y: 60 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: '-100px' }}
									transition={{ duration: 0.8, delay: index * 0.2 }}
									className="group"
								>
									<div className="relative h-full rounded-3xl border border-rose-100 bg-white/80 backdrop-blur-sm p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-rose-200">
										<div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
											<value.icon className="h-10 w-10 text-rose-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
										</div>
										<h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
											{value.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">
											{value.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>

						{/* Citation */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="mt-24 mx-auto max-w-4xl"
						>
							<blockquote className="relative rounded-3xl border-2 border-rose-200 bg-white/90 backdrop-blur-sm px-10 py-8 shadow-2xl">
								<div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white text-4xl font-serif shadow-lg">
									"
								</div>
								<p className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed">
									Un bouquet ne se reproduit jamais. Comme un instant précieux, il est unique et éphémère. C'est toute la beauté de notre métier.
								</p>
								<footer className="mt-6 text-right text-sm not-italic text-gray-600 font-medium">
									— L'équipe Fleurs d'Aujourd'hui
								</footer>
							</blockquote>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Section Notre Histoire - Fond sombre avec image parallax */}
			<div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
				<div
					className="absolute inset-0 -z-10"
				>
					<div className="absolute inset-0 bg-black/60 z-10" />
					<img
						src="https://images.unsplash.com/photo-1525908332953-4f1d9a9db090?q=80&w=2070&auto=format&fit=crop"
						alt="Histoire"
						className="h-full w-full object-cover"
					/>
				</div>

				<div className="container-padding section-padding relative mx-auto max-w-7xl">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className="text-center mb-20"
					>
						<span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-6">
							Notre Histoire
						</span>
						<h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
							Une passion qui grandit<br />depuis 2010
						</h2>
						<p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
							Plus de 10 ans à créer des moments uniques avec des fleurs
						</p>
					</motion.div>

					{/* Timeline */}
					<div className="relative max-w-6xl mx-auto">
						<div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 -translate-x-1/2 hidden md:block" />

						<div className="space-y-16 md:space-y-32">
							{timeline.map((item, index) => {
								const isEven = index % 2 === 0
								return (
									<motion.div
										key={item.year}
										initial={{ opacity: 0, y: 60 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, margin: '-150px' }}
										transition={{ duration: 0.8, delay: index * 0.15 }}
										className="relative"
									>
										<div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
											<div className={`flex-1 ${isEven ? 'md:text-right' : ''}`}>
												<div className="relative rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur-md p-10 shadow-2xl transition-all duration-500 hover:bg-white/15 hover:scale-105">
													<div className="mb-6">
														<span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-base font-bold text-rose-600 shadow-lg">
															<Calendar className="h-5 w-5" />
															{item.year}
														</span>
													</div>
													<h3 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
														{item.title}
													</h3>
													<p className="text-white/90 text-lg md:text-xl leading-relaxed">
														{item.description}
													</p>
												</div>
											</div>

											<div className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl z-10 flex-shrink-0">
												<div className="h-5 w-5 rounded-full bg-rose-500" />
											</div>

											<div className="flex-1 hidden md:block" />
										</div>
									</motion.div>
								)
							})}
						</div>
					</div>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className="mt-32 text-center"
					>
						<div className="rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur-md px-10 py-16 shadow-2xl">
							<h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
								Prêt à créer votre bouquet unique ?
							</h3>
							<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
								Chaque création est une œuvre d'art éphémère. Contactez-nous pour donner vie à votre vision florale.
							</p>
							<a
								href="/contact"
								className="inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-xl font-medium text-rose-600 shadow-2xl transition-all duration-300 hover:shadow-white/20 hover:scale-105"
							>
								Nous contacter
								<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
								</svg>
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
