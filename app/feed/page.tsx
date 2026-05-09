'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  SparklesIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  BookmarkIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon, BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid'
import { api, ContentItem } from '@/lib/api'

export default function FeedPage() {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedType, setSelectedType] = useState<string>()

  useEffect(() => {
    loadContent()
  }, [selectedType])

  const loadContent = async () => {
    try {
      setLoading(true)
      const data = await api.getContent({ content_type: selectedType })
      setContent(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load content')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      loadContent()
      return
    }
    try {
      setLoading(true)
      const data = await api.getContent({ search: searchQuery, content_type: selectedType })
      setContent(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed')
    } finally {
      setLoading(false)
    }
  }

  const toggleSave = async (contentId: string) => {
    try {
      const item = content.find(c => c.id === contentId)
      if (item?.is_saved) {
        await api.unsaveContent(contentId)
      } else {
        await api.saveContent(contentId)
      }
      setContent(content.map(c => 
        c.id === contentId ? { ...c, is_saved: !c.is_saved } : c
      ))
    } catch (err) {
      console.error('Failed to toggle save:', err)
    }
  }

  const getContentTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'article': return 'bg-blue-100 text-blue-700'
      case 'video': return 'bg-red-100 text-red-700'
      case 'podcast': return 'bg-purple-100 text-purple-700'
      case 'course': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <PaintBrushIcon className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Finder
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/feed" className="text-orange-600 font-semibold">
                Feed
              </Link>
              <Link href="/create" className="text-gray-700 hover:text-orange-600 transition-colors">
                Create
              </Link>
              <Link href="/analytics" className="text-gray-700 hover:text-orange-600 transition-colors">
                Analytics
              </Link>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-600 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Discover Content</h1>
            <p className="text-gray-600 text-lg">Explore the latest hypermedia stories and articles</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filter Tags */}
          <div className="mb-8 flex gap-2 flex-wrap">
            {[
              { label: 'All', value: undefined },
              { label: 'Articles', value: 'article' },
              { label: 'Videos', value: 'video' },
              { label: 'Podcasts', value: 'podcast' },
              { label: 'Courses', value: 'course' }
            ].map((tag) => (
              <button
                key={tag.label}
                onClick={() => setSelectedType(tag.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === tag.value
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
              <p className="mt-4 text-gray-600">Loading content...</p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 mb-6">
              {error}
            </div>
          )}

          {/* Content Grid */}
          {!loading && !error && (
            <>
              {content.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">No content found.</p>
                  <Link href="/create" className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:shadow-lg transition-all">
                    Create Your First Content
                  </Link>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {content.map((item) => (
                    <div key={item.id} className="card overflow-hidden hover-lift animate-fade-in">
                      {/* Cover Image */}
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
                        {item.image_url ? (
                          <img 
                            src={item.image_url} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-6xl">
                            📄
                          </div>
                        )}
                        <div className="absolute top-4 right-4">
                          <button
                            onClick={() => toggleSave(item.id)}
                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                          >
                            {item.is_saved ? (
                              <BookmarkSolidIcon className="h-5 w-5 text-orange-600" />
                            ) : (
                              <BookmarkIcon className="h-5 w-5 text-gray-700" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`px-2 py-1 rounded text-xs ${getContentTypeColor(item.content_type)}`}>
                            {item.content_type}
                          </span>
                          {item.category && (
                            <span className="text-gray-500 text-sm">{item.category}</span>
                          )}
                          {item.reading_time_minutes && (
                            <span className="flex items-center gap-1 text-gray-500 text-sm">
                              <ClockIcon className="h-4 w-4" />
                              {item.reading_time_minutes} min
                            </span>
                          )}
                        </div>

                        {/* Title and Description */}
                        <h3 className="text-xl font-bold mb-2 hover:text-orange-600 cursor-pointer transition-colors">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {item.description}
                          </p>
                        )}

                        {/* Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex gap-2 mb-4 flex-wrap">
                            {item.tags.slice(0, 3).map((tag) => (
                              <span 
                                key={tag}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Author and Source */}
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            {item.author && <span>By {item.author}</span>}
                            {item.source && <span>{item.source}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
