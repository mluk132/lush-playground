'use client'

import Link from 'next/link'
import { PaintBrushIcon, StarIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function ShowcasePage() {
  const featured = [
    { id: 1, title: 'Cyberpunk Dreams', artist: 'Sarah Digital', views: 45000, likes: 3200, icon: '🌃' },
    { id: 2, title: 'Nature Spirit', artist: 'Mike Nature', views: 38000, likes: 2800, icon: '🌿' },
    { id: 3, title: 'Abstract Emotions', artist: 'Emma Abstract', views: 52000, likes: 4100, icon: '🎨' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <PaintBrushIcon className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Lush Playground</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <StarIcon className="h-10 w-10 text-yellow-600" />
            <div>
              <h1 className="text-4xl font-bold">Featured Showcase</h1>
              <p className="text-gray-600">Handpicked masterpieces from our community</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map(art => (
              <div key={art.id} className="card overflow-hidden hover-lift cursor-pointer">
                <div className="h-64 bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center text-8xl">
                  {art.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{art.title}</h3>
                  <p className="text-gray-600 mb-4">by {art.artist}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <EyeIcon className="h-4 w-4" />
                      {art.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <HeartIcon className="h-4 w-4" />
                      {art.likes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
