import Image from 'next/image'

export default function HeroImage() {
    return (
        <div className="relative h-48">
            <Image
                src="/images/house_interior.png"
                alt="Modern house with pool"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
                <p className="text-sm">Continue your search, view and save your favorite listings</p>
            </div>
        </div>
    )
}