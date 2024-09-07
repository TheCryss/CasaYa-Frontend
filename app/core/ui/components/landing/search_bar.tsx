export default function SearchBar() {
    return (
        <div className="mb-8">
            <input
                type="text"
                placeholder="Search homes, address, city, or neighborhood"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}