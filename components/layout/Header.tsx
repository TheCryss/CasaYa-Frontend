import { Bell, MessageCircle, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useAuth } from '../../contexts/AuthContext'

export default function Header() {
  const { isLoggedIn, userAvatar } = useAuth()

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
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Settings className="w-6 h-6" />
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