'use client'

import Link from 'next/link'
import { PaintBrushIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function CommissionsPage() {
  const commissions = [
    { id: 1, type: 'Character Design', price: 150, delivery: '3-5 days', slots: 2, icon: '👤' },
    { id: 2, type: 'Portrait', price: 100, delivery: '2-3 days', slots: 5, icon: '🎨' },
    { id: 3, type: 'Illustration', price: 200, delivery: '5-7 days', slots: 1, icon: '🖼️' },
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
            <CurrencyDollarIcon className="h-10 w-10 text-green-600" />
            <div>
              <h1 className="text-4xl font-bold">Commissions</h1>
              <p className="text-gray-600">Offer your services and earn from your art</p>
            </div>
          </div>

          <div className="space-y-4">
            {commissions.map(comm => (
              <div key={comm.id} className="card p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{comm.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{comm.type}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <CurrencyDollarIcon className="h-4 w-4" />
                        ${comm.price}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        {comm.delivery}
                      </span>
                      <span className="text-green-600">{comm.slots} slots available</span>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">Request Commission</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
