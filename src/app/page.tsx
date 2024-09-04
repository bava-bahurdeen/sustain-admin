'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function page() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <header className="absolute top-0 left-0 w-full bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Your Brand</h1>
            <nav>
              <Link href={'/pages/signin'}>
                <button className="text-gray-800 font-medium hover:text-blue-500">
                  Login
                </button>
              </Link>
            </nav>
          </div>
        </header>

        <main className="text-center p-6">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to Your Dashboard
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Please log in to continue.
          </p>
          <Link href={'/pages/signin'}>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </Link>
        </main>

        <footer className="absolute bottom-0 left-0 w-full bg-gray-200 py-4">
          <div className="max-w-7xl mx-auto text-center text-gray-600">
            © 2024 Your Brand. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
