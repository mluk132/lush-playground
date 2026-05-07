'use client'

import Link from 'next/link'
import { PaintBrushIcon, TrophyIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function ChallengesPage() {
  const challenges = [
    { id: 1, title: 'Abstract Emotions', description: 'Create an abstract piece that represents a specific emotion', deadline: '3 days left', participants: 1234, prize: '$500', difficulty: 'Medium' },
    { id: 2, title: 'Nature Reimagined', description: 'Draw nature elements with a futuristic twist', deadline: '5 days left', participants: 2345, prize: '$750', difficulty: 'Hard' },
    { id: 3, title: 'Minimalist Portrait', description: 'Create a portrait using only 5 colors', deadline: '1 week left', participants: 3456, prize: '$300', difficulty: 'Easy' },
  ]

  const leaderboard = [
    { rank: 1, name: 'Sarah Chen', score: 9850, avatar: 'https://i.pravatar.cc/150?img=1' },
    { rank: 2, name: 'Mike Johnson', score: 9720, avatar: 'https://i.pravatar.cc/150?img=12' },
    { rank: 3, name: 'Emma Wilson', score: 9650, avatar: 'https://i.pravatar.cc/150?img=5' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <PaintBrushIcon className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Lush Playground
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/canvas" className="text-gray-700 hover:text-pink-600 transition-colors">Canvas</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-pink-600 transition-colors">Gallery</Link>
              <Link href="/challenges" className="text-pink-600 font-semibold">Challenges</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Challenge Hub</h1>
            <p className="text-gray-600 text-lg">Compete, create, and win amazing prizes</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="card p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{challenge.title}</h3>
                      <p className="text-gray-600 mb-4">{challenge.description}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-1"><ClockIcon className="h-5 w-5" /> {challenge.deadline}</span>
                        <span className="flex items-center gap-1"><UserGroupIcon className="h-5 w-5" /> {challenge.participants} participants</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                          challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>{challenge.difficulty}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-pink-600 mb-2">{challenge.prize}</div>
                      <button className="btn btn-primary bg-gradient-to-r from-pink-600 to-orange-600">Join Challenge</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrophyIcon className="h-6 w-6 text-yellow-500" />
                  Leaderboard
                </h3>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div key={user.rank} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        user.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                        user.rank === 2 ? 'bg-gray-100 text-gray-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {user.rank}
                      </div>
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                      <div className="flex-1">
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-sm text-gray-600">{user.score} points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6 bg-gradient-to-br from-pink-600 to-orange-600 text-white">
                <h3 className="text-xl font-bold mb-4">Your Stats</h3>
                <div className="space-y-3">
                  <div><div className="text-3xl font-bold">12</div><div className="text-pink-100 text-sm">Challenges Won</div></div>
                  <div><div className="text-3xl font-bold">45</div><div className="text-pink-100 text-sm">Total Submissions</div></div>
                  <div><div className="text-3xl font-bold">8,450</div><div className="text-pink-100 text-sm">Total Points</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
