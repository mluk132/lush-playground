'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PaintBrushIcon, EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    artistType: '',
    experience: '',
    interests: [] as string[]
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const artistTypes = ['Digital Artist', 'Illustrator', 'Graphic Designer', 'Hobbyist', 'Student', 'Professional']
  const experienceLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  const interestOptions = ['Character Design', 'Landscapes', 'Abstract', 'Portraits', 'Comics', 'Concept Art']

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 2) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match')
        return
      }
      setStep(2)
      return
    }

    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/login?registered=true')
      } else {
        setError(data.error || 'Registration failed')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <PaintBrushIcon className="h-12 w-12 text-pink-600" />
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Finder
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {step === 1 ? 'Create your artist account' : 'Tell us about your art'}
          </h2>
          <p className="mt-2 text-gray-600">
            {step === 1 ? 'Join our creative community' : 'Help us personalize your experience'}
          </p>
        </div>

        <div className="card p-8">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-pink-600' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}>
              2
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input pl-10 w-full"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input pl-10 w-full"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="input pl-10 w-full"
                      placeholder="••••••••"
                      minLength={8}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="input pl-10 w-full"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I am a...</label>
                  <select
                    required
                    value={formData.artistType}
                    onChange={(e) => setFormData({ ...formData, artistType: e.target.value })}
                    className="input w-full"
                  >
                    <option value="">Select artist type</option>
                    {artistTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                  <div className="grid grid-cols-2 gap-3">
                    {experienceLevels.map(level => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData({ ...formData, experience: level })}
                        className={`py-3 px-4 rounded-lg border-2 transition-all ${
                          formData.experience === level
                            ? 'border-pink-600 bg-pink-50 text-pink-700'
                            : 'border-gray-200 hover:border-pink-300'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interests (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map(interest => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`py-2 px-3 rounded-lg border-2 text-sm transition-all ${
                          formData.interests.includes(interest)
                            ? 'border-pink-600 bg-pink-50 text-pink-700'
                            : 'border-gray-200 hover:border-pink-300'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="flex gap-3">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 btn btn-secondary"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={loading}
                className="flex-1 btn btn-primary bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 disabled:opacity-50"
              >
                {loading ? 'Creating...' : step === 1 ? 'Continue' : 'Create Account'}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-pink-600 hover:text-pink-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
