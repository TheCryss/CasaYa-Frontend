import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">📊 Homes</span>
                </Link>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-3 py-2 border rounded-md"
                    />
                    <button className="p-2 rounded-full bg-gray-200">
                        <span className="sr-only">Settings</span>
                        ⚙️
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                </div>
            </div>
        </header>
    )
}