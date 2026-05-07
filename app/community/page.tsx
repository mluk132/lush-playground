'use client'

import Link from 'next/link'
import { PaintBrushIcon, UserGroupIcon, HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'

export default function CommunityPage() {
  const posts = [
    { id: 1, artist: 'Sarah Artist', title: 'My latest character design', likes: 450, comments: 32, image: '🎨', time: '2h ago' },
    { id: 2, artist: 'Mike Creative', title: 'Landscape study', likes: 320, comments: 18, image: '🌄', time: '5h ago' },
    { id: 3, artist: 'Emma Illustrator', title: 'Abstract exploration', likes: 680, comments: 45, image: '✨', time: '1d ago' },
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
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <UserGroupIcon className="h-10 w-10 text-pink-600" />
            <div>
              <h1 className="text-4xl font-bold">Artist Community</h1>
              <p className="text-gray-600">Share, discover, and connect with fellow artists</p>
            </div>
          </div>

          <div className="space-y-6">
            {posts.map(post => (
              <div key={post.id} className="card p-6 hover-lift cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{post.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold">{post.artist}</span>
                      <span className="text-gray-400">·</span>
                      <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <div className="h-64 bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg mb-4"></div>
                    <div className="flex items-center gap-6 text-gray-600">
                      <button className="flex items-center gap-2 hover:text-pink-600 transition-colors">
                        <HeartIcon className="h-5 w-5" />
                        {post.likes}
                      </button>
                      <button className="flex items-center gap-2 hover:text-pink-600 transition-colors">
                        <ChatBubbleLeftIcon className="h-5 w-5" />
                        {post.comments}
                      </button>
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
