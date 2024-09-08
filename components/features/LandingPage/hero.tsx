import Image from 'next/image'

export default function Hero() {
    return (
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
                src="/images/house_interior.png"
                alt="Modern house with pool"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl font-bold mb-4">Find your place with Homes</h1>
                <p className="text-xl">
                    Search homes for sale and rent, see home values, and connect with local real estate agents
                </p>
            </div>
        </div>
    )
}