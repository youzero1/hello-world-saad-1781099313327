import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import clsx from 'clsx';

export default function HomePage() {
  const [clicked, setClicked] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center px-6">
        <div className="flex justify-center mb-6">
          <div
            className={clsx(
              'p-4 rounded-full transition-colors duration-300',
              clicked ? 'bg-indigo-600' : 'bg-indigo-100'
            )}
          >
            <Sparkles
              className={clsx(
                'w-10 h-10 transition-colors duration-300',
                clicked ? 'text-white' : 'text-indigo-600'
              )}
            />
          </div>
        </div>

        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Hello,{' '}
          <span className="text-indigo-600">World!</span>
        </h1>

        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
          Welcome to your brand-new React + Vite application, styled with Tailwind CSS.
        </p>

        <button
          onClick={() => setClicked((prev) => !prev)}
          className={clsx(
            'inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2',
            clicked
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50'
          )}
        >
          <Sparkles className="w-4 h-4" />
          {clicked ? "You clicked me! 🎉" : 'Click me'}
        </button>

        <p className="mt-10 text-xs text-gray-400">
          Built with React 19 · Vite · TypeScript · Tailwind CSS
        </p>
      </div>
    </main>
  );
}
