// src/app/login/page.tsx
'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      {!session ? (
        <>
          <h1 className="text-3xl font-bold">Login</h1>
          <button
            onClick={() => signIn('email')}
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign in with Email
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold">Welcome, {session.user?.email}</h1>
          <button
            onClick={() => signOut()}
            className="mt-6 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
}
