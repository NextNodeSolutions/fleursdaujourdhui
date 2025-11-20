import { Instagram } from 'lucide-react'

const instagramPosts = [
	{
		id: 1,
		image: 'https://images.unsplash.com/photo-1503652601-557d07733ddc?q=80&w=600&auto=format&fit=crop',
	},
	{
		id: 2,
		image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?q=80&w=600&auto=format&fit=crop',
	},
	{
		id: 3,
		image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=600&auto=format&fit=crop',
	},
	{
		id: 4,
		image: 'https://images.unsplash.com/photo-1502307664-6e36a6a1335a?q=80&w=600&auto=format&fit=crop',
	},
	{
		id: 5,
		image: 'https://images.unsplash.com/photo-1488825497257-c61903f9c8b7?q=80&w=600&auto=format&fit=crop',
	},
	{
		id: 6,
		image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?q=80&w=600&auto=format&fit=crop',
	},
	{
		id: 7,
		image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=600&auto=format&fit=crop',
	},
	{
		id: 8,
		image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop',
	},
]

export function InstagramFeed() {
	return (
		<div className="space-y-12">
			<div className="text-center">
				<h2 className="section-title">Suivez notre quotidien fleuri</h2>
				<p className="section-subtitle">
					Découvrez nos créations au fil des saisons sur Instagram
				</p>
			</div>

			<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
				{instagramPosts.map((post, index) => (
					<div
						key={post.id}
						className="group relative aspect-square overflow-hidden rounded-lg"
					>
						<img
							src={post.image}
							alt={`Création florale ${index + 1}`}
							className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-rose-900/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							<Instagram className="h-8 w-8 text-white" />
						</div>
					</div>
				))}
			</div>

			<div className="text-center">
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 rounded-lg border-2 border-rose-300 px-8 py-4 text-lg font-medium text-rose-700 transition-all duration-200 hover:border-rose-400 hover:bg-rose-50"
				>
					<Instagram className="h-5 w-5" />
					Voir notre Instagram
				</a>
			</div>
		</div>
	)
}
