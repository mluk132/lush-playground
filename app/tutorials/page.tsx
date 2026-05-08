'use client'

import Link from 'next/link'
import { PaintBrushIcon, AcademicCapIcon, ClockIcon, PlayIcon } from '@heroicons/react/24/outline'

export default function TutorialsPage() {
  const tutorials = [
    { id: 1, title: 'Character Design Basics', duration: '45 min', level: 'Beginner', students: 12500, icon: '👤' },
    { id: 2, title: 'Digital Painting Techniques', duration: '1h 20min', level: 'Intermediate', students: 8900, icon: '🎨' },
    { id: 3, title: 'Advanced Lighting', duration: '2h', level: 'Advanced', students: 5400, icon: '💡' },
    { id: 4, title: 'Color Theory Masterclass', duration: '1h 30min', level: 'All Levels', students: 15200, icon: '🌈' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <PaintBrushIcon className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Finder</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-bold mb-4">Art Tutorials</h1>
            <p className="text-xl text-gray-600">Learn from professional artists and level up your skills</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tutorials.map(tutorial => (
              <div key={tutorial.id} className="card overflow-hidden hover-lift cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center text-6xl">
                  {tutorial.icon}
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-3">
                    {tutorial.level}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tutorial.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {tutorial.duration}
                    </span>
                    <span>{tutorial.students.toLocaleString()} students</span>
                  </div>
                  <button className="btn btn-primary w-full">
                    <PlayIcon className="h-5 w-5 mr-2" />
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
