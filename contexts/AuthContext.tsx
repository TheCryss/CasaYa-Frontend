"use client"

import React, { createContext, useContext, useState } from 'react'

interface AuthContextType {
  isLoggedIn: boolean;
  userAvatar: string | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userAvatar, setUserAvatar] = useState<string | null>(null)

  const login = () => {
    setIsLoggedIn(true)
    setUserAvatar("/placeholder.svg?height=40&width=40")
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserAvatar(null)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, userAvatar, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}