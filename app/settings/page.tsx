'use client'

import Link from 'next/link'
import { PaintBrushIcon, UserIcon, BellIcon, ShieldCheckIcon, CreditCardIcon } from '@heroicons/react/24/outline'

export default function SettingsPage() {
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
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Settings</h1>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/settings/profile" className="card p-6 hover-lift cursor-pointer">
              <UserIcon className="h-8 w-8 text-pink-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Artist Profile</h3>
              <p className="text-gray-600">Update your portfolio and bio</p>
            </Link>

            <Link href="/settings/notifications" className="card p-6 hover-lift cursor-pointer">
              <BellIcon className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Notifications</h3>
              <p className="text-gray-600">Manage notification preferences</p>
            </Link>

            <Link href="/settings/privacy" className="card p-6 hover-lift cursor-pointer">
              <ShieldCheckIcon className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Privacy</h3>
              <p className="text-gray-600">Control who sees your work</p>
            </Link>

            <Link href="/settings/billing" className="card p-6 hover-lift cursor-pointer">
              <CreditCardIcon className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Subscription</h3>
              <p className="text-gray-600">Manage your premium plan</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
