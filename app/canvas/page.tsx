'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  PaintBrushIcon,
  PencilIcon,
  SwatchIcon,
  Square3Stack3DIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  CloudArrowDownIcon
, PaintBrushIcon } from '@heroicons/react/24/outline'

export default function CanvasPage() {
  const [tool, setTool] = useState('brush')
  const [color, setColor] = useState('#000000')
  const [brushSize, setBrushSize] = useState(5)

  const tools = [
    { id: 'brush', name: 'Brush', icon: PaintBrushIcon },
    { id: 'pencil', name: 'Pencil', icon: PencilIcon },
    { id: 'eraser', name: 'Eraser', icon: SwatchIcon },
  ]

  const colors = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080'
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Bar */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container-custom py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <PaintBrushIcon className="h-6 w-6 text-pink-500" />
              <span className="text-white font-bold">Finder</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="btn btn-ghost text-white text-sm">
                <CloudArrowDownIcon className="h-5 w-5 mr-2" />
                Export
              </button>
              <button className="btn btn-primary bg-gradient-to-r from-pink-600 to-orange-600 text-sm">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-60px)]">
        {/* Left Sidebar - Tools */}
        <div className="w-20 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-6 gap-4">
          {tools.map((t) => (
            <button
              key={t.id}
              onClick={() => setTool(t.id)}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                tool === t.id
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
              }`}
              title={t.name}
            >
              <t.icon className="h-6 w-6" />
            </button>
          ))}
          
          <div className="border-t border-gray-700 w-full my-2"></div>
          
          <button className="w-12 h-12 rounded-lg bg-gray-700 text-gray-400 hover:bg-gray-600 flex items-center justify-center">
            <ArrowUturnLeftIcon className="h-6 w-6" />
          </button>
          <button className="w-12 h-12 rounded-lg bg-gray-700 text-gray-400 hover:bg-gray-600 flex items-center justify-center">
            <ArrowUturnRightIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 flex items-center justify-center bg-gray-900 p-8">
          <div className="bg-white rounded-lg shadow-2xl" style={{ width: '800px', height: '600px' }}>
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <PaintBrushIcon className="h-24 w-24 mx-auto mb-4 text-gray-300" />
                <p className="text-xl font-semibold mb-2">Canvas Ready</p>
                <p className="text-sm">Select a tool and start creating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 p-6 overflow-y-auto">
          {/* Color Picker */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4">Color</h3>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-10 h-10 rounded-lg border-2 transition-all ${
                    color === c ? 'border-pink-500 scale-110' : 'border-gray-600'
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-12 rounded-lg cursor-pointer"
            />
          </div>

          {/* Brush Size */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4">Brush Size: {brushSize}px</h3>
            <input
              type="range"
              min="1"
              max="50"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Layers */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Layers</h3>
              <button className="text-pink-500 text-sm hover:text-pink-400">+ Add</button>
            </div>
            <div className="space-y-2">
              {['Background', 'Layer 1', 'Layer 2'].map((layer, i) => (
                <div
                  key={i}
                  className="bg-gray-700 rounded-lg p-3 flex items-center justify-between hover:bg-gray-600 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Square3Stack3DIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-white text-sm">{layer}</span>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full btn btn-secondary text-sm">Clear Canvas</button>
              <button className="w-full btn btn-secondary text-sm">Add Text</button>
              <button className="w-full btn btn-secondary text-sm">Add Shape</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
