import Image from 'next/image'

const options = [
    { title: 'For sale', image: '/placeholder.svg?height=200&width=300' },
    { title: 'For rent', image: '/placeholder.svg?height=200&width=300' },
    { title: 'New construction', image: '/placeholder.svg?height=200&width=300' },
    { title: 'Coming soon', image: '/placeholder.svg?height=200&width=300' },
]

export default function ExploreOptions() {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Explore your options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {options.map((option, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                            src={option.image}
                            alt={option.title}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                            <span className="text-white font-semibold">{option.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}