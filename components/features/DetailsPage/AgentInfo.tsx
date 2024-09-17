// components/features/DetailsPage/AgentInfo.tsx
import React from 'react'

interface AgentInfoProps {
  name: string
  email: string
}

const AgentInfo: React.FC<AgentInfoProps> = ({ name, email }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <div className="flex items-center">
        <img
          src="/images/user_profile.png"
          alt="Agent Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  )
}

export default AgentInfo