import { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextType {
    isLoggedIn: boolean
    userAvatar: string | null
    accessToken: string | null
    login: (token: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userAvatar, setUserAvatar] = useState<string | null>(null)
    const [accessToken, setAccessToken] = useState<string | null>(null)

    const login = (token: string) => {
        setIsLoggedIn(true)
        setAccessToken(token)
    }

    const logout = () => {
        setIsLoggedIn(false)
        setUserAvatar(null)
        setAccessToken(null)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, userAvatar, accessToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}