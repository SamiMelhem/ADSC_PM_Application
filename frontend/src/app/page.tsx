// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold">Welcome to ADSC Project Manager Hub</h1>
      <p className="mt-4 text-lg">Your central hub for managing projects and members.</p>
      <Link href="/login">
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go to Login
        </button>
      </Link>
    </div>
  );
}
