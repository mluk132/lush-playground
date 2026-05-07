'use client'

import Link from 'next/link'
import { PaintBrushIcon, SwatchIcon } from '@heroicons/react/24/outline'

export default function BrushesPage() {
  const brushes = [
    { id: 1, name: 'Soft Airbrush', category: 'Painting', downloads: 12500, icon: '🎨' },
    { id: 2, name: 'Ink Pen', category: 'Drawing', downloads: 8900, icon: '✒️' },
    { id: 3, name: 'Watercolor', category: 'Painting', downloads: 15200, icon: '💧' },
    { id: 4, name: 'Charcoal', category: 'Sketching', downloads: 6700, icon: '⚫' },
    { id: 5, name: 'Oil Paint', category: 'Painting', downloads: 9800, icon: '🖌️' },
    { id: 6, name: 'Marker', category: 'Drawing', downloads: 7400, icon: '🖍️' },
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
            <SwatchIcon className="h-10 w-10 text-pink-600" />
            <div>
              <h1 className="text-4xl font-bold">Brush Library</h1>
              <p className="text-gray-600">Professional brushes for every style</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {brushes.map(brush => (
              <div key={brush.id} className="card p-6 hover-lift cursor-pointer">
                <div className="text-5xl mb-4">{brush.icon}</div>
                <h3 className="text-xl font-bold mb-2">{brush.name}</h3>
                <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm mb-3">
                  {brush.category}
                </div>
                <p className="text-sm text-gray-600 mb-4">{brush.downloads.toLocaleString()} downloads</p>
                <button className="btn btn-primary w-full">Download</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
