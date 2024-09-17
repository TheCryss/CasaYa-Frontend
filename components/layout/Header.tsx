import { User, LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useAuth } from '../../contexts/AuthContext'

export default function Header() {
  const { isLoggedIn, userAvatar, logout } = useAuth()

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-bold">
          🏠 Real Estate
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="w-6 h-6" />
            </button>
            {userAvatar && (
              <Image
                src={userAvatar}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Sign out"
              onClick={logout}
            >
              <LogOut className="w-6 h-6" />
            </button>
          </>
        ) : (
          <>
            <Button variant="outline">Log in</Button>
            <Button>Sign up</Button>
          </>
        )}
      </div>
    </header>
  )
}