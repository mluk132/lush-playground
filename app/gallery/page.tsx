'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PaintBrushIcon, HeartIcon, ChatBubbleLeftIcon, EyeIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

export default function GalleryPage() {
  const [filter, setFilter] = useState('trending')
  
  const artworks = [
    { id: 1, title: 'Sunset Dreams', artist: 'Sarah Chen', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500', likes: 1234, views: 5678, comments: 89, liked: false },
    { id: 2, title: 'Abstract Thoughts', artist: 'Mike Johnson', image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=500', likes: 2345, views: 8901, comments: 123, liked: true },
    { id: 3, title: 'Digital Nature', artist: 'Emma Wilson', image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=500', likes: 3456, views: 12345, comments: 234, liked: false },
    { id: 4, title: 'Neon City', artist: 'David Kim', image: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=500', likes: 4567, views: 15678, comments: 345, liked: false },
    { id: 5, title: 'Cosmic Journey', artist: 'Lisa Park', image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500', likes: 5678, views: 20123, comments: 456, liked: true },
    { id: 6, title: 'Watercolor Magic', artist: 'Tom Brown', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500', likes: 6789, views: 25456, comments: 567, liked: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <PaintBrushIcon className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Finder
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/canvas" className="text-gray-700 hover:text-pink-600 transition-colors">Canvas</Link>
              <Link href="/gallery" className="text-pink-600 font-semibold">Gallery</Link>
              <Link href="/challenges" className="text-gray-700 hover:text-pink-600 transition-colors">Challenges</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Gallery Explorer</h1>
            <p className="text-gray-600 text-lg">Discover amazing artwork from creators worldwide</p>
          </div>

          <div className="mb-8 flex gap-2 flex-wrap">
            {['trending', 'recent', 'popular', 'following'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f ? 'bg-pink-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {artworks.map((art) => (
              <div key={art.id} className="break-inside-avoid card overflow-hidden hover-lift animate-fade-in">
                <div className="relative group cursor-pointer">
                  <img src={art.image} alt={art.title} className="w-full" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{art.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">by {art.artist}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        {art.liked ? <HeartSolidIcon className="h-5 w-5 text-red-500" /> : <HeartIcon className="h-5 w-5" />}
                        {art.likes}
                      </span>
                      <span className="flex items-center gap-1"><EyeIcon className="h-5 w-5" /> {art.views}</span>
                      <span className="flex items-center gap-1"><ChatBubbleLeftIcon className="h-5 w-5" /> {art.comments}</span>
                    </div>
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
