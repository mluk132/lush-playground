'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  PaintBrushIcon,
  UserCircleIcon,
  HeartIcon,
  EyeIcon,
  TrophyIcon,
  Cog6ToothIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'

export default function ProfilePage() {
  const [user] = useState({
    name: 'Sarah Artist',
    email: 'sarah@example.com',
    joinedDate: 'January 2026',
    bio: 'Digital artist specializing in character design and vibrant illustrations. Always exploring new styles!',
    avatar: '🎨'
  })

  const [stats] = useState({
    artworks: 87,
    views: 45000,
    likes: 12500,
    followers: 3200
  })

  const [recentArt] = useState([
    { id: 1, title: 'Sunset Dreams', views: 2500, likes: 450, image: '🌅' },
    { id: 2, title: 'Character Study #12', views: 1800, likes: 320, image: '👤' },
    { id: 3, title: 'Abstract Vibes', views: 3200, likes: 680, image: '🎨' },
    { id: 4, title: 'Nature Spirit', views: 2100, likes: 520, image: '🌿' },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <PaintBrushIcon className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Lush Playground
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/canvas" className="text-gray-700 hover:text-pink-600 transition-colors">Canvas</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-pink-600 transition-colors">Gallery</Link>
              <Link href="/profile" className="text-pink-600 font-medium">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          {/* Profile Header */}
          <div className="card p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-6xl">
                  {user.avatar}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                    <p className="text-gray-600 mb-1">{user.email}</p>
                    <p className="text-sm text-gray-500">Joined {user.joinedDate}</p>
                  </div>
                  <Link href="/settings" className="btn btn-secondary">
                    <Cog6ToothIcon className="h-5 w-5 mr-2" />
                    Settings
                  </Link>
                </div>
                <p className="text-gray-700 mb-6">{user.bio}</p>
                <div className="flex gap-4">
                  <Link href="/canvas" className="btn btn-primary bg-gradient-to-r from-pink-600 to-orange-600">
                    <PaintBrushIcon className="h-5 w-5 mr-2" />
                    Create Art
                  </Link>
                  <button className="btn btn-secondary">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Artworks</span>
                <PhotoIcon className="h-5 w-5 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-pink-600">{stats.artworks}</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Total Views</span>
                <EyeIcon className="h-5 w-5 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600">{stats.views.toLocaleString()}</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Likes</span>
                <HeartIcon className="h-5 w-5 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-pink-600">{stats.likes.toLocaleString()}</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Followers</span>
                <UserCircleIcon className="h-5 w-5 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600">{stats.followers.toLocaleString()}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Gallery */}
            <div className="md:col-span-2">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">My Gallery</h2>
                  <Link href="/gallery" className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                    View All →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {recentArt.map(art => (
                    <div key={art.id} className="card p-4 hover-lift cursor-pointer">
                      <div className="w-full h-40 bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg flex items-center justify-center text-6xl mb-3">
                        {art.image}
                      </div>
                      <h3 className="font-semibold mb-2">{art.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <EyeIcon className="h-4 w-4" />
                          {art.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <HeartIcon className="h-4 w-4" />
                          {art.likes}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="card p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link href="/canvas" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <PaintBrushIcon className="h-5 w-5 text-pink-600" />
                      <span className="font-medium">New Canvas</span>
                    </div>
                  </Link>
                  <Link href="/challenges" className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <TrophyIcon className="h-5 w-5 text-orange-600" />
                      <span className="font-medium">Challenges</span>
                    </div>
                  </Link>
                  <Link href="/community" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <UserCircleIcon className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Community</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-bold mb-4">Achievements</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                      🏆
                    </div>
                    <div>
                      <div className="font-medium">Master Artist</div>
                      <div className="text-sm text-gray-600">50+ artworks</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-xl">
                      ❤️
                    </div>
                    <div>
                      <div className="font-medium">Community Favorite</div>
                      <div className="text-sm text-gray-600">10K+ likes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">
                      🎨
                    </div>
                    <div>
                      <div className="font-medium">Challenge Winner</div>
                      <div className="text-sm text-gray-600">3 wins</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
