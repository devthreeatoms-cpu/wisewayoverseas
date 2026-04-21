"use client";

import Link from 'next/link';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-9xl font-bold text-primary">Oops!</h1>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Something went wrong!
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              We{`'`}re sorry, but something unexpected happened.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Try again
            </button>
            
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}