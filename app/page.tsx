'use client'

import Link from 'next/link'
import { 
  PaintBrushIcon,
  PhotoIcon,
  TrophyIcon,
  SparklesIcon,
  UserGroupIcon,
  SwatchIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <PaintBrushIcon className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Lush Playground
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/canvas" className="text-gray-700 hover:text-pink-600 transition-colors">
                Canvas
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-pink-600 transition-colors">
                Gallery
              </Link>
              <Link href="/challenges" className="text-gray-700 hover:text-pink-600 transition-colors">
                Challenges
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Login
              </Link>
              <Link href="/register" className="btn btn-primary bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Screen with Art Preview */}
      <section className="pt-20 pb-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="py-12 animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Your <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">Digital Canvas</span> Awaits
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional drawing tools, unlimited layers, real-time collaboration. Create stunning digital art with the most intuitive canvas on the web.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/register" className="btn btn-primary bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-lg px-8 py-4">
                  Start Creating Free
                </Link>
                <Link href="/gallery" className="btn btn-secondary text-lg px-8 py-4">
                  View Gallery
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-pink-600">300K+</div>
                  <div className="text-sm text-gray-600">Artists</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">2M+</div>
                  <div className="text-sm text-gray-600">Artworks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">100+</div>
                  <div className="text-sm text-gray-600">Challenges</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100 flex items-center justify-center">
              <div className="text-center">
                <PaintBrushIcon className="h-32 w-32 text-pink-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-700">Canvas Preview</p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-24 container-custom">
            <Link href="/canvas" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-pink-100 flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors">
                <PaintBrushIcon className="h-7 w-7 text-pink-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Creative Canvas</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional drawing tools with layers, brushes, and effects. Real-time collaboration and unlimited creativity.
              </p>
            </Link>

            <Link href="/gallery" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <PhotoIcon className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Gallery Explorer</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover amazing artwork from creators worldwide. Like, comment, and get inspired by the community.
              </p>
            </Link>

            <Link href="/challenges" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <TrophyIcon className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Challenge Hub</h3>
              <p className="text-gray-600 leading-relaxed">
                Join weekly creative challenges, compete with others, and win prizes. Push your skills to the next level.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-pink-600 mb-2">2M+</div>
              <div className="text-gray-600 text-lg">Artworks Created</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-purple-600 mb-2">300K+</div>
              <div className="text-gray-600 text-lg">Active Artists</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600 text-lg">Weekly Challenges</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Creative Tools</h2>
            <p className="text-xl text-gray-600">Everything you need to bring your ideas to life</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6 animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center">
                  <SwatchIcon className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Brushes & Tools</h3>
                <p className="text-gray-600">Professional-grade brushes, pencils, markers, and effects for every style.</p>
              </div>
            </div>

            <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <UserGroupIcon className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Real-time Collaboration</h3>
                <p className="text-gray-600">Create together with friends in real-time with live cursors and chat.</p>
              </div>
            </div>

            <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <SparklesIcon className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Layers & Effects</h3>
                <p className="text-gray-600">Organize your work with unlimited layers and apply stunning effects.</p>
              </div>
            </div>

            <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center">
                  <TrophyIcon className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Challenges & Rewards</h3>
                <p className="text-gray-600">Participate in challenges, earn badges, and showcase your skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Creating Today
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join our community of artists and bring your imagination to life on the digital canvas.
          </p>
          <button className="btn bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-4">
            Create Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <PaintBrushIcon className="h-6 w-6 text-pink-400" />
                <span className="text-white font-bold">Lush Playground</span>
              </div>
              <p className="text-sm">Create, share, and explore digital art.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/canvas" className="hover:text-white transition-colors">Canvas</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                <li><Link href="/challenges" className="hover:text-white transition-colors">Challenges</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Artists</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guidelines</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            © 2026 Lush Playground. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
