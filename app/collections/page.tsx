'use client'

import Link from 'next/link'
import { PaintBrushIcon, FolderIcon } from '@heroicons/react/24/outline'

export default function CollectionsPage() {
  const collections = [
    { id: 1, name: 'Character Studies', artworks: 24, icon: '👥', color: 'from-blue-500 to-cyan-500' },
    { id: 2, name: 'Landscapes', artworks: 18, icon: '🏔️', color: 'from-green-500 to-teal-500' },
    { id: 3, name: 'Abstract Art', artworks: 32, icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { id: 4, name: 'Portraits', artworks: 15, icon: '🖼️', color: 'from-orange-500 to-red-500' },
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
            <FolderIcon className="h-10 w-10 text-pink-600" />
            <div>
              <h1 className="text-4xl font-bold">Art Collections</h1>
              <p className="text-gray-600">Organize your artwork into collections</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map(collection => (
              <div key={collection.id} className="card p-6 hover-lift cursor-pointer">
                <div className={`w-full h-32 rounded-lg bg-gradient-to-br ${collection.color} flex items-center justify-center text-5xl mb-4`}>
                  {collection.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
                <p className="text-gray-600">{collection.artworks} artworks</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
