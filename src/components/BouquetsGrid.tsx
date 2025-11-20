import { Sparkles } from 'lucide-react'

import { Button } from './ui/Button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card'

// Données placeholder - à remplacer par API plus tard
const bouquets = [
	{
		id: 1,
		title: 'Éclat Printanier',
		description: 'Composition délicate de pivoines roses et eucalyptus',
		image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop',
		available: true,
		colors: ['Rose', 'Blanc', 'Vert'],
	},
	{
		id: 2,
		title: 'Jardin Sauvage',
		description: 'Mélange naturel de fleurs de saison et feuillages',
		image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=800&auto=format&fit=crop',
		available: true,
		colors: ['Rose', 'Violet', 'Blanc'],
	},
	{
		id: 3,
		title: 'Romance Intemporelle',
		description: 'Roses anciennes et renoncules dans un camaïeu de roses',
		image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
		available: false,
		colors: ['Rose', 'Pêche'],
	},
	{
		id: 4,
		title: 'Harmonie Pastel',
		description: 'Lisianthus, roses et gypsophile dans des tons doux',
		image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=800&auto=format&fit=crop',
		available: true,
		colors: ['Rose clair', 'Blanc', 'Crème'],
	},
	{
		id: 5,
		title: 'Bouquet Champêtre',
		description: 'Compositions rustique de fleurs des champs',
		image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop',
		available: true,
		colors: ['Jaune', 'Blanc', 'Vert'],
	},
	{
		id: 6,
		title: 'Élégance Florale',
		description: 'Orchidées et anthuriums pour une touche moderne',
		image: 'https://images.unsplash.com/photo-1535437278004-3e0ae3c55ec5?q=80&w=800&auto=format&fit=crop',
		available: true,
		colors: ['Rose', 'Blanc'],
	},
]

export function BouquetsGrid() {
	return (
		<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{bouquets.map((bouquet) => (
				<Card key={bouquet.id} variant="bouquet">
					{/* Image */}
					<div className="relative -m-6 mb-0 overflow-hidden">
						<img
							src={bouquet.image}
							alt={bouquet.title}
							className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
						/>
						{/* Badge disponibilité */}
						<div className="absolute right-3 top-3">
							{bouquet.available ? (
								<span className="flex items-center gap-1 rounded-full bg-sage-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
									<Sparkles className="h-3 w-3" />
									Disponible
								</span>
							) : (
								<span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-white shadow-lg">
									Vendu
								</span>
							)}
						</div>
					</div>

					<CardHeader className="pt-6">
						<CardTitle>{bouquet.title}</CardTitle>
						<CardDescription>{bouquet.description}</CardDescription>
					</CardHeader>

					<CardContent>
						{/* Couleurs */}
						<div className="flex flex-wrap gap-2">
							{bouquet.colors.map((color) => (
								<span
									key={color}
									className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700"
								>
									{color}
								</span>
							))}
						</div>

						{/* Message unicité */}
						<p className="mt-4 text-xs italic text-gray-500">
							{bouquet.available
								? "✨ Création unique - Ne sera jamais reproduit à l'identique"
								: '💫 Ce bouquet unique a trouvé son destinataire'}
						</p>
					</CardContent>

					<CardFooter>
						{bouquet.available ? (
							<Button className="w-full" variant="outline">
								Demander un devis
							</Button>
						) : (
							<Button className="w-full" variant="ghost" disabled>
								Plus disponible
							</Button>
						)}
					</CardFooter>
				</Card>
			))}
		</div>
	)
}
